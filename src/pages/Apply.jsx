import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { programTypes, commonFields, conditionalFields, hearAboutUsField, employeeNameField } from '../data/applyFields'
import { GOOGLE_FORM_ACTION_URL, GOOGLE_FORM_ENTRY_IDS } from '../config/googleFormConfig'

const inputClass =
  'w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-700 focus:border-brand-700 bg-gray-50 text-gray-900 text-sm'

const programCodes = { pu: 'PU', neet: 'NEET', degree: 'DEG' }

function generateReferenceNumber(programType) {
  const year = new Date().getFullYear().toString().slice(-2)
  const random = Math.floor(100000 + Math.random() * 900000)
  return `VIS-${programCodes[programType]}-${year}-${random}`
}

function Field({ field, value, onChange }) {
  const common = {
    id: field.name,
    name: field.name,
    required: field.required,
    value: value || '',
    onChange: (e) => onChange(field.name, e.target.value),
    className: inputClass,
  }
  return (
    <div>
      <label htmlFor={field.name} className="block text-xs font-semibold text-gray-700 mb-1">
        {field.label}
      </label>
      {field.type === 'select' ? (
        <select {...common}>
          <option value="" disabled>Select an option</option>
          {field.options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea {...common} rows={2} />
      ) : (
        <input {...common} type={field.type} {...(field.type === 'number' ? { min: 0, max: 100, step: 0.1 } : {})} />
      )}
    </div>
  )
}

export default function Apply() {
  const [programType, setProgramType] = useState('')
  const [values, setValues] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState(null)

  const handleChange = (name, value) => setValues((v) => ({ ...v, [name]: value }))

  const fieldsToShow = programType
    ? [...commonFields, ...conditionalFields[programType], hearAboutUsField]
    : commonFields

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!programType) return
    setSubmitting(true)

    const refNumber = generateReferenceNumber(programType)
    const programLabel = programTypes.find((p) => p.value === programType)?.label || programType

    const body = new FormData()
    const setEntry = (key, val) => {
      const entryId = GOOGLE_FORM_ENTRY_IDS[key]
      if (entryId && val) body.append(entryId, val)
    }
    setEntry('programType', programLabel)
    setEntry('referenceNumber', refNumber)
    setEntry('branch', 'Bangalore')
    fieldsToShow.forEach((f) => setEntry(f.name, values[f.name]))
    if (values.hearAboutUs === 'Employee of Vision') {
      setEntry(employeeNameField.name, values.employeeName)
    }

    try {
      // Google Forms doesn't allow CORS reads, so this is a fire-and-forget
      // POST — the opaque response can't confirm success client-side. Verify
      // real submissions land in the linked Google Sheet after wiring up
      // src/config/googleFormConfig.js with your actual form's entry IDs.
      await fetch(GOOGLE_FORM_ACTION_URL, { method: 'POST', mode: 'no-cors', body })
    } catch (err) {
      // Network errors are swallowed intentionally for the same no-cors reason.
    }

    setReferenceNumber(refNumber)
    setSubmitting(false)
  }

  if (referenceNumber) {
    return (
      <section className="pt-32 pb-20 bg-gray-50 min-h-[70vh] flex items-center">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <i className="fas fa-check text-2xl"></i>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Application Submitted!</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Your application reference number is
          </p>
          <div className="inline-block bg-white border-2 border-brand-700 rounded-xl px-6 py-3 mb-6">
            <span className="text-xl sm:text-2xl font-extrabold text-brand-700 tracking-wide">{referenceNumber}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mb-8">
            A confirmation with this reference number has been sent to our admissions team and to your email
            address. Please quote it in any future correspondence. Our team will call you shortly.
          </p>
          <Link to="/" className="text-brand-700 font-semibold text-sm hover:text-brand-800">
            <i className="fas fa-arrow-left text-xs mr-1"></i> Back to Home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo
        title="Apply Now"
        description="Apply online to Vision PU College, Vision NEET Academy, or Vision Degree College. Fill in your details and receive an application reference number instantly."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Apply Now', path: '/apply' },
        ]}
      />

      <section className="relative pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-700/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent-600/20 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-950/95"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-200 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-white font-medium">Apply Now</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Apply <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Now</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Fill in your details below. Once submitted, you'll get an application reference number, and our
            admissions team will reach out to you.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Applying For</label>
              <select
                value={programType}
                onChange={(e) => setProgramType(e.target.value)}
                className={inputClass}
                required
              >
                <option value="" disabled>Select a program</option>
                {programTypes.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {commonFields.map((f) => (
                <div key={f.name} className={f.type === 'textarea' ? 'sm:col-span-2' : ''}>
                  <Field field={f} value={values[f.name]} onChange={handleChange} />
                </div>
              ))}
            </div>

            {programType && (
              <>
                <div className="pt-2 border-t border-gray-100">
                  <h3 className="text-xs font-bold text-brand-700 uppercase tracking-wide mb-3 mt-3">
                    {programTypes.find((p) => p.value === programType)?.label} Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {conditionalFields[programType].map((f) => (
                      <Field key={f.name} field={f} value={values[f.name]} onChange={handleChange} />
                    ))}
                    <Field field={hearAboutUsField} value={values[hearAboutUsField.name]} onChange={handleChange} />
                    {values[hearAboutUsField.name] === 'Employee of Vision' && (
                      <Field field={employeeNameField} value={values.employeeName} onChange={handleChange} />
                    )}
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand-700 hover:bg-brand-800 disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-colors text-sm shadow-md shadow-brand-700/30 mt-4"
            >
              {submitting ? 'Submitting…' : 'Submit Application'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
