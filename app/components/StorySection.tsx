'use client'

import Reveal from './Reveal'
import { tokens } from '../tokens'
import { asset } from '../basePath'

export default function StorySection() {
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
        <Reveal index={1}>
          <figure style={{ position: 'relative', order: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/scenes/scene07-2048.webp')}
              alt="The rear terrace and pool of an Altura villa at dusk"
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
              Pool terrace · Estate Villa
            </figcaption>
          </figure>
        </Reveal>

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
              The Developer
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
              Thirty years. Nine thousand homes.
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
              We have been building in this city since 1994 — first walk-ups,
              then townships, and for the last decade a small number of
              low-density villa projects like this one. Forty-one completed
              developments. Not one of them delivered late.
            </p>
          </Reveal>

          <Reveal index={3}>
            <blockquote
              style={{
                fontFamily: tokens.display,
                fontWeight: 400,
                fontSize: 'clamp(1.35rem, 2.6vw, 2rem)',
                lineHeight: 1.45,
                color: tokens.textPrimary,
                borderLeft: `2px solid ${tokens.accent}`,
                paddingLeft: 'clamp(1.2rem, 2.5vw, 2rem)',
                margin: '2.4rem 0',
                maxWidth: '26ch',
              }}
            >
              We would rather build twelve villas properly than a hundred in a
              hurry.
            </blockquote>
          </Reveal>

          <Reveal index={4}>
            <p
              style={{
                fontFamily: tokens.body,
                fontWeight: 300,
                fontSize: 'clamp(1rem, 1.3vw, 1.12rem)',
                lineHeight: 1.85,
                color: tokens.textBody,
                maxWidth: '54ch',
              }}
            >
              Every project is built on our own land, with our own site teams,
              and funded without construction debt — which is why our handover
              dates hold. Structural warranty runs ten years, fittings and
              waterproofing five. The same site engineer stays with the project
              from excavation to your keys.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
