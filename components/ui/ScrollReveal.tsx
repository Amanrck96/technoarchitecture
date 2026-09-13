'use client'

import React, { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const getOffset = () => {
    if (shouldReduceMotion || direction === 'none') return { x: 0, y: 0 }
    switch (direction) {
      case 'up':
        return { x: 0, y: 28 }
      case 'down':
        return { x: 0, y: -28 }
      case 'left':
        return { x: 28, y: 0 }
      case 'right':
        return { x: -28, y: 0 }
    }
  }

  const offset = getOffset()

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1], // Architectural fluid curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
