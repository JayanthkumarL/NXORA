import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the element matching the current URL hash after navigation.
 * Used so that links like `/` + `#work` or `/#contact` scroll correctly
 * when returning from a sub-page (e.g. a case study).
 */
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to let the DOM render before scrolling
      const timeout = setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          const navHeight = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = Math.max(0, elementPosition - navHeight);

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
      return () => clearTimeout(timeout);
    } else if (pathname === '/') {
      // If navigating to `/` without hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
