import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return mobile;
}