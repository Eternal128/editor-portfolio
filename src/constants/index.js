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
    desc: 'A passion project that became one of my most successful edits to date. Leveraging advanced 3D text compositing, precise masking techniques, and a deep understanding of visual storytelling, I crafted a cinematic narrative around Toji Fushiguro that resonated with over 1.8 million viewers on TikTok.',
    subdesc:
      'The pacing mirrors Toji\'s brutal, unhurried nature. The 3D typography was layered to feel like it existed inside the scene rather than on top of it, creating a sense of depth that elevated the edit.',
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
    desc: 'A high-impact SFX edit built around the rhythm and aggression of 21 Savage\'s production. Each beat drop and pause was mapped precisely to Toji\'s most iconic moments, creating a sense of synchronization that made the video feel less like an edit and more like an official music video.',
    subdesc:
      '1.8M+ views, 350K+ likes, and 75K+ saves. The metric shows that this video outperforms standard engagement benchmarks on the platform.',
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
    desc: 'A meticulously crafted SFX edit that layers custom impact sounds of punches, whooshes, and bass drops. Intentional gaps were introduced into the audio track to create moments of tension and release, making each hit land with significantly more weight than the original clip.',
    subdesc:
      'The editing philosophy here was chaos. Fast-speed intentional audio cuts and sound effect. The storytelling arc was structured to mirror a fight sequence, keeping viewers locked in from first frame to last.',
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
    title: 'Dame & Creed (Alt Cut) - Toji Fushiguro',
    desc: 'An alternate rendition of the Creed edit, rebuilt from the ground up with a different pacing structure and clip selection. Where the audience can feel the aggression of the character.',
    subdesc:
      'Making this video helped me learn more about transition timing, and deliberate audio manipulation.',
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
    desc: 'A title card sequence edit inspired by the Invincible animated series, reimagined with Gojo Satoru as the subject. The project involved sourcing the original title card assets, replicating the typography and motion style, and timing dialogue clips to hit on precise beats.',
    subdesc:
      'What made this edit particularly demanding was the precision required in the dialogue sync. Each line had to cut on the exact frame where the emotional weight peaked. The final result is a piece that works both as a fan edit and as a standalone cinematic moment.',
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
    pos: 'Video Editor & Content Creator',
    duration: '2025 - Present',
    title: "Independently building and growing a content brand on TikTok, consistently producing high-quality video edits that have accumulated over 7M+ views and 1.1M+ likes within weeks of posting. Each piece is conceived, edited, and published without a team — from clip selection and SFX design to color grading and platform optimization.",
    icon: '/assets/tiktok.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Ernst and Young',
    pos: 'AI Development Intern',
    duration: 'May 2025 - August 2025',
    title: "Contributing to AI-driven development initiatives within one of the world's leading professional services firms. Collaborating with cross-functional teams to design, test, and deploy intelligent solutions that streamline enterprise workflows — applying both technical depth and creative problem-solving in a fast-paced consulting environment.",
    icon: '/assets/ey.svg',
    animation: 'clapping',
  },
];