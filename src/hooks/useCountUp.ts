import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
}

export const useCountUp = ({ 
  end, 
  duration = 5000, 
  start = 0, 
  delay = 0 
}: UseCountUpProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      // const endTime = startTime + duration; // Not used but kept for reference

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(start + (end - start) * progress);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, start, delay]);

  return count;
};

