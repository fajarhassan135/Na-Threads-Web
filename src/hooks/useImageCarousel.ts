import { useState, useEffect } from 'react';

interface UseImageCarouselProps {
  images: string[];
  interval?: number;
  maxVisible?: number;
}

export const useImageCarousel = ({ 
  images, 
  interval = 3000, 
  maxVisible = 3 
}: UseImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < maxVisible; i++) {
      const imageIndex = (currentIndex + i) % images.length;
      visibleImages.push({
        src: images[imageIndex],
        index: imageIndex
      });
    }
    return visibleImages;
  };

  return {
    currentIndex,
    visibleImages: getVisibleImages(),
    totalImages: images.length
  };
};
