import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'

interface PalluvoSlideshowProps {
  images?: string[]
  interval?: number
  transitionDuration?: number
}

const DEFAULT_IMAGES = [
  '/images/palluvo/screenshot-1.jpg',
  '/images/palluvo/screenshot-2.jpg',
  '/images/palluvo/screenshot-3.jpg',
  '/images/palluvo/screenshot-4.jpg'
]

export const PalluvoSlideshow: React.FC<PalluvoSlideshowProps> = ({
  images = DEFAULT_IMAGES,
  interval = 1.8,
  transitionDuration = 600
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Array of slides with a clone of slide 1 at the end for seamless continuous looping
  const slides = useMemo(() => {
    if (images.length <= 1) return images
    return [...images, images[0]]
  }, [images])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Preload secondary images on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    images.slice(1).forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  // Automatic slideshow on hover
  useEffect(() => {
    if (!isHovered || images.length <= 1) return

    const intervalMs = Math.max(1200, Math.round(interval * 1000))

    const timer = setInterval(() => {
      setIsAnimating(true)
      setCurrentIndex(prev => {
        if (prev >= images.length) {
          return 1
        }
        return prev + 1
      })
    }, intervalMs)

    return () => clearInterval(timer)
  }, [isHovered, images.length, interval])

  // Loop back seamlessly from clone (index = length) to index 0 after transition completes
  useEffect(() => {
    if (currentIndex === images.length) {
      const snapTimer = setTimeout(() => {
        setIsAnimating(false)
        setCurrentIndex(0)
      }, transitionDuration + 30)

      return () => clearTimeout(snapTimer)
    }
  }, [currentIndex, images.length, transitionDuration])

  const handleTransitionEnd = useCallback((e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return
    if (currentIndex === images.length) {
      setIsAnimating(false)
      setCurrentIndex(0)
    }
  }, [currentIndex, images.length])

  const handleMouseEnter = useCallback(() => {
    setIsAnimating(false)
    setCurrentIndex(0)
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setIsAnimating(false)
    setCurrentIndex(0)
  }, [])

  // Listen on parent card as well if available
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const card = el.closest('a') || el.parentElement
    if (!card || card === el) return

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseEnter, handleMouseLeave])

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 'inherit',
        backgroundColor: '#fbf9f6',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating
            ? `transform ${transitionDuration}ms ease-in-out`
            : 'none',
          willChange: isAnimating ? 'transform' : 'auto'
        }}
      >
        {slides.map((src, idx) => (
          <div
            key={idx}
            style={{
              flex: '0 0 100%',
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <img
              src={src}
              alt={
                idx < images.length
                  ? `Palluvo screenshot ${idx + 1}`
                  : 'Palluvo screenshot 1'
              }
              loading={idx === 0 ? 'eager' : 'lazy'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
                pointerEvents: 'none'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
