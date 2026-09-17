import React, { useId, useState, useEffect, useMemo } from 'react';

/**
 * MatrixLoader component
 * Matrix rain / loader with 3D perspective falling characters and randomized binary/matrix noise
 */
export default function MatrixLoader(props) {
  const {
    primaryColor = '#00FF88',
    glowColor = 'rgba(0, 255, 136, 0.25)',
    fontSize = 18,
    fontWeight = 400,
    font = { fontFamily: 'monospace' },
    digits = '01011001',
    randomizeDigits = true,
    noiseCharacters = '01アイABCDEFGHIJKLMNOPQRSTUVWXYZ',
    noiseInterval = 120,
    columns = 3,
    gap = 6,
    fallDuration = 2,
    flickerSpeed = 0.5,
    pulseSpeed = 2,
    staggerDelay = 0.15,
    shadowBlur = 5,
    isDecorative = true,
    ariaLabel = 'Loading...',
    blendMode = 'normal',
    resolveAfterMs = 0, // if > 0, stops randomizing and resolves to digits after this many ms
  } = props;

  const isStatic = false;

  // Generate unique scoped CSS class names per component instance
  const rawId = useId();
  const scopeId = rawId.replace(/:/g, '');
  const containerClass = `matrix-container-${scopeId}`;
  const digitClass = `matrix-digit-${scopeId}`;
  const glowClass = `matrix-glow-${scopeId}`;
  const keyframeFall = `matrix-fall-${scopeId}`;
  const keyframeFlicker = `matrix-flicker-${scopeId}`;
  const keyframePulse = `matrix-pulse-${scopeId}`;

  // State for live randomized binary/matrix noise
  const [displayDigits, setDisplayDigits] = useState(digits);

  useEffect(() => {
    if (isStatic || !randomizeDigits) {
      setDisplayDigits(digits);
      return;
    }
    const charPool = noiseCharacters || '01';
    let isResolved = false;

    const interval = setInterval(() => {
      if (isResolved) return;
      let nextStr = '';
      for (let i = 0; i < digits.length; i++) {
        if (digits[i] === ' ' || digits[i] === '\n') {
          nextStr += digits[i];
        } else {
          const randomIndex = Math.floor(Math.random() * charPool.length);
          nextStr += charPool[randomIndex];
        }
      }
      setDisplayDigits(nextStr);
    }, noiseInterval);

    let timeout;
    if (resolveAfterMs > 0) {
      timeout = setTimeout(() => {
        isResolved = true;
        clearInterval(interval);
        setDisplayDigits(digits);
      }, resolveAfterMs);
    }

    return () => {
      clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [digits, randomizeDigits, noiseCharacters, noiseInterval, isStatic, resolveAfterMs]);

  // Clean character splitting
  const digitList = displayDigits.split('');

  // Extract Typography properties smoothly
  const fontStyle = useMemo(() => {
    return {
      fontFamily: font?.fontFamily || 'monospace',
      fontWeight: font?.fontWeight || fontWeight || 400,
      fontStyle: font?.fontStyle || 'normal',
      letterSpacing: font?.letterSpacing || 'normal',
      lineHeight: font?.lineHeight || 1.2,
    };
  }, [font, fontWeight]);

  // Memoize injected CSS rules per instance to avoid unnecessary restyling on render.
  const memoizedStyles = useMemo(() => {
    return `
      .${containerClass} {
        width: 100%;
        height: 100%;
        position: relative;
        perspective: 800px;
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        gap: ${gap}px;
        align-items: center;
        justify-items: center;
      }

      .${digitClass} {
        color: ${primaryColor};
        font-family: ${fontStyle.fontFamily}, monospace;
        font-weight: ${fontStyle.fontWeight};
        font-style: ${fontStyle.fontStyle};
        letter-spacing: ${fontStyle.letterSpacing};
        line-height: ${fontStyle.lineHeight};
        font-size: ${fontSize}px;
        text-align: center;
        text-shadow: 0 0 ${shadowBlur}px ${primaryColor};
        ${
          isStatic
            ? 'opacity: 0.8;'
            : `animation:
                ${keyframeFall} ${fallDuration}s infinite,
                ${keyframeFlicker} ${flickerSpeed}s infinite;
              opacity: 0;`
        }
        user-select: none;
      }

      .${glowClass} {
        position: absolute;
        inset: 0;
        background: radial-gradient(
          circle,
          ${glowColor} 0%,
          transparent 70%
        );
        filter: blur(8px);
        mix-blend-mode: ${blendMode};
        ${isStatic ? 'opacity: 0.5;' : `animation: ${keyframePulse} ${pulseSpeed}s infinite;`}
        pointer-events: none;
      }

      ${
        isStatic
          ? ''
          : `
      @keyframes ${keyframeFall} {
        0% {
          transform: translateY(-${Math.max(50, fontSize * 2.2)}px) rotateX(90deg);
          opacity: 0;
        }
        20%, 80% {
          transform: translateY(0) rotateX(0deg);
          opacity: 0.85;
        }
        100% {
          transform: translateY(${Math.max(50, fontSize * 2.2)}px) rotateX(-90deg);
          opacity: 0;
        }
      }

      @keyframes ${keyframeFlicker} {
        0%, 19%, 21%, 100% { opacity: 0.85; }
        20% { opacity: 0.25; }
      }

      @keyframes ${keyframePulse} {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.8; }
      }
      `
      }
    `;
  }, [
    containerClass,
    digitClass,
    glowClass,
    keyframeFall,
    keyframeFlicker,
    keyframePulse,
    columns,
    gap,
    primaryColor,
    fontStyle,
    fontSize,
    shadowBlur,
    fallDuration,
    flickerSpeed,
    glowColor,
    pulseSpeed,
    blendMode,
    isStatic,
  ]);

  return (
    <div
      {...(isDecorative
        ? { 'aria-hidden': 'true' }
        : { role: 'status', 'aria-live': 'polite', 'aria-label': ariaLabel })}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'transparent',
      }}
    >
      <style>{memoizedStyles}</style>
      <div className={containerClass} style={{ backgroundColor: 'transparent' }}>
        {digitList.map((digit, index) => (
          <div
            key={index}
            className={digitClass}
            style={{
              animationDelay: isStatic ? undefined : `${(index + 1) * staggerDelay}s`,
            }}
          >
            {digit}
          </div>
        ))}
        {glowColor && glowColor !== 'transparent' && <div className={glowClass} />}
      </div>
    </div>
  );
}

MatrixLoader.defaultProps = {
  digits: '01011001',
  randomizeDigits: true,
  noiseCharacters: '01アイABCDEFGHIJKLMNOPQRSTUVWXYZ',
  noiseInterval: 120,
  columns: 3,
  gap: 6,
  primaryColor: '#00FF88',
  glowColor: 'rgba(0, 255, 136, 0.25)',
  fontSize: 18,
  fontWeight: 400,
  font: { fontFamily: 'monospace' },
  shadowBlur: 5,
  fallDuration: 2,
  flickerSpeed: 0.5,
  pulseSpeed: 2,
  staggerDelay: 0.15,
  isDecorative: true,
  ariaLabel: 'Loading...',
};
