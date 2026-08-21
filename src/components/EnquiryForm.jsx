const courseOptions = [
  { value: 'science', label: 'Science (PCMB / PCMC / PCME)' },
  { value: 'commerce', label: 'Commerce' },
  { value: 'degree', label: 'Degree' },
]

const neetOptions = [
  { value: 'long-term', label: 'Long-Term Course' },
  { value: 'short-term', label: 'Short-Term Course' },
]

const inputClass =
  'w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-700 focus:border-brand-700 bg-gray-50 text-gray-900 text-sm'

/**
 * Shared lead-capture form used across the site.
 * variant="neet" swaps the course dropdown for Short-Term / Long-Term (used on the NEET Academy page).
 */
export default function EnquiryForm({
  variant = 'general',
  showMarks = false,
  showBoard = false,
  showGender = false,
  showEmail = false,
  submitLabel = 'Submit Enquiry',
  successMessage = 'Enquiry submitted! Our team will contact you shortly.',
}) {
  const isNeet = variant === 'neet'
  const options = isNeet ? neetOptions : courseOptions
  const programLabel = isNeet ? 'Which Program?' : 'Which Course?'

  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault()
        alert(successMessage)
      }}
    >
      <input type="text" className={inputClass} placeholder="Student Name" required />

      {showGender && (
        <select className={inputClass} required defaultValue="">
          <option value="" disabled>Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      )}

      <input type="tel" className={inputClass} placeholder="10-digit Phone Number" required />

      <select className={inputClass} required defaultValue="">
        <option value="" disabled>{programLabel}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      {showBoard && (
        <select className={inputClass} required defaultValue="">
          <option value="" disabled>Select Current Board</option>
          <option value="sslc">Karnataka SSLC</option>
          <option value="cbse">CBSE</option>
          <option value="icse">ICSE</option>
        </select>
      )}

      {showMarks && (
        <input
          type="number"
          min="0"
          max="100"
          step="0.1"
          className={inputClass}
          placeholder="10th Board Marks (%)"
          required
        />
      )}

      {showEmail && <input type="email" className={inputClass} placeholder="Email" />}

      <button
        type="submit"
        className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-2.5 rounded-lg transition-colors mt-2 text-sm shadow-md shadow-brand-700/30"
      >
        {submitLabel}
      </button>
    </form>
  )
}
