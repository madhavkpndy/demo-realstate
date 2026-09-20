'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { tokens, ease } from '../tokens'

export default function ClosingCTA() {
  return (
    <section
      style={{
        position: 'relative',
        background: tokens.bg,
        padding: 'clamp(7rem, 20vh, 14rem) clamp(1.5rem, 7vw, 7rem)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Subtle warm glow behind the call to action. */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(1100px, 130vw)',
          height: 'min(700px, 90vh)',
          background:
            'radial-gradient(ellipse, rgba(184,111,75,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
        <Reveal index={0}>
          <p
            style={{
              fontFamily: tokens.body,
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: tokens.accent,
              fontWeight: 500,
              marginBottom: '2rem',
            }}
          >
            Private Preview Open
          </p>
        </Reveal>

        <Reveal index={1}>
          <h2
            style={{
              fontFamily: tokens.display,
              fontWeight: 400,
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              color: tokens.textPrimary,
              marginBottom: '2rem',
            }}
          >
            See it before it&rsquo;s sold.
            <br />
            <em style={{ fontStyle: 'italic' }}>Twelve villas, that&rsquo;s all.</em>
          </h2>
        </Reveal>

        <Reveal index={2}>
          <p
            style={{
              fontFamily: tokens.body,
              fontWeight: 300,
              fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
              lineHeight: 1.8,
              color: tokens.textBody,
              maxWidth: 480,
              margin: '0 auto 3rem',
            }}
          >
            Four villas are already booked. Site visits run daily between 10am
            and 6pm, and we will walk you through the show villa, the plans and
            the payment schedule in about an hour.
          </p>
        </Reveal>

        <Reveal index={3}>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04, background: '#A25F3E' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease }}
            style={{
              border: 'none',
              cursor: 'pointer',
              background: tokens.accent,
              color: '#fff',
              fontFamily: tokens.body,
              fontWeight: 500,
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '1.1rem 3.2rem',
            }}
          >
            Book a Site Visit
          </motion.button>
        </Reveal>

        <Reveal index={4}>
          <p
            style={{
              fontFamily: tokens.body,
              fontWeight: 300,
              fontSize: '0.8rem',
              letterSpacing: '0.04em',
              color: tokens.dim,
              marginTop: '2.4rem',
            }}
          >
            Site office open daily · 10am – 6pm · +91 XXXXX XXXXX
          </p>
        </Reveal>
      </div>
    </section>
  )
}
