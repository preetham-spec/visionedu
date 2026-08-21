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
              <a href="https://visionedu.vercel.app" target="_blank" rel="noopener noreferrer">
                https://visionedu.vercel.app
              </a>
              ) or interact with our online admission enquiry forms.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide when filling out admission enquiry forms,
              requesting callbacks, or contacting our counselling team:
            </p>
            <ul>
              <li><strong>Personal Identification:</strong> Full Name, Date of Birth, Gender.</li>
              <li><strong>Contact Information:</strong> Mobile/WhatsApp Number, Email Address, Residential Address.</li>
              <li><strong>Academic Details:</strong> Current Grade/Class, Target Course (e.g., 1st PUC, NEET Repeaters, CET), School/College Name.</li>
              <li><strong>Parent/Guardian Information:</strong> Parent/Guardian Name, Phone Number, Occupation.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device type, and interaction data collected automatically via essential cookies or analytics to optimize site performance.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information strictly for legitimate academic and administrative purposes, including:</p>
            <ul>
              <li><strong>Admission Counselling:</strong> Contacting you via Phone, SMS, Email, or WhatsApp to address admission enquiries and provide course details.</li>
              <li><strong>Application Processing:</strong> Processing requests for campus visits, counseling sessions, or entrance exam registrations.</li>
              <li><strong>Communication &amp; Updates:</strong> Sending important updates regarding scholarship tests, result announcements, fee structures, and academic events.</li>
              <li><strong>Service Improvement:</strong> Improving our website navigation, user experience, and digital communication strategies.</li>
            </ul>

            <h2>3. Legal Basis for Processing (DPDP Act Compliance)</h2>
            <p>In accordance with India's Digital Personal Data Protection (DPDP) Act 2023:</p>
            <ul>
              <li>We process your personal data based on your <strong>explicit consent</strong> given when you submit an enquiry form.</li>
              <li>For applicants who are minors (under 18 years of age), consent is deemed to be provided or authorized by the parent or legal guardian filling out the form.</li>
              <li>You reserve the right to withdraw your consent at any time by contacting our Grievance Officer.</li>
            </ul>

            <h2>4. Sharing &amp; Disclosure of Data</h2>
            <p><strong>We do NOT sell, rent, or trade your personal information to third parties.</strong></p>
            <p>We may share data only under the following limited circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party technology providers (e.g., email notification services, SMS gateways, CRM software) operating under strict confidentiality agreements solely to process communications on our behalf.</li>
              <li><strong>Legal Obligations:</strong> When required by law, court order, or governmental authorities to comply with statutory requirements.</li>
            </ul>

            <h2>5. Data Security &amp; Storage</h2>
            <p>
              We implement appropriate technical, administrative, and organizational security measures to protect
              your personal data against unauthorized access, alteration, disclosure, or destruction. Access to
              student lead data is restricted exclusively to authorized admission staff and administrative
              counselors.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes for which it was
              collected, including satisfying any administrative, legal, or accounting obligations.
            </p>

            <h2>7. Your Data Protection Rights</h2>
            <p>Under applicable Indian data protection laws, you have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request a summary of personal data held about you.</li>
              <li><strong>Right to Correction:</strong> Request correction or updating of inaccurate/incomplete details.</li>
              <li><strong>Right to Erasure / Withdrawal:</strong> Request the removal of your personal contact details from our active outreach/marketing database.</li>
            </ul>
            <p>
              To exercise any of these rights, please email us at{' '}
              <a href="mailto:admissions@visionedu.in">admissions@visionedu.in</a>.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to external sites (such as Google Maps, social media profiles, or
              payment gateways). We are not responsible for the privacy practices or content of third-party
              websites. We encourage you to review the privacy policies of any third-party site you visit.
            </p>

            <h2>9. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes.
              Updated versions will be posted directly on this page with a revised "Last Updated" date.
            </p>

            <h2>10. Contact &amp; Grievance Redressal</h2>
            <p>
              If you have any questions, concerns, or grievances regarding this Privacy Policy or data processing
              practices, please contact our Data Grievance Officer:
            </p>
            <ul>
              <li><strong>Institution:</strong> Vision PU College &amp; NEET Academy</li>
              <li>
                <strong>Email:</strong> <a href="mailto:admissions@visionedu.in">admissions@visionedu.in</a> /{' '}
                <a href="mailto:support@visionedu.in">support@visionedu.in</a>
              </li>
              <li><strong>Location:</strong> Kalyan Nagar / Doddagubbi, Bengaluru, Karnataka, India</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
