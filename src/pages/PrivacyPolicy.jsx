import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Vision PU College & NEET Academy collects, uses, and protects your personal information when you use our website or submit an admission enquiry."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
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
            <span className="text-white font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 fade-in-up delay-100">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">Policy</span>
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
              Welcome to <strong>Vision PU College &amp; NEET Academy</strong> ("we," "our," or "us"). We are
              committed to protecting the privacy and personal data of our prospective students, parents, alumni,
              and website visitors ("you").
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information
              when you visit our website (
              <a href="https://www.visionedu.in" target="_blank" rel="noopener noreferrer">
                www.visionedu.in
              </a>
              ) or interact with our online enquiry forms.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect information voluntarily provided when filling out enquiry forms or requesting callbacks:</p>
            <ul>
              <li><strong>Personal Details:</strong> Student Name, Date of Birth, Gender.</li>
              <li><strong>Contact Information:</strong> Phone Number, Email Address.</li>
              <li><strong>Academic Information:</strong> Current Class, Target Stream (1st PUC, 2nd PUC, NEET Repeaters, CET).</li>
              <li><strong>Parent/Guardian Info:</strong> Parent Name, Contact Details, Address.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We process your data strictly for legitimate educational and administrative purposes:</p>
            <ul>
              <li>Contacting you regarding admissions, counselling sessions, and course details.</li>
              <li>Sending updates on scholarship tests, fee structures, and academic events.</li>
              <li>Improving our website experience and student support services.</li>
            </ul>

            <h2>3. Legal Basis (DPDP Act Compliance)</h2>
            <p>
              In accordance with India's Digital Personal Data Protection (DPDP) Act 2023, data is processed based
              on explicit consent provided upon submitting an enquiry form. For minors (under 18 years), consent is
              provided or authorized by the parent or legal guardian.
            </p>

            <h2>4. Data Protection Rights &amp; Grievances</h2>
            <p>
              You reserve the right to request access, correction, or removal of your personal contact information
              from our active outreach databases.
            </p>
            <p><strong>Grievance Contact:</strong></p>
            <ul>
              <li><strong>Institution:</strong> Vision PU College &amp; NEET Academy</li>
              <li><strong>Phone:</strong> <a href="tel:+918047185111">080 471 85111</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@visionedu.in">info@visionedu.in</a></li>
              <li><strong>Address:</strong> Kalyan Nagar / Doddagubbi, Bengaluru, Karnataka, India</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
