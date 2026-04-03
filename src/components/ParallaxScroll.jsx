import { useEffect, useRef, useState, useCallback } from 'react';

// Hook untuk detect reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Parallax Hook dengan throttle requestAnimationFrame
const useParallax = (ref, speed = 0.5, enabled = true) => {
  const requestRef = useRef(null);
  const previousScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  // Skip parallax jika reduced motion atau disabled
  if (prefersReducedMotion || !enabled) return;

  const updateParallax = useCallback(() => {
    if (!ref.current) return;

    const scrolled = window.pageYOffset;
    const rect = ref.current.getBoundingClientRect();
    const elementTop = rect.top + scrolled;
    const elementVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (elementVisible) {
      const yPos = (scrolled - elementTop) * speed;
      ref.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }

    previousScrollY.current = scrolled;
    requestRef.current = requestAnimationFrame(updateParallax);
  }, [ref, speed]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateParallax);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [updateParallax]);
};

// Parallax Component
export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = '',
  enabled = true,
  direction = 'vertical' // 'vertical' atau 'horizontal'
}) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Disable parallax untuk reduced motion
  const isEnabled = enabled && !prefersReducedMotion;

  useParallax(ref, speed, isEnabled);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      {children}
    </div>
  );
};

// Floating Parallax Background Component
export const ParallaxBackground = ({ elements = [] }) => {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const children = containerRef.current.children;

          Array.from(children).forEach((child, index) => {
            const speed = elements[index]?.speed || 0.2;
            const yPos = scrolled * speed;
            child.style.transform = `translate3d(0, ${yPos}px, 0)`;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elements, prefersReducedMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <div
          key={index}
          className={element.className}
          style={{
            position: 'absolute',
            willChange: 'transform',
            ...element.style,
          }}
        >
          {element.content}
        </div>
      ))}
    </div>
  );
};

// Smooth Scroll Section Component
export const ParallaxSection = ({ children, className = '', offset = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: `${offset}px` }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [offset]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;
