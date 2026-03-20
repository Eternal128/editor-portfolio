import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const sectionRef = useRef(null);

  // Mute+pause all videos when section scrolls out of view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          document.querySelectorAll('video').forEach((v) => {
            v.muted = true;
            v.pause();
          });
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handleNavigation('previous');
      if (e.key === 'ArrowRight') handleNavigation('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      '.animatedText',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' },
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id="work" ref={sectionRef}>
      {/* Section header */}
      <div className="flex items-end justify-between mb-2">
        <div>
          <div className="section-tag">Selected Work</div>
          <h2 className="head-text">My Projects</h2>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'var(--muted)',
            paddingBottom: 4,
          }}
        >
          {String(selectedProjectIndex + 1).padStart(2, '0')} / {String(projectCount).padStart(2, '0')}
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: '100%',
          height: 1,
          background: 'var(--border)',
          marginBottom: 40,
          borderRadius: 999,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${((selectedProjectIndex + 1) / projectCount) * 100}%`,
            background: 'var(--accent)',
            borderRadius: 999,
            transition: 'width 0.6s var(--ease-out)',
          }}
        />
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
        {/* Left — project info */}
        <div
          className="flex flex-col relative sm:p-8 py-8 px-5"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            overflow: 'hidden',
            height: '600px',
          }}
        >
          {/* Spotlight image */}
          <div className="absolute top-0 right-0 pointer-events-none">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-72 object-cover"
              style={{
                borderRadius: '0 16px 0 0',
                opacity: 0.5,
                maskImage: 'linear-gradient(to bottom left, black 0%, transparent 70%)',
                WebkitMaskImage: 'linear-gradient(to bottom left, black 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Logo */}
          <div
            className="p-3 w-fit rounded-xl relative z-10"
            style={{ ...currentProject.logoStyle }}
          >
            <img
              className="w-10 h-10"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          {/* Text */}
          <div
            className="flex flex-col gap-4 relative z-10 my-4 flex-1 overflow-y-auto"
            style={{ minHeight: 0 }}
          >
            <p
              className="text-2xl font-bold animatedText"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--paper)',
              }}
            >
              {currentProject.title}
            </p>
            <p
              className="animatedText"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: '0.95rem',
                color: '#9da0ad',
                lineHeight: 1.65,
                letterSpacing: '0.01em',
              }}
            >
              {currentProject.desc}
            </p>
            <p
              className="animatedText"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: '0.88rem',
                color: 'var(--muted)',
                lineHeight: 1.6,
              }}
            >
              {currentProject.subdesc}
            </p>
          </div>

          {/* Tags + link */}
          <div className="flex items-center justify-between flex-wrap gap-4 relative z-10">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 group"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
            >
              <span>Watch Video</span>
              <img
                src="/assets/arrow-up.png"
                alt="arrow"
                style={{
                  width: 12,
                  height: 12,
                  filter: 'invert(40%) sepia(100%) saturate(600%) hue-rotate(200deg)',
                  transition: 'transform 0.3s var(--ease-out)',
                }}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-4 relative z-10">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img
                src="/assets/left-arrow.png"
                alt="previous"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {myProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedProjectIndex(i)}
                  style={{
                    width: i === selectedProjectIndex ? 20 : 6,
                    height: 6,
                    borderRadius: 999,
                    background: i === selectedProjectIndex ? 'var(--accent)' : 'var(--border)',
                    border: 'none',
                    transition: 'all 0.4s var(--ease-out)',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img
                src="/assets/right-arrow.png"
                alt="next"
                style={{ width: 14, height: 14, filter: 'brightness(0) invert(1)' }}
              />
            </button>
          </div>
        </div>

        {/* Right — 3D computer */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            minHeight: '600px',
            overflow: 'hidden',
          }}
          className="md:h-full"
        >
          <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-5, 5, 5]} intensity={0.5} color="#5b6af5" />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={3} position={[0, -4, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;