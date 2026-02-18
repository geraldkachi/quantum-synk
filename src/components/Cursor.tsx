import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const ring = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%,-50%) scale(2.5)';
        dotRef.current.style.background = 'rgba(137,196,65,0.5)';
      }
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)';
        ringRef.current.style.opacity = '0.3';
      }
    };

    const onLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
        dotRef.current.style.background = '#89C441';
      }
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
        ringRef.current.style.opacity = '0.6';
      }
    };

    const interactives = document.querySelectorAll<HTMLElement>(
      'a, button, .hoverable'
    );
    
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 hidden md:block"
        style={{ background: '#89C441' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#89C441] pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block"
        style={{ opacity: 0.6 }}
      />
    </>
  );
}