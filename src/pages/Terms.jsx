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
              Welcome to <strong>Vision PU College &amp; NEET Academy</strong> ("we," "our," or "us"). By accessing
              or using our website (
              <a href="https://visionedu.vercel.app" target="_blank" rel="noopener noreferrer">
                https://visionedu.vercel.app
              </a>
              ), submitting admission enquiry forms, or enrolling in our academic programs, you ("User," "Student,"
              or "Parent/Guardian") agree to be bound by these Terms and Conditions.
            </p>
            <p>If you do not agree with any part of these Terms, you must not use our website or services.</p>

            <h2>1. Website Use &amp; Information Accuracy</h2>
            <ul>
              <li>
                <strong>Informational Purpose:</strong> The content provided on this website—including course
                structures, faculty details, campus facilities, fee structures, and scholarship details—is for
                general informational purposes only. We reserve the right to modify or update academic programs,
                schedules, and policies without prior notice.
              </li>
              <li>
                <strong>Accuracy:</strong> While we strive to ensure all information is accurate and up to date,
                Vision PU College makes no warranties regarding the completeness or reliability of website content.
                Decisions made based on website content should be verified directly with our admission office.
              </li>
            </ul>

            <h2>2. Admissions &amp; Enrollment</h2>
            <ul>
              <li>
                <strong>Eligibility:</strong> Admission to Pre-University (PU) courses, NEET integrated programs, or
                repeater batches is subject to meeting the academic criteria set by the Pre-University Education
                Board, Karnataka, and the internal criteria of Vision PU College.
              </li>
              <li>
                <strong>Application Submission:</strong> Filling out an online enquiry or registration form does not
                guarantee admission. Admissions are confirmed only after document verification, campus counseling,
                and receipt of required fees.
              </li>
              <li>
                <strong>Right of Refusal:</strong> Vision PU College reserves the right to reject any application or
                cancel admission at any stage if the information provided is found to be false, forged, or
                misleading.
              </li>
            </ul>

            <h2>3. Fee Payment &amp; Refund Policy</h2>
            <ul>
              <li>
                <strong>Fee Commitment:</strong> By enrolling your ward, parents/guardians agree to adhere to the
                payment schedule outlined during admission counseling.
              </li>
              <li>
                <strong>Refund Policy:</strong> Registration fees, admission fees, and study material fees are
                generally <strong>non-refundable</strong>. Tuition or hostel fee refunds (if applicable) are
                governed strictly by the college's internal refund policy and the guidelines of the PU Board.
                Refund requests must be submitted in writing to the administration office.
              </li>
              <li>
                <strong>Delayed Payments:</strong> Failure to clear fee dues within the stipulated timeline may
                result in suspended access to classes, exams, or residential facilities.
              </li>
            </ul>

            <h2>4. Code of Conduct &amp; Campus Discipline</h2>
            <ul>
              <li>
                <strong>Student Behavior:</strong> Students are expected to maintain strict discipline on all
                campuses (Main Campus, Doddagubbi Boys Residential, and Kalyan Nagar/Anagalapura Girls Residential).
              </li>
              <li>
                <strong>Mobile Phone Policy:</strong> Use of mobile phones, electronic gadgets, or unapproved
                devices is strictly prohibited inside classrooms, study hours, and residential dormitories unless
                explicitly authorized for academic purposes.
              </li>
              <li>
                <strong>Attendance:</strong> Mandatory attendance during regular classes, supervised evening study
                hours, and mock exams is required. Chronic absenteeism may lead to disciplinary action.
              </li>
              <li>
                <strong>Disciplinary Action:</strong> The management reserves the right to suspend or rusticate any
                student found violating college rules, damaging campus property, or engaging in ragging, bullying,
                or illegal activities.
              </li>
            </ul>

            <h2>5. Intellectual Property Rights</h2>
            <ul>
              <li>
                <strong>Study Material:</strong> All printed and digital study materials, mock test papers, DPPs
                (Daily Practice Problems), and academic resources provided by Vision NEET Academy remain our
                exclusive intellectual property. They are strictly for the enrolled student's personal use and
                cannot be reproduced, sold, or distributed.
              </li>
              <li>
                <strong>Website Content:</strong> All text, graphics, logos, and images on this website are the
                property of Vision PU College &amp; NEET Academy and are protected by copyright laws.
              </li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <ul>
              <li>
                <strong>Academic Performance:</strong> While we provide expert faculty, rigorous study plans, and
                continuous assessment, Vision PU College does not guarantee specific exam ranks, scores, or medical
                seat allotments. Student success depends on individual effort and capability.
              </li>
              <li>
                <strong>Technical Issues:</strong> We are not liable for any technical failures, data loss, or
                server downtime regarding website access or online payment gateway failures.
              </li>
            </ul>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to revise these Terms and Conditions at any time. Significant updates will be
              posted on this page. Your continued use of the website or continuation of enrollment signifies
              acceptance of the updated terms.
            </p>

            <h2>8. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
              Any disputes arising out of these terms, website usage, or admissions shall be subject to the
              exclusive jurisdiction of the courts located in <strong>Bengaluru, Karnataka</strong>.
            </p>

            <h2>9. Contact Information</h2>
            <p>For any clarifications regarding these Terms and Conditions, please contact us:</p>
            <ul>
              <li><strong>Institution:</strong> Vision PU College &amp; NEET Academy</li>
              <li>
                <strong>Administration Email:</strong> <a href="mailto:admin@visionedu.in">admin@visionedu.in</a> /{' '}
                <a href="mailto:support@visionedu.in">support@visionedu.in</a>
              </li>
              <li><strong>Primary Location:</strong> Kalyan Nagar / Doddagubbi, Bengaluru, Karnataka, India</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
