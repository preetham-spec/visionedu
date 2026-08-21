// Connects the site's /apply form to your real Google Form ("Vision Website
// Registration form"), so submissions land in your existing Google Sheet
// with zero custom backend.
//
// STATUS: fully wired — every field in src/data/applyFields.js has a
// confirmed entry ID, read directly from the live form's HTML. No test
// submissions were made to reach this state.
//
// Note on history: a "Current Address" question was added as a genuinely new
// question rather than a rename, and the old address field (269731166) ended
// up relabeled "Which Degree Program Are You Interested In?" — so that ID is
// now correctly used for `degreeProgram` below, not `address`. Similarly, the
// question that used to be labeled "Which Degree Program" (499673720) was
// renamed to "Applying For", so it's now used for `programType`. If any of
// these question titles change again on the form, re-share the link and I'll
// re-map from the current labels rather than assuming the old ones still hold.

export const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/17pRdnPXa59MQm26-pPLKhs4kvThP5nehFmZWeTmFmc8/formResponse'

export const GOOGLE_FORM_ENTRY_IDS = {
  studentName: 'entry.872831642',
  gender: 'entry.1947466241',
  address: 'entry.74963852', // form's "Current Address" question
  district: 'entry.1741327544',
  studentPhone: 'entry.1434114667',
  studentEmail: 'entry.172636081',
  fatherPhone: 'entry.1610937954',
  fatherEmail: 'entry.1644173436',
  motherPhone: 'entry.1422524303',
  motherEmail: 'entry.1781735278',
  neetScore: 'entry.1547254543',
  residency: 'entry.976791024', // form's "Day Scholar or Hostel?" question
  hearAboutUs: 'entry.1286848474',
  branch: 'entry.1512123171', // form's "Which branch?" — always submitted as "Bangalore" from this site
  stream: 'entry.429476937',
  board: 'entry.2145140134',
  tenthMarks: 'entry.860619135',
  courseDuration: 'entry.1869858147',
  degreeProgram: 'entry.269731166', // form's "Which Degree Program Are You Interested In?" question
  puc12Marks: 'entry.405510202',
  referenceNumber: 'entry.394892516',
  employeeName: 'entry.1216208342',
  programType: 'entry.499673720', // form's "Applying For" question
}
