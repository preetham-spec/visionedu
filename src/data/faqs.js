function blockToText(block) {
  if (block.subsections) {
    return block.subsections.map((s) => `${s.label}: ${s.text}`).join(' ')
  }
  if (block.ol) {
    return block.ol.map((item, i) => `${i + 1}. ${item}`).join(' ')
  }
  return `${block.p || ''}${block.phone || ''}${block.suffix || ''}`
}

export function faqToPlainAnswer(faq) {
  return faq.blocks.map(blockToText).join(' ')
}

export const faqs = [
  {
    question: 'Describe your academic program.',
    blocks: [
      { p: 'We currently offer the following Pre University courses in the Science stream:' },
      { ol: ['PCMB', 'PCMC', 'PCME'] },
      {
        p: 'Our academic program is designed to cover the entire curriculum ahead of schedule to provide at least 5 months exclusively for exam preparation and repeated revision. However, the syllabus completion is never rushed and we ensure that students develop a rock-solid foundation in core concepts. The typical day consists of 7 teaching hours. We also provide 3 study hours every day under the supervision of senior lecturers where students can clarify any doubts or questions they may have about their classes in a 1-on-1 manner.',
      },
    ],
  },
  {
    question: 'How can I get a scholarship?',
    blocks: [
      { p: 'There are 2 ways to get a scholarship:' },
      {
        ol: [
          'Based on scholarship test marks (get up to 100% scholarship for tuition and hostel fee)',
          'Based on 10th board exam marks',
        ],
      },
      { p: 'For more info, please contact our admissions team at ', phone: '080 471 85111', suffix: '.' },
    ],
  },
  {
    question: 'Give me more info about the scholarship test.',
    blocks: [
      { p: 'The statewide scholarship test will be conducted in multiple districts on the following dates:' },
      { ol: ['25 March (Sat)', '1 April (Sat)', '17 April (Mon)'] },
      {
        p: 'It will be an objective test in Physics, Chemistry, Math and Biology. The test will have 90 questions and the duration would be 90 minutes. The pattern will be similar to NTSE.',
      },
    ],
  },
  {
    question: 'What is the registration fee?',
    blocks: [{ p: 'You can block your seat by paying a registration fee of ₹10,000. Seats are limited.' }],
  },
  {
    question: 'When will classes start for I PU Science?',
    blocks: [{ p: 'We are planning to tentatively start classes in the 3rd week of May.' }],
  },
  {
    question: 'What are the college timings?',
    blocks: [
      {
        subsections: [
          {
            label: 'Day Scholars',
            text: 'Classes start at 8 am and end at 3:30 pm. This is followed by optional study hours from 4:30 pm to 6:30 pm in the presence of a senior lecturer.',
          },
          {
            label: 'Hostel Students',
            text: 'Classes start at 7:30 am and end at 3:30 pm. This is followed by mandatory study hours from 4:30 pm to 7:30 pm in the presence of a senior lecturer.',
          },
        ],
      },
    ],
  },
  {
    question: 'What items should hostel students bring?',
    blocks: [
      { ol: ['Plate and glass', 'Pillow and mattress'] },
      { p: 'The above items can be bought from the college canteen if needed.' },
    ],
  },
]
