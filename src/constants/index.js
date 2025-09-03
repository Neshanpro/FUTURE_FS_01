export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Future Interns',
    pos: 'Full Stack Web Developer (Internship)',
    duration: 'Aug 2025 - Sept 2025 · 1 mos',
    location: 'Bengaluru, Karnataka, India · Remote',
    title:
      'Building full-stack web applications using JavaScript, React, Node.js, and MongoDB. Managing version control via GitHub and documenting progress on LinkedIn. Gaining practical experience in both front-end and back-end development.',
    icon: '/assets/future-interns.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'RWS Group',
    pos: 'Freelance Data Services Specialist (Vendor Network)',
    duration: 'Feb 2025 - Present · 8 mos',
    location: 'Remote',
    title:
      'Successfully onboarded into RWS’s global network of data service specialists, providing support in AI training, data annotation, and multilingual data services. Responsibilities include project participation, contributing to high-quality AI data training and localization projects, and maintaining readiness for diverse assignments.',
    icon: '/assets/rws-group.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Janani Sanchay & Rindan Samobay Somiti Ltd.',
    pos: 'Marketing Officer',
    duration: 'Aug 2021 - Dec 2023 · 2 yrs 5 mos',
    location: 'Khulna, Bangladesh · On-site',
    title:
      'Worked as a Marketing Officer focusing on customer engagement, financial product promotion, and supporting microfinance operations. Contributed to growth initiatives and maintained strong relationships with clients to support organizational objectives.',
    icon: '/assets/janani.svg',
    animation: 'salute',
  },
];
