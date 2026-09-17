import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * FollowEyes - Interactive eyes that track the cursor with smooth spring physics
 * Based on the Framer FollowEyes code component
 */
export function FollowEyes({
  eyeColor = '#ffffff',
  pupilColor = '#1b1c19',
  eyeSize = 18,
  pupilSize: rawPupilSize = 6,
  eyeSpacing = 3,
  trackingSpeed = 160,
  trackingRange = 85,
  eyeCount = 'two',
  enableBlinking = true,
  blinkInterval = 3200,
  style = {},
  className = '',
}) {
  const containerRef = useRef(null);
  const [isBlinking, setIsBlinking] = useState(false);

  const pupilSize = useMemo(
    () => Math.min(rawPupilSize, eyeSize * 0.75),
    [rawPupilSize, eyeSize]
  );

  const maxDistance = useMemo(
    () => ((eyeSize - pupilSize) / 2) * (trackingRange / 100),
    [eyeSize, pupilSize, trackingRange]
  );

  // Raw motion values for pupils
  const rawLeftX = useMotionValue(0);
  const rawLeftY = useMotionValue(0);
  const rawRightX = useMotionValue(0);
  const rawRightY = useMotionValue(0);
  const rawCenterX = useMotionValue(0);
  const rawCenterY = useMotionValue(0);

  // Spring smoothed values
  const springConfig = { stiffness: trackingSpeed, damping: 18, mass: 0.4 };
  const smoothLeftX = useSpring(rawLeftX, springConfig);
  const smoothLeftY = useSpring(rawLeftY, springConfig);
  const smoothRightX = useSpring(rawRightX, springConfig);
  const smoothRightY = useSpring(rawRightY, springConfig);
  const smoothCenterX = useSpring(rawCenterX, springConfig);
  const smoothCenterY = useSpring(rawCenterY, springConfig);

  // Periodic blinking
  useEffect(() => {
    if (!enableBlinking) return;
    let timeoutId;
    const intervalId = setInterval(() => {
      setIsBlinking(true);
      timeoutId = setTimeout(() => {
        setIsBlinking(false);
      }, 160);
    }, blinkInterval);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [enableBlinking, blinkInterval]);

  // Cursor tracking
  useEffect(() => {
    const handlePoint = (clientX, clientY) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = clientX - centerX;
      const mouseY = clientY - centerY;

      if (eyeCount === 'one') {
        const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
        if (distance === 0) {
          rawCenterX.set(0);
          rawCenterY.set(0);
          return;
        }
        const clampedDistance = Math.min(distance, maxDistance);
        const angle = Math.atan2(mouseY, mouseX);
        rawCenterX.set(Math.cos(angle) * clampedDistance);
        rawCenterY.set(Math.sin(angle) * clampedDistance);
      } else {
        const leftEyeOffsetX = -(eyeSpacing + eyeSize) / 2;
        const rightEyeOffsetX = (eyeSpacing + eyeSize) / 2;

        const calc = (offset) => {
          const relX = mouseX - offset;
          const relY = mouseY;
          const distance = Math.sqrt(relX * relX + relY * relY);
          if (distance === 0) return { x: 0, y: 0 };
          const clampedDistance = Math.min(distance, maxDistance);
          const angle = Math.atan2(relY, relX);
          return {
            x: Math.cos(angle) * clampedDistance,
            y: Math.sin(angle) * clampedDistance,
          };
        };

        const left = calc(leftEyeOffsetX);
        const right = calc(rightEyeOffsetX);

        rawLeftX.set(left.x);
        rawLeftY.set(left.y);
        rawRightX.set(right.x);
        rawRightY.set(right.y);
      }
    };

    const onMouseMove = (e) => handlePoint(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        handlePoint(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [eyeCount, eyeSize, eyeSpacing, maxDistance, rawCenterX, rawCenterY, rawLeftX, rawLeftY, rawRightX, rawRightY]);

  const containerWidth = eyeCount === 'one' ? eyeSize : eyeSize * 2 + eyeSpacing;

  const renderSingleEye = (smoothX, smoothY) => (
    <div
      style={{
        width: eyeSize,
        height: eyeSize,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <motion.div
        style={{
          width: eyeSize,
          height: eyeSize,
          borderRadius: '50%',
          backgroundColor: eyeColor,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformOrigin: 'center',
          boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.12)',
          overflow: 'hidden',
        }}
        animate={{ scaleY: isBlinking ? 0.15 : 1 }}
        transition={{ duration: 0.12, ease: 'easeInOut' }}
      >
        <motion.div
          style={{
            width: pupilSize,
            height: pupilSize,
            borderRadius: '50%',
            backgroundColor: pupilColor,
            opacity: isBlinking ? 0 : 1,
            x: smoothX,
            y: smoothY,
            position: 'relative',
          }}
        >
          {/* Subtle light reflection glint inside pupil */}
          <span
            style={{
              position: 'absolute',
              top: '15%',
              right: '20%',
              width: Math.max(1.5, pupilSize * 0.28),
              height: Math.max(1.5, pupilSize * 0.28),
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{
        width: containerWidth,
        height: eyeSize,
        gap: eyeCount === 'two' ? eyeSpacing : 0,
        backgroundColor: 'transparent',
        ...style,
      }}
      aria-hidden="true"
    >
      {eyeCount === 'one' ? (
        renderSingleEye(smoothCenterX, smoothCenterY)
      ) : (
        <>
          {renderSingleEye(smoothLeftX, smoothLeftY)}
          {renderSingleEye(smoothRightX, smoothRightY)}
        </>
      )}
    </div>
  );
}

/**
 * EyeFollowButton - Button or link with eye tracking cursor
 */
export default function EyeFollowButton({
  children,
  text,
  href,
  onClick,
  type = 'button',
  as,
  className = '',
  style = {},
  eyeSize = 18,
  pupilSize = 6,
  eyeSpacing = 3,
  eyeColor = '#ffffff',
  pupilColor = '#1b1c19',
  trackingSpeed = 160,
  trackingRange = 85,
  enableBlinking = true,
  blinkInterval = 3200,
  eyePosition = 'right',
  eyeCount = 'two',
  ...props
}) {
  const [isTouch] = useState(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });

  const content = text || children;
  const Component = as ? motion[as] : href ? motion.a : motion.button;

  const eyes = (
    <FollowEyes
      eyeSize={eyeSize}
      pupilSize={pupilSize}
      eyeSpacing={eyeSpacing}
      eyeColor={eyeColor}
      pupilColor={pupilColor}
      trackingSpeed={trackingSpeed}
      trackingRange={trackingRange}
      enableBlinking={enableBlinking}
      blinkInterval={blinkInterval}
      eyeCount={eyeCount}
    />
  );

  const gestureProps = isTouch
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { type: 'spring', stiffness: 400, damping: 25 },
      };

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      {...gestureProps}
      className={`group cursor-pointer ${className}`}
      style={style}
      {...props}
    >
      {eyePosition === 'left' && eyes}
      <span>{content}</span>
      {eyePosition === 'right' && eyes}
    </Component>
  );
}
