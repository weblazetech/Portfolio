import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'

interface PalluvoSlideshowProps {
  images?: string[]
  interval?: number
  transitionDuration?: number
  initialDelay?: number
}

const DEFAULT_IMAGES = [
  '/images/palluvo/screenshot-1.jpg',
  '/images/palluvo/screenshot-2.jpg',
  '/images/palluvo/screenshot-3.jpg',
  '/images/palluvo/screenshot-4.jpg'
]

// Global pointer tracking and scroll-aware hit-testing coordinator
let globalPointerX = -1
let globalPointerY = -1
let hasPointer = false
let globalListenersAttached = false
const subscribers = new Set<() => void>()

function notifySubscribers() {
  subscribers.forEach(cb => cb())
}

let scrollRafId: number | null = null

function handleGlobalScroll() {
  if (scrollRafId !== null) return
  scrollRafId = requestAnimationFrame(() => {
    scrollRafId = null
    if (hasPointer && globalPointerX >= 0 && globalPointerY >= 0) {
      notifySubscribers()
    }
  })
}

function handleGlobalPointerMove(e: MouseEvent | PointerEvent) {
  globalPointerX = e.clientX
  globalPointerY = e.clientY
  hasPointer = true
}

function handleGlobalPointerLeave() {
  hasPointer = false
  globalPointerX = -1
  globalPointerY = -1
  notifySubscribers()
}

function ensureGlobalListeners() {
  if (globalListenersAttached || typeof window === 'undefined') return
  globalListenersAttached = true

  window.addEventListener('pointermove', handleGlobalPointerMove, { passive: true })
  window.addEventListener('mousemove', handleGlobalPointerMove, { passive: true })
  window.addEventListener('scroll', handleGlobalScroll, { passive: true })
  window.addEventListener('wheel', handleGlobalScroll, { passive: true })
  document.addEventListener('mouseleave', handleGlobalPointerLeave, { passive: true })
}

function removeGlobalListeners() {
  if (!globalListenersAttached || typeof window === 'undefined') return
  globalListenersAttached = false

  window.removeEventListener('pointermove', handleGlobalPointerMove)
  window.removeEventListener('mousemove', handleGlobalPointerMove)
  window.removeEventListener('scroll', handleGlobalScroll)
  window.removeEventListener('wheel', handleGlobalScroll)
  document.removeEventListener('mouseleave', handleGlobalPointerLeave)
}

export const PalluvoSlideshow: React.FC<PalluvoSlideshowProps> = ({
  images = DEFAULT_IMAGES,
  interval = 0.85,
  transitionDuration = 450,
  initialDelay = 0.08
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Array of slides with a clone of slide 1 at the end for seamless continuous looping
  const slides = useMemo(() => {
    if (images.length <= 1) return images
    return [...images, images[0]]
  }, [images])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [withTransition, setWithTransition] = useState(true)

  const isHoveredRef = useRef(isHovered)
  isHoveredRef.current = isHovered

  // Preload secondary images on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    images.slice(1).forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  // Automatic slideshow on hover: starts promptly (~80ms), then cycles
  useEffect(() => {
    if (!isHovered || images.length <= 1) return

    let intervalTimer: ReturnType<typeof setInterval> | null = null

    const initialTimer = setTimeout(() => {
      setWithTransition(true)
      setCurrentIndex(prev => prev + 1)

      intervalTimer = setInterval(() => {
        setWithTransition(true)
        setCurrentIndex(prev => prev + 1)
      }, Math.max(500, Math.round(interval * 1000)))
    }, Math.round(initialDelay * 1000))

    return () => {
      clearTimeout(initialTimer)
      if (intervalTimer) clearInterval(intervalTimer)
    }
  }, [isHovered, images.length, interval, initialDelay])

  // Instant reset when reaching cloned slide (index === images.length)
  useEffect(() => {
    if (currentIndex === images.length && images.length > 1) {
      const timeout = setTimeout(() => {
        setWithTransition(false)
        setCurrentIndex(0)
      }, transitionDuration)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, images.length, transitionDuration])

  // Reset to slide 0 whenever hover stops
  useEffect(() => {
    if (!isHovered) {
      setCurrentIndex(0)
      setWithTransition(true)
    }
  }, [isHovered])

  // Check whether the container or its parent card is currently underneath the cursor
  const checkHoverUnderCursor = useCallback(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    const canHover = window.matchMedia('(hover: hover)').matches
    if (!canHover) {
      if (isHoveredRef.current) {
        setIsHovered(false)
        setWithTransition(true)
        setCurrentIndex(0)
      }
      return
    }

    if (!hasPointer || globalPointerX < 0 || globalPointerY < 0) {
      if (isHoveredRef.current) {
        setIsHovered(false)
        setWithTransition(true)
        setCurrentIndex(0)
      }
      return
    }

    const card = containerRef.current.closest('a') || containerRef.current
    const rect = card.getBoundingClientRect()
    const isInBounds =
      globalPointerX >= rect.left &&
      globalPointerX <= rect.right &&
      globalPointerY >= rect.top &&
      globalPointerY <= rect.bottom

    let isUnderCursor = false
    if (isInBounds) {
      const el = document.elementFromPoint(globalPointerX, globalPointerY)
      isUnderCursor =
        el === null ||
        card === el ||
        card.contains(el) ||
        el.contains(card)
    }

    if (isUnderCursor) {
      if (!isHoveredRef.current) {
        setWithTransition(true)
        setIsHovered(true)
      }
    } else {
      if (isHoveredRef.current) {
        setIsHovered(false)
        setWithTransition(true)
        setCurrentIndex(0)
      }
    }
  }, [])

  // Register with global coordinator
  useEffect(() => {
    if (typeof window === 'undefined') return
    ensureGlobalListeners()

    subscribers.add(checkHoverUnderCursor)
    checkHoverUnderCursor()

    return () => {
      subscribers.delete(checkHoverUnderCursor)
      if (subscribers.size === 0) {
        removeGlobalListeners()
      }
    }
  }, [checkHoverUnderCursor])

  const handlePointerEnter = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    globalPointerX = e.clientX
    globalPointerY = e.clientY
    hasPointer = true

    if (typeof window !== 'undefined') {
      const canHover = window.matchMedia('(hover: hover)').matches
      if (!canHover) return
    }

    notifySubscribers()
  }, [])

  const handlePointerLeave = useCallback(() => {
    if (isHoveredRef.current) {
      setIsHovered(false)
      setWithTransition(true)
      setCurrentIndex(0)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
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
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: withTransition
            ? `transform ${transitionDuration}ms cubic-bezier(0.25, 1, 0.5, 1)`
            : 'none',
          willChange: 'transform'
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
                  ? `Preview screenshot ${idx + 1}`
                  : 'Preview screenshot 1'
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
