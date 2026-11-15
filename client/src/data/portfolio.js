// Single source of truth. Replace asset paths as you supply files.
export const profile = {
  name: 'Sithija Ranathunga',
  title: 'Full Stack Software Engineer | UI/UX Engineer',
  location: 'Colombo, Sri Lanka',
  email: 'sithijatharuka41@gmail.com',
  phone: '+94 70 481 9020',
  linkedin: 'https://linkedin.com/in/sithija-ranathunga-2132b3273',
  github: 'https://github.com/sithijatharuka41-hub',
  photo: '/images/profile/sithija.png',
  cv: '/Sithija-Ranathunga-CV.pdf',
  roles: ['Full Stack Software Engineer', 'React Developer', 'UI/UX Engineer', 'Software Developer'],
  floatingTech: ['React', 'Node.js', 'MongoDB', 'Figma'],
};

export const skills = {
  'Programming Languages': ['JavaScript (ES6+)', 'Java', 'Python', 'C', 'C++'],
  'Frontend & UI/UX': ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Web Design', 'WCAG Accessibility', 'Webpack', 'Babel', 'npm', 'Figma'],
  'Backend & Databases': ['Node.js', 'Express.js', 'PHP', 'Flask', 'REST API Design', 'Microservices Concepts', 'MongoDB', 'MySQL'],
  'DevOps & Practices': ['Git', 'GitHub', 'GitHub Actions (CI/CD basics)', 'Agile/Scrum', 'AI-assisted development (ChatGPT, GitHub Copilot)'],
};

export const projects = [
  {
    id: 'nephrosense', featured: true, badge: 'FEATURED PROJECT', recognition: 'IEEE Conference Publication',
    title: 'NephroSense: CKD Patient Lifestyle Management System',
    description: 'A chronic kidney disease management application built by a four-member research team, supporting patients with personalized lifestyle management and healthcare-related guidance.',
    stack: ['React.js', 'JavaScript', 'Flask'],
    contribution: [
      'Developed React and JavaScript frontend functionality',
      'Implemented rules-based diet, hydration and physical activity guidance',
      'Integrated the frontend with a Flask backend',
      'Translated clinical requirements into user-friendly interface components',
      'Collaborated with academic supervisors and the research team',
    ],
    links: { github: null, live: null, ieee: null }, // TODO: add IEEE URL
    images: ['/images/nephrosense/01.png', '/images/nephrosense/02.png', '/images/nephrosense/03.png'],
  },
  {
    id: 'everfresh', title: 'EverFresh Dairy: Animal Farm Management System',
    description: 'A MERN stack farm management application with an automated health alert system for monitoring livestock-related data.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    contribution: ['Full-stack CRUD functionality', 'RESTful backend APIs', 'MongoDB schema design', 'Responsive React interfaces', 'Automated health alert mechanism for at-risk livestock'],
    links: { github: null, live: null }, images: ['/images/everfresh/01.png', '/images/everfresh/02.png'],
  },
  {
    id: 'eventnest', title: 'Event Nest: Event Planning & Booking Architecture',
    description: 'A modular event planning and booking application focused on maintainable backend architecture, search and booking transactions.',
    stack: ['Java', 'HTML5', 'CSS3'],
    contribution: ['Designed modular Java backend architecture', 'Implemented search-and-booking transactional logic', 'Applied clean code and maintainability principles'],
    links: { github: null, live: null }, images: ['/images/eventnest/01.png'],
  },
  {
    id: 'relicroom', title: 'RelicRoom & Online Marketplace: E-Commerce Platforms',
    description: 'E-commerce platforms involving product discovery, real-time bidding and intelligent product matching.',
    stack: ['JavaScript', 'PHP', 'Tailwind CSS', 'MongoDB'],
    contribution: ['Real-time bidding logic', 'Product-matching functionality', 'Concurrent user state updates', 'Search discovery beyond exact keyword matching'],
    links: { github: null, live: null }, images: ['/images/relicroom/01.png'],
  },
  {
    id: 'riyasewana', title: 'Riyasewana.lk: UI/UX Platform Redesign',
    description: 'A redesign case study for an automotive marketplace, modernizing visual hierarchy and navigation.',
    stack: ['Figma', 'UI/UX Design Systems'],
    contribution: ['Redesigned the platform UI', 'Improved visual hierarchy', 'Worked on navigation and UX flows', 'Applied design system principles'],
    links: { figma: null }, images: ['/images/riyasewana/before.png', '/images/riyasewana/after.png'],
  },
];

export const experience = [{
  role: 'UI/UX Engineer Intern', company: 'Lyxux Ltd', period: 'October 2025 – April 2026', location: 'Sri Lanka',
  summary: 'Worked with cross-functional engineering teams, product managers and stakeholders to design, develop and maintain responsive e-commerce and POS platform modules.',
  points: ['Converted approved Figma wireframes into production-ready React components', 'Built responsive frontend implementations', 'Troubleshot and optimized checkout and POS transaction flows', 'Applied accessibility guidelines and frontend best practices', 'Collaborated through iterative feedback and development workflows'],
}];

export const education = {
  degree: 'BSc (Hons) in Information Technology', school: 'Sri Lanka Institute of Information Technology (SLIIT)', graduated: '2026',
  qualifications: ['IEEE Conference Publication: NephroSense', 'IEEE conference paper presentation and technical certification', 'Media Presenting: Sri Lanka Rupavahini Corporation (SLRC)', 'Advanced English: ACHE'],
};

export const leadership = {
  role: 'Treasurer, IT Student Community (ITSC), SLIIT', period: 'May 2025 – May 2026',
  points: ['Managed procurement budgeting and financial reporting for the official merchandise program', 'Coordinated financial reporting across two bulk-sourcing cycles', 'Prepared structured financial reports with pricing and margin analysis'],
};
