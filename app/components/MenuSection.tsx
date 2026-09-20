'use client'

import { useState } from 'react'
import Reveal from './Reveal'
import { tokens } from '../tokens'

const RESIDENCES = [
  {
    name: '3 BHK · Garden Villa',
    note: 'Ground + one. Private garden, double-height living, two-car porch.',
    area: '3,240 sq ft',
    price: '4.85 Cr',
  },
  {
    name: '4 BHK · Signature Villa',
    note: 'Ground + two. Family lounge on the upper floor, north-lit study.',
    area: '4,410 sq ft',
    price: '6.60 Cr',
  },
  {
    name: '4 BHK · Pool Villa',
    note: 'Private 30-foot pool, sunken deck, outdoor kitchen and pergola.',
    area: '5,120 sq ft',
    price: '7.95 Cr',
  },
  {
    name: '5 BHK · Estate Villa',
    note: 'Corner plot, private lift to all levels, separate staff block.',
    area: '6,800 sq ft',
    price: '10.50 Cr',
  },
  {
    name: '5 BHK · Sky Villa',
    note: 'Roof terrace with plunge pool and an uninterrupted western view.',
    area: '7,460 sq ft',
    price: '12.75 Cr',
  },
]

export default function MenuSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      style={{
        background: tokens.cream,
        padding: 'clamp(6rem, 14vh, 11rem) clamp(1.5rem, 7vw, 7rem)',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Reveal index={0}>
          <p
            style={{
              fontFamily: tokens.body,
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: tokens.accent,
              fontWeight: 500,
              marginBottom: '1.6rem',
            }}
          >
            Plans &amp; Pricing
          </p>
        </Reveal>

        <Reveal index={1}>
          <h2
            style={{
              fontFamily: tokens.display,
              fontWeight: 400,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.12,
              color: tokens.textPrimary,
              marginBottom: '1.4rem',
            }}
          >
            Five villas. No two alike.
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
              maxWidth: '52ch',
              marginBottom: 'clamp(3rem, 6vh, 4.5rem)',
            }}
          >
            Twelve villas across 4.2 acres, in five configurations. Prices are
            all-inclusive of registration, and held for thirty days from booking.
          </p>
        </Reveal>

        <div style={{ borderTop: `1px solid ${tokens.border}` }}>
          {RESIDENCES.map((item, i) => (
            <Reveal key={item.name} index={Math.min(i, 5)}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 'clamp(1rem, 3vw, 2.5rem)',
                  padding: 'clamp(1.4rem, 2.6vh, 2rem) 0',
                  borderBottom: `1px solid ${tokens.border}`,
                  transition:
                    'background 600ms cubic-bezier(0.25,0,0,1), padding-left 600ms cubic-bezier(0.25,0,0,1)',
                  background:
                    hovered === i ? 'rgba(184,111,75,0.05)' : 'transparent',
                  paddingLeft: hovered === i ? '1rem' : 0,
                }}
              >
                <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                  <h3
                    style={{
                      fontFamily: tokens.display,
                      fontWeight: 400,
                      fontSize: 'clamp(1.15rem, 2vw, 1.6rem)',
                      color:
                        hovered === i ? tokens.accent : tokens.textPrimary,
                      transition: 'color 600ms cubic-bezier(0.25,0,0,1)',
                      marginBottom: '0.45rem',
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: tokens.body,
                      fontWeight: 300,
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      color: tokens.dim,
                      maxWidth: '56ch',
                    }}
                  >
                    {item.note}
                  </p>
                </div>
                <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                  <div
                    style={{
                      fontFamily: tokens.body,
                      fontWeight: 400,
                      fontSize: '0.95rem',
                      color: tokens.textPrimary,
                    }}
                  >
                    ₹{item.price}
                  </div>
                  <div
                    style={{
                      fontFamily: tokens.body,
                      fontWeight: 300,
                      fontSize: '0.78rem',
                      color: tokens.olive,
                      marginTop: '0.3rem',
                    }}
                  >
                    {item.area}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal index={1}>
          <p
            style={{
              fontFamily: tokens.body,
              fontWeight: 300,
              fontSize: '0.85rem',
              lineHeight: 1.7,
              color: tokens.dim,
              marginTop: '2.4rem',
            }}
          >
            Construction-linked and possession-linked payment plans available.
            Home loans pre-approved with leading banks. RERA P1234/56789.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
