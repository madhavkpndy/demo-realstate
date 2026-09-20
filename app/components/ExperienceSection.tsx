'use client'

import Reveal from './Reveal'
import { tokens } from '../tokens'
import { asset } from '../basePath'

export default function ExperienceSection() {
  return (
    <section
      style={{
        background: tokens.bg,
        padding: 'clamp(6rem, 14vh, 11rem) clamp(1.5rem, 7vw, 7rem)',
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
        }}
      >
        <div>
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
              The Residence
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
                marginBottom: '2rem',
                maxWidth: '16ch',
              }}
            >
              Built for the way you actually live.
            </h2>
          </Reveal>

          <Reveal index={2}>
            <p
              style={{
                fontFamily: tokens.body,
                fontWeight: 300,
                fontSize: 'clamp(1rem, 1.3vw, 1.12rem)',
                lineHeight: 1.85,
                color: tokens.textBody,
                marginBottom: '1.6rem',
                maxWidth: '54ch',
              }}
            >
              Every villa is oriented to take the morning light through the
              living spaces and hold the shade by afternoon. Ceilings run to
              twelve feet. The glazing is floor-to-ceiling and double-glazed, so
              the garden is always in the room and the road never is.
            </p>
          </Reveal>

          <Reveal index={3}>
            <p
              style={{
                fontFamily: tokens.body,
                fontWeight: 300,
                fontSize: 'clamp(1rem, 1.3vw, 1.12rem)',
                lineHeight: 1.85,
                color: tokens.textBody,
                marginBottom: '2.6rem',
                maxWidth: '54ch',
              }}
            >
              Travertine floors, solid teak joinery, imported German fittings
              throughout. Private lift core, staff quarters, and a covered
              two-car porch to every unit. Handed over fully finished — not a
              shell with a brochure.
            </p>
          </Reveal>

          <Reveal index={4}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(1.5rem, 3vw, 3rem)',
                borderTop: `1px solid ${tokens.border}`,
                paddingTop: '2rem',
              }}
            >
              {[
                ['Plot', '4.2 acres'],
                ['Villas', '12 only'],
                ['Possession', 'Dec 2027'],
                ['Approvals', 'RERA registered'],
              ].map(([k, v]) => (
                <div key={k}>
                  <p
                    style={{
                      fontFamily: tokens.body,
                      fontSize: '0.65rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: tokens.olive,
                      fontWeight: 500,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {k}
                  </p>
                  <p
                    style={{
                      fontFamily: tokens.body,
                      fontWeight: 300,
                      fontSize: '0.95rem',
                      color: tokens.textPrimary,
                    }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal index={2}>
          <figure style={{ position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/scenes/scene04-2048.webp')}
              alt="The living room of an Altura villa, floor-to-ceiling glazing opening to the garden"
              style={{
                display: 'block',
                width: '100%',
                height: 'clamp(340px, 62vh, 640px)',
                objectFit: 'cover',
              }}
            />
            <figcaption
              style={{
                fontFamily: tokens.body,
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: tokens.dim,
                fontWeight: 500,
                marginTop: '1rem',
              }}
            >
              Living room · Signature Villa
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
