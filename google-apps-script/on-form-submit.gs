/**
 * Vision PU College / Vision NEET Academy — Apply form notification script.
 *
 * Sends via SendGrid's API instead of Gmail/MailApp, so delivery doesn't
 * depend on any personal or staff Google account at all — just an API key.
 *
 * SETUP:
 * 1. Open the Google Sheet linked to your Apply Form (Form editor > Responses
 *    tab > the green Sheets icon).
 * 2. Extensions > Apps Script. Delete the placeholder code and paste this file.
 * 3. In SendGrid: Settings > Sender Authentication > Verify a Single Sender
 *    for admissions@visionedu.in (click the confirmation link SendGrid emails
 *    to that inbox). Then Settings > API Keys > Create API Key (Mail Send
 *    permission is enough) and copy it.
 * 4. Paste that key into SENDGRID_API_KEY below.
 * 5. Run > select the `setupTrigger` function once, and approve the Google
 *    permission prompts (it still needs to read the Sheet — just not to send
 *    mail anymore).
 * 6. Submit a test application from the site and confirm both emails arrive.
 *
 * This does NOT generate the reference number — the website already generates
 * one at submit time and sends it in as the "Reference Number" answer, so the
 * number shown to the applicant on the site and the number in this email
 * always match. This script just reads it back out and emails it.
 */

const SENDGRID_API_KEY = 'REPLACE_WITH_YOUR_SENDGRID_API_KEY'
const ADMIN_EMAILS = ['admissions@visionedu.in', 'pavithra@visionedu.in']
const SEND_AS = 'admissions@visionedu.in' // must match your verified Single Sender in SendGrid
const SEND_AS_NAME = 'Vision Admissions'

function setupTrigger() {
  ScriptApp.getProjectTriggers().forEach((t) => ScriptApp.deleteTrigger(t))
  ScriptApp.newTrigger('onFormSubmit')
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onFormSubmit()
    .create()
}

function sendViaSendGrid(toEmail, subject, body) {
  const payload = {
    personalizations: [{ to: [{ email: toEmail }] }],
    from: { email: SEND_AS, name: SEND_AS_NAME },
    subject: subject,
    content: [{ type: 'text/plain', value: body }],
  }
  UrlFetchApp.fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: `Bearer ${SENDGRID_API_KEY}` },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true, // so a bad API key shows up in Executions instead of throwing silently
  })
}

function onFormSubmit(e) {
  const responses = e.namedValues // { "Question title": ["answer"] }

  const get = (label) => (responses[label] ? responses[label][0] : '')

  const refNumber = get('Reference Number')
  const studentName = get("Student Full Name (as per SSLC/marks card)")
  const studentEmail = get('Student Email')
  const programType = get('Applying For')

  const summaryLines = Object.keys(responses)
    .filter((label) => label !== 'Timestamp')
    .map((label) => `${label}: ${get(label)}`)
    .join('\n')

  // Email to college admin(s)
  ADMIN_EMAILS.forEach((adminEmail) => {
    sendViaSendGrid(
      adminEmail,
      `New Application ${refNumber} — ${studentName} (${programType})`,
      `A new application was submitted.\n\n${summaryLines}`
    )
  })

  // Confirmation email to applicant
  if (studentEmail) {
    sendViaSendGrid(
      studentEmail,
      `Application Received — Reference Number ${refNumber}`,
      `Dear ${studentName},\n\n` +
        `Thank you for applying to Vision — your application for ${programType} has been received.\n\n` +
        `Your application reference number is: ${refNumber}\n\n` +
        `Please quote this reference number in any future correspondence with our admissions team.\n\n` +
        `We will contact you shortly at the phone number you provided.\n\n` +
        `Regards,\nVision Admissions Team\n080 471 85111`
    )
  }
}
