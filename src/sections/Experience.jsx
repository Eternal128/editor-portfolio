import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="section-tag mb-2">Experience</div>
      <h2 className="head-text mb-12">Work History</h2>

      <div className="work-container">
        {/* 3D Canvas — unchanged model */}
        <div className="work-canvas" style={{ minHeight: 380 }}>
          <Canvas>
            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-5, 5, 0]} intensity={0.4} color="#5b6af5" />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            <Suspense fallback={<CanvasLoader />}>
              <Developer position-y={-3} scale={3} animationName={animationName} />
            </Suspense>
          </Canvas>
        </div>

        {/* Experience list */}
        <div className="work-content">
          <div className="sm:py-10 py-6 sm:px-6 px-4">
            {workExperiences.map((item, index) => (
              <div
                key={index}
                onClick={() => setAnimationName(item.animation.toLowerCase())}
                onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                onPointerOut={() => setAnimationName('idle')}
                className="work-content_container group"
              >
                {/* Logo */}
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img className="w-full h-full object-contain" src={item.icon} alt={item.name} />
                  </div>
                  {index < workExperiences.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: 1,
                        marginTop: 12,
                        background: 'var(--border)',
                        minHeight: 32,
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="sm:p-5 px-3 py-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: 'var(--paper)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.name}
                    </p>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.15em',
                        color: 'var(--muted)',
                        whiteSpace: 'nowrap',
                        marginTop: 3,
                      }}
                    >
                      {item.duration}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      marginBottom: 12,
                    }}
                  >
                    {item.pos}
                  </p>

                  {item.title && (
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 400,
                        fontSize: '0.9rem',
                        color: 'var(--muted)',
                        lineHeight: 1.65,
                        letterSpacing: '0.01em',
                        transition: 'color 0.4s var(--ease-out)',
                      }}
                      className="group-hover:text-white"
                    >
                      {item.title}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;