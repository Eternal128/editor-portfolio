import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('james.hanzell@mail.utoronto.ca');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      {/* Section header */}
      <div className="section-tag mb-12" style={{ animation: 'section-reveal 0.8s var(--ease-out) both' }}>
        About
      </div>

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-4 h-full">

        {/* Card 1 — Intro */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container h-full">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain rounded-lg"
              style={{ opacity: 0.9 }}
            />
            <div>
              <p className="grid-headtext">Hi, I'm James William Hanzell</p>
              <p className="grid-subtext">
                I'm a second year student studying Computer Science in the University of Toronto!
                I always have the mindset to finish anything I started and give it my best!
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 — Editing stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container h-full">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain rounded-lg"
              style={{ opacity: 0.9 }}
            />
            <div>
              <p className="grid-headtext">Editing Stack</p>
              <p className="grid-subtext">
                I specialize in SFX edits, masking, 3D text, cinematic color, and beat-synced cuts — whatever the vision demands.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 — Globe */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container h-full">
            <div className="rounded-2xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.3}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 43.65, lng: -79.38, text: 'Toronto', color: '#5b6af5', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Flexible — worldwide remote</p>
              <p className="grid-subtext">
                Based in Toronto, Canada. Open to collaborations globally across all time zones.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-8" />
            </div>
          </div>
        </div>

        {/* Card 4 — Stats + passion */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container h-full">
            <div className="flex flex-col gap-4">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: '7M+', label: 'Total Views' },
                  { val: '1.1M+', label: 'Total Likes' },
                  { val: '75K', label: 'Saves on Best Edit' },
                ].map(({ val, label }) => (
                  <div
                    key={label}
                    style={{
                      background: 'var(--lift)',
                      border: '1px solid var(--border)',
                      borderRadius: 10,
                      padding: '16px 12px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: '1.6rem',
                        color: 'var(--paper)',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.55rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                        marginTop: 6,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <img
                src="assets/grid3.png"
                alt="grid-3"
                className="w-full sm:h-[180px] h-fit object-contain rounded-lg"
                style={{ opacity: 0.85 }}
              />
            </div>

            <div>
              <p className="grid-headtext">Passion for Editing</p>
              <p className="grid-subtext">
                I love telling stories — editing is how I do it. I enjoy exploring new techniques and enhancing my craft with every project.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 — Contact email */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container h-full">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[100px] sm:h-[200px] h-fit object-cover sm:object-top rounded-lg"
              style={{ opacity: 0.8 }}
            />
            <div className="space-y-3">
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  textAlign: 'center',
                }}
              >
                Get in touch
              </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt="copy"
                  style={{ width: 16, height: 16, filter: 'invert(1)', opacity: 0.7 }}
                />
                <p className="lg:text-base md:text-sm text-sm font-medium text-gray_gradient">
                  james.hanzell@mail.utoronto.ca
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;