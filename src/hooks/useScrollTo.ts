import { useCallback } from 'react';

export const useScrollTo = () => {
  const handleClick = useCallback((href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (!element) return;

    const headerOffset = 88; // Navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }, []);

  return { handleClick };
};