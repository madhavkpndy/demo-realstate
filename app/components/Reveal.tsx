'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ease } from '../tokens'

/**
 * Scroll-triggered fade-in shared by every page section.
 * y 24→0, opacity 0→1, 100ms stagger by `index`, plays once.
 */
export default function Reveal({
  children,
  index = 0,
  style,
}: {
  children: React.ReactNode
  index?: number
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.9, delay: index * 0.1, ease }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
