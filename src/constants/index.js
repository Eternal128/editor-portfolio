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

export const myProjects = [
  {
    title: 'Les Instrumental - Toji Fushiguro',
    desc: 'This project holds a special place in my heart. Using 3D text effects, masking, and also good storytelling, I made a 1.8M+ views edit video on Tiktok.',
    subdesc:
      'Toji has always been one of those characters I just wanted to edit.',
    href: 'https://www.tiktok.com/@eternalglazer/video/7574949774575602951',
    texture: 'https://res.cloudinary.com/daetzwh6x/video/upload/v1773972350/toji_mograph_hbqmsu.mov',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Capcut',
        path: '/assets/capcut.svg',
      },
    ],
  },
  {
    title: '21 Savage (sfx edit) - Toji Fushiguro',
    desc: 'Made a 1.8M+ views video edit using Toji Fushiguro with synced beats to make the original song more catchy.',
    subdesc:
      'Had a conversion rate of 350K+ likes and 75K+ saves.',
    href: 'https://www.tiktok.com/@eternalglazer/video/7567135113104952594',
    texture: 'https://res.cloudinary.com/daetzwh6x/video/upload/v1773972392/toji_ofjtmn.mov',
    logo: '/assets/project-logo2.jpeg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Capcut',
        path: '/assets/capcut.svg',
      },
    ],
  },
  {
    title: 'Dame & Creed (sfx edit) - Toji Fushiguro',
    desc: 'Sound effect editing with added punches, intentional gaps in songs to make a more satisfying video.',
    subdesc:
      'With a focus on telling a compelling story for people on Tiktok.',
    href: 'https://www.tiktok.com/@eternalglazer/video/7616482749960047879',
    texture: 'https://res.cloudinary.com/daetzwh6x/video/upload/v1773972362/4raws_-_toji_-_sped_up_cmnd78.mov',
    logo: '/assets/project-logo3.jpeg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Capcut',
        path: '/assets/capcut.svg',
      },
    ],
  },
  {
    title: 'Dame & Creed (sfx edit) - Toji Fushiguro',
    desc: 'Sound effect editing with added punches, intentional gaps in songs to make a more satisfying video.',
    subdesc:
      'With a focus on telling a compelling story for people on Tiktok.',
    href: 'https://www.tiktok.com/@eternalglazer/video/7616482749960047879',
    texture: 'https://res.cloudinary.com/daetzwh6x/video/upload/v1773972454/toji_creed_x2zutr.mov',
    logo: '/assets/project-logo4.jpeg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Capcut',
        path: '/assets/capcut.svg',
      },
    ],
  },
  {
    title: 'The Strongest - Gojo Satoru',
    desc: 'Invincible title card edit with Gojo Satoru as its subject.',
    subdesc:
      'Built with importing the title card background, font and timing the dialogues to cut perfectly.',
    href: 'https://www.youtube.com/watch?v=4PL17-3IiXw',
    texture: 'https://res.cloudinary.com/daetzwh6x/video/upload/v1773972756/the_strongest_ebutvq.mp4',
    logo: '/assets/project-logo5.jpeg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Capcut',
        path: '/assets/capcut.svg',
      },
    ],
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
    name: 'Tiktok',
    pos: 'Video Editor',
    duration: '2025 - Present',
    title: "Consistently producing high-quality content with over 1.1M+ likes and 7M+ views over a few weeks. Editing things that I find to be aesthetic and fun to play around with.",
    icon: '/assets/tiktok.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Ernst and Young',
    pos: 'AI Development Intern',
    duration: 'May 2025 - August 2025',
    title: "",
    icon: '/assets/ey.svg',
    animation: 'clapping',
  },
];
