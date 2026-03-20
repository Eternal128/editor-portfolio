import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, posRef.current.x, 0.22);
      currentRef.current.y = lerp(currentRef.current.y, posRef.current.y, 0.22);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${currentRef.current.x - 5}px, ${currentRef.current.y - 5}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    // Scale on clickable elements
    const onEnter = () => dotRef.current && (dotRef.current.style.transform += ' scale(2.5)');
    const onLeave = () => {};

    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: '#e8e0d0',
        pointerEvents: 'none',
        zIndex: 99999,
        mixBlendMode: 'difference',
        willChange: 'transform',
        transition: 'width 0.2s, height 0.2s, opacity 0.2s',
      }}
    />
  );
};

export default CustomCursor;