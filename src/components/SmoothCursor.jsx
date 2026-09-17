import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function SmoothCursor({
  size = 28,
  color = '#111111',
  stiffness = 500,
  damping = 35,
}) {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { stiffness, damping });
  const smoothY = useSpring(mouseY, { stiffness, damping });

  // Detect touch synchronously on first render so the cursor never
  // mounts its z-index 9999 overlay on touch devices — not even briefly.
  const [isTouch, setIsTouch] = useState(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });
  const [isVisible, setIsVisible] = useState(false);
  const [angle, setAngle] = useState(0);
  const prev = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Re-check in case the initial detection missed (e.g. hybrid devices)
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (touch !== isTouch) setIsTouch(touch);
    if (touch) return;

    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      mouseX.set(x - size / 2);
      mouseY.set(y - size / 2);
      setIsVisible(true);

      const dx = x - prev.current.x;
      const dy = y - prev.current.y;

      if (dx !== 0 || dy !== 0) {
        // Correct the rotation so arrow tip points toward movement
        setAngle(Math.atan2(dy, dx) * (180 / Math.PI) + 120);
      }

      prev.current = { x, y };
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, size]);

  // Completely hidden on touch devices for clean mobile UX
  if (isTouch) {
    return null;
  }

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: smoothX,
        y: smoothY,
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
    >
      <motion.div
        animate={{ rotate: angle }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformOrigin: 'center center',
          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.18))',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={color}
          viewBox="0 0 256 256"
          style={{ display: 'block' }}
        >
          <path d="M237.33,106.21,61.41,41l-.16-.05A16,16,0,0,0,40.9,61.25a1,1,0,0,0,.05.16l65.26,175.92A15.77,15.77,0,0,0,121.28,248h.3a15.77,15.77,0,0,0,15-11.29l.06-.2,21.84-78,78-21.84.2-.06a16,16,0,0,0,.62-30.38ZM149.84,144.3a8,8,0,0,0-5.54,5.54L121.3,232l-.06-.17L56,56l175.82,65.22.16.06Z" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
