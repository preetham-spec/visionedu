import EnquiryForm from './EnquiryForm'

export default function Admissions() {
  return (
    <section id="admissions" className="py-12 bg-brand-950 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row">
          <div className="p-6 sm:p-8 bg-brand-800 text-white sm:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">Secure Your Seat</h2>
            <p className="text-brand-100 mb-4 text-xs sm:text-sm">
              Admissions for PU Science, Commerce & Degree are open. Start your journey today.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-100 mb-6">
              <li className="flex items-center gap-2"><i className="fas fa-check text-accent-400"></i> Expert & Experienced Faculty</li>
              <li className="flex items-center gap-2"><i className="fas fa-check text-accent-400"></i> Scholarships Available</li>
            </ul>
            <div className="mt-auto">
              <p className="text-[10px] text-brand-200 uppercase tracking-wider">Direct Admission Line</p>
              <p className="font-bold text-lg">080 471 85111</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 sm:p-8 sm:w-1/2">
            <EnquiryForm showEmail submitLabel="Submit Form" successMessage="Enquiry submitted!" />
          </div>
        </div>
      </div>
    </section>
  )
}
