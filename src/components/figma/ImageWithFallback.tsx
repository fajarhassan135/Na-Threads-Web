import React, { useState, useEffect, useRef } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean; // For critical images (above the fold)
  preload?: boolean; // For preloading next images
}

export function ImageWithFallback({ 
  priority = false, 
  preload = false,
  loading,
  fetchPriority,
  ...props 
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const handleError = () => {
    setDidError(true)
  }

  // Aggressively preload image if preload prop is true
  useEffect(() => {
    if (preload && props.src) {
      const src = props.src as string;
      const fetchPriority = priority ? 'high' : 'auto';
      
      // Strategy 1: Link preload (best for browser prioritization)
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.setAttribute('fetchpriority', fetchPriority);
      
      // Add type hint for better optimization
      if (src.endsWith('.png')) {
        link.setAttribute('type', 'image/png');
      } else if (src.endsWith('.jpg') || src.endsWith('.jpeg')) {
        link.setAttribute('type', 'image/jpeg');
      }
      
      document.head.appendChild(link);
      
      // Strategy 2: Image() constructor (immediate loading)
      const img = new Image();
      img.src = src;
      img.fetchPriority = fetchPriority as 'high' | 'low' | 'auto';
      img.loading = 'eager';
      
      // Force decode if supported
      img.decode?.().catch(() => {});
      
      return () => {
        const existingLink = document.head.querySelector(`link[href="${src}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      };
    }
  }, [preload, props.src, priority])

  const { src, alt, style, className, ...rest } = props

  // Determine loading strategy - all images load eagerly by default
  const loadingStrategy = loading || 'eager'
  const fetchPriorityValue = fetchPriority || (priority ? 'high' : 'auto')

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img 
      ref={imgRef}
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      loading={loadingStrategy}
      fetchPriority={fetchPriorityValue as 'high' | 'low' | 'auto'}
      decoding="async"
      onError={handleError}
      {...rest}
    />
  )
}
