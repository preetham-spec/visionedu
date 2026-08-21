import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms and Conditions"
        description="Terms and conditions governing use of the Vision PU College & NEET Academy website, admissions, fees, refunds, and campus conduct."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms and Conditions', path: '/terms-and-conditions' },
        ]}
      />

      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-700/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent-600/20 rounded-full blur-[150px]"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-950/95"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-200 mb-4 fade-in-up">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-white font-medium">Terms and Conditions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 fade-in-up delay-100">
            Terms and <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Conditions</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed fade-in-up delay-200">
            Last Updated: August 2026
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-content">
            <p>
              By accessing or using the <strong>Vision PU College &amp; NEET Academy</strong> website or submitting
              enquiry forms, you agree to comply with the following Terms and Conditions.
            </p>

            <h2>1. Accuracy of Academic Information</h2>
            <p>
              All course details, faculty profiles, fee structures, and event schedules published on the website
              are provided for general informational purposes. Management reserves the right to modify academic
              structures without prior notice.
            </p>

            <h2>2. Admissions &amp; Enrollment</h2>
            <ul>
              <li>
                Submitting an online enquiry does not guarantee admission. Admissions are finalized after
                physical/virtual counselling, document verification, and fee submission.
              </li>
              <li>
                Management reserves the right to reject an application if provided credentials are found to be
                false or altered.
              </li>
            </ul>

            <h2>3. Fees &amp; Refund Guidelines</h2>
            <p>
              Registration and admission fees are non-refundable. Tuition and hostel fee refunds are subject
              strictly to institutional rules and Department of Pre-University Education guidelines.
            </p>

            <h2>4. Governing Law &amp; Jurisdiction</h2>
            <p>
              These terms are governed by the laws of India. Any legal disputes arising out of website usage or
              admissions are subject exclusively to the courts of <strong>Bengaluru, Karnataka</strong>.
            </p>

            <h2>Contact Information</h2>
            <ul>
              <li><strong>Phone:</strong> <a href="tel:+918047185111">080 471 85111</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@visionedu.in">info@visionedu.in</a></li>
              <li>
                <strong>Website:</strong>{' '}
                <a href="https://www.visionedu.in" target="_blank" rel="noopener noreferrer">
                  www.visionedu.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
