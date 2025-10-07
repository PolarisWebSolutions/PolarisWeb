'use client'

import React, { useEffect, useState } from 'react'
import GradualBlur from './GradualBlur'

interface ScrollGradualBlurProps {
  children: React.ReactNode
  className?: string
  strength?: number
  height?: string
  position?: 'top' | 'bottom'
  scrollThreshold?: number
}

const ScrollGradualBlur: React.FC<ScrollGradualBlurProps> = ({
  children,
  className = '',
  strength = 2,
  height = '6rem',
  position = 'top',
  scrollThreshold = 100
}) => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsVisible(currentScrollY > scrollThreshold)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold])

  // Calculate blur strength based on scroll position
  const dynamicStrength = Math.min(strength * (scrollY / 500), strength * 2)

  return (
    <div className={`relative ${className}`}>
      {children}
      {isVisible && (
        <GradualBlur
          position={position}
          strength={dynamicStrength}
          height={height}
          animated="scroll"
          target="page"
          zIndex={40}
          opacity={0.8}
          curve="ease-out"
          divCount={6}
        />
      )}
    </div>
  )
}

export default ScrollGradualBlur
