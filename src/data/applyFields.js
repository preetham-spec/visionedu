export const programTypes = [
  { value: 'pu', label: 'PU College' },
  { value: 'neet', label: 'NEET Academy' },
  { value: 'degree', label: 'Degree' },
]

export const commonFields = [
  { name: 'studentName', label: 'Student Full Name (as per SSLC/marks card)', type: 'text', required: true },
  { name: 'gender', label: 'Gender', type: 'select', required: true, options: ['Male', 'Female'] },
  { name: 'address', label: 'Current Address', type: 'textarea', required: true },
  { name: 'district', label: 'District', type: 'text', required: true },
  { name: 'studentPhone', label: 'Student Phone', type: 'tel', required: true },
  { name: 'studentEmail', label: 'Student Email', type: 'email', required: true },
  { name: 'fatherPhone', label: "Father's Phone", type: 'tel', required: true },
  { name: 'fatherEmail', label: "Father's Email", type: 'email', required: false },
  { name: 'motherPhone', label: "Mother's Phone", type: 'tel', required: true },
  { name: 'motherEmail', label: "Mother's Email", type: 'email', required: false },
]

const residencyOptions = ['Day Scholar', 'Boys Hostel', 'Girls Hostel']

export const conditionalFields = {
  pu: [
    { name: 'stream', label: 'Stream Interested In', type: 'select', required: true, options: ['Science (PCMB)', 'Science (PCMC)', 'Science (PCME)', 'Commerce'] },
    { name: 'board', label: 'Current / Last Board', type: 'select', required: true, options: ['Karnataka SSLC', 'CBSE', 'ICSE'] },
    { name: 'tenthMarks', label: '10th Marks (%)', type: 'number', required: true },
    { name: 'residency', label: 'Day Scholar or Hostel?', type: 'select', required: true, options: residencyOptions },
  ],
  neet: [
    { name: 'courseDuration', label: 'Long-Term or Short-Term Course?', type: 'select', required: true, options: ['Long-Term Course', 'Short-Term Course'] },
    { name: 'neetScore', label: 'NEET Score (mention expected score if results not announced)', type: 'text', required: true },
    { name: 'residency', label: 'Day Scholar or Hostel?', type: 'select', required: true, options: residencyOptions },
  ],
  degree: [
    { name: 'degreeProgram', label: 'Which Degree Program Are You Interested In?', type: 'text', required: true },
    { name: 'puc12Marks', label: 'PUC / 12th Marks (%)', type: 'number', required: true },
  ],
}

export const hearAboutUsField = {
  name: 'hearAboutUs',
  label: 'How Did You Hear About Us?',
  type: 'select',
  required: true,
  options: [
    'Friends & family',
    'Employee of Vision',
    'Newspaper advertisement',
    'Pamphlet',
    'Google Search',
    'Facebook',
    'Instagram',
    'Other',
  ],
}

export const employeeNameField = {
  name: 'employeeName',
  label: 'Name of the Vision Employee',
  type: 'text',
  required: true,
}
