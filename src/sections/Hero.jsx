import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
      className="min-h-screen w-full flex flex-col relative"
      id="home"
      style={{ overflow: 'hidden' }}
    >
      {/* Ambient glow */}
      <div className="hero-glow" />

      {/* Subtle grid texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          pointerEvents: 'none',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)',
        }}
      />

      {/* Text content — sits BEHIND the canvas (z-0) */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-0">
        {/* Pill tag */}
        <div
          className="flex justify-center"
          style={{ animation: 'section-reveal 0.8s var(--ease-out) 0.2s both' }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              border: '1px solid rgba(91,106,245,0.3)',
              borderRadius: 999,
              padding: '6px 16px',
              background: 'rgba(91,106,245,0.06)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'inline-block',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }}
            />
            Video Editor &amp; Storyteller
          </span>
        </div>

        {/* Greeting */}
        <p
          className="sm:text-3xl text-xl font-medium text-center"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            color: 'var(--muted)',
            letterSpacing: '-0.01em',
            animation: 'section-reveal 0.8s var(--ease-out) 0.35s both',
          }}
        >
          Hi, I am James <span className="waving-hand">👋</span>
        </p>

        {/* Main headline */}
        <h1
          className="hero_tag text-gray_gradient"
          style={{ animation: 'section-reveal 0.9s var(--ease-out) 0.5s both' }}
        >
          Building Compelling Videos
        </h1>

        {/* Sub stats line */}
        <div
          className="flex justify-center gap-8 mt-2"
          style={{ animation: 'section-reveal 0.8s var(--ease-out) 0.7s both' }}
        >
          {[
            { val: '7M+', label: 'Views' },
            { val: '1.1M+', label: 'Likes' },
            { val: '1.8M', label: 'Single video' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: 'var(--paper)',
                  letterSpacing: '-0.02em',
                }}
              >
                {val}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginTop: 2,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3D Canvas — renders ABOVE text (z-10) */}
      <div className="w-full h-full absolute inset-0 z-10">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 10]} intensity={0.6} />
            <pointLight position={[-10, 5, -10]} intensity={0.3} color="#5b6af5" />
          </Suspense>
        </Canvas>
      </div>

      {/* CTA */}
      <div
        className="absolute bottom-7 left-0 right-0 w-full z-20 c-space"
        style={{ animation: 'section-reveal 0.8s var(--ease-out) 0.9s both' }}
      >
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-7 right-10 hidden md:flex flex-col items-center gap-3 z-20"
        style={{ animation: 'section-reveal 0.8s var(--ease-out) 1.1s both' }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </div>
        <div
          style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, var(--muted), transparent)',
            animation: 'scroll-line 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }
        @keyframes scroll-line {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%       { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
};

export default Hero;