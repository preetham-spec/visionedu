export const campuses = [
  {
    id: 'main-campus',
    name: 'Banaswadi Day Scholar Campus',
    badges: ['Day Scholars', 'Co-Ed'],
    exclusive: false,
    description:
      "Our flagship campus for day-scholar students, located in HRBR Layout, Kalyan Nagar. It houses excellent academic blocks and all the core facilities students need for focused PU studies without living away from home.",
    addressLine1: '802, 9th B Main Rd, HRBR Layout 1st Block',
    addressLine2: 'HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043',
    mapUrl: 'https://www.google.com/maps/place/Vision+PU+College+(Main+Campus)/@13.0148473,77.6480859,17z',
    image: '/images/main-campus.jpg',
    amenities: [
      ['fa-flask', 'Science Labs'],
      ['fa-book-open', 'Library'],
      ['fa-desktop', 'Computer Lab'],
      ['fa-futbol', 'Sports Infrastructure'],
      ['fa-shield-alt', '24x7 Security'],
    ],
  },
  {
    id: 'girls-campus',
    name: 'Girls Residential Campus',
    badges: ['Exclusive', 'Girls Only'],
    exclusive: true,
    description:
      'Located in Anagalapura Village, this campus is built around the safety and discipline of our girl students. It is staffed with dedicated wardens, strict entry/exit protocols, and round-the-clock supervision, alongside the same academic rigor as our other campuses.',
    addressLine1: '43/4, Anagalapura Village',
    addressLine2: 'Bidarahalli Hobli, Bengaluru, Karnataka 560077',
    mapUrl: 'https://www.google.com/maps/place/Vision+PU+College+For+Girls+(Anagalapura)/@13.0662843,77.6847185,17z',
    image: '/images/girls-campus.jpg',
    amenities: [
      ['fa-user-shield', 'Dedicated Wardens'],
      ['fa-video', '24x7 CCTV & Security'],
      ['fa-bed', 'On-Campus Hostel'],
      ['fa-utensils', 'Dining Mess'],
      ['fa-book-open', 'Library & Study Rooms'],
      ['fa-gavel', 'Strict Discipline Policy'],
    ],
  },
  {
    id: 'boys-campus',
    name: 'Boys Residential Campus',
    badges: ['Exclusive', 'Boys Only'],
    exclusive: true,
    description:
      'Located in Bande Bommasandra, this exclusive residential campus has classrooms and hostel within the same premises, so students spend less time commuting and more time studying. RO-purified drinking water is available on every floor, and the campus is monitored by 24/7 security.',
    addressLine1: '43/3, Bande Bommasandra',
    addressLine2: 'Dhodda Gubbi Post, Bengaluru, Karnataka 560077',
    mapUrl: 'https://www.google.com/maps/place/Vision+PU+College+For+Boys+(BBS)/@13.0725379,77.6842846,17z',
    image: '/images/bbs-campus.jpg',
    amenities: [
      ['fa-bed', 'On-Campus Hostel'],
      ['fa-tint', 'RO Water Every Floor'],
      ['fa-utensils', 'Dining Mess'],
      ['fa-futbol', 'Sports Ground'],
      ['fa-shield-alt', '24x7 Security'],
      ['fa-book-open', 'Study Halls & Library'],
    ],
  },
  {
    id: 'commerce-campus',
    name: 'Commerce Campus',
    badges: ['Day Scholars', 'Commerce'],
    exclusive: false,
    description:
      'A dedicated day-scholar campus close to our Banaswadi Day Scholar Campus in Kalyan Nagar, focused on Commerce stream PUC — Accountancy, Business Studies, Economics and related subjects — with the same academic rigor and support as our other campuses.',
    addressPending: true,
    areaLabel: 'Kalyan Nagar, Bengaluru',
    amenities: [
      ['fa-chart-line', 'Commerce Resource Room'],
      ['fa-book-open', 'Library'],
      ['fa-desktop', 'Computer Lab'],
      ['fa-utensils', 'Cafeteria'],
      ['fa-shield-alt', '24x7 Security'],
    ],
  },
  {
    id: 'degree-campus',
    name: 'Vision Degree College',
    badges: ['Degree College', 'Co-Ed'],
    exclusive: false,
    description:
      'Vision Degree College offers undergraduate degree programs open to all students, with the same focus on mentorship, strong faculty and results that Vision is known for.',
    addressPending: true,
    areaLabel: 'Kalyan Nagar, Bengaluru',
    amenities: [
      ['fa-graduation-cap', 'Undergraduate Programs'],
      ['fa-book-open', 'Library'],
      ['fa-desktop', 'Computer Lab'],
      ['fa-briefcase', 'Placement Support'],
      ['fa-shield-alt', '24x7 Security'],
    ],
  },
]

export const commonAmenities = [
  ['fa-flask', 'State-of-the-Art Labs'],
  ['fa-book-open', 'Libraries'],
  ['fa-futbol', 'Sports Infrastructure'],
  ['fa-utensils', 'Dining Spaces'],
  ['fa-shield-alt', '24x7 Security'],
]
