'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { tokens } from '../tokens'

/**
 * The walk-in. Seven scenes, one viewport of scroll each, so a single gesture
 * carries you exactly one step further into the villa (scroll-snap-stop:
 * always): driveway → portico → foyer → living → kitchen → bedroom → terrace.
 *
 * Each scene pushes forward the whole time it is on screen and crossfades
 * into the next, which reads as continuous forward travel rather than a
 * slideshow. All motion is transform/opacity only, so it composites on the
 * GPU and stays smooth on a phone.
 *
 * Each scene ships at four widths and the browser picks one, so a retina or
 * ultrawide display gets real pixels instead of an upscale. A 32px blur
 * placeholder paints instantly underneath while the real file arrives.
 */
const SCENES = [
  'The villa at the end of its approach driveway, golden hour',
  'The covered entrance portico, front door standing open',
  'The double-height entrance foyer, just inside',
  'The main living room, glazing open to the garden',
  'The kitchen island and dining table',
  'The master bedroom suite',
  'The rear terrace and pool at dusk, the house lit',
]

const N = SCENES.length

/** True on phone widths. Drives the gentler zoom and the higher crop. */
function useIsPhone() {
  const [isPhone, setIsPhone] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const apply = () => setIsPhone(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return isPhone
}

const RISE = [0.16, 1, 0.3, 1] as const

/** Scene i sits at this point along the track. */
const anchor = (i: number) => i / (N - 1)

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const progress = useMotionValue(0)
  const isPhone = useIsPhone()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let raf = 0
    const tick = () => {
      const denom = container.offsetHeight - window.innerHeight
      const top = container.getBoundingClientRect().top
      progress.set(denom > 0 ? Math.max(0, Math.min(1, -top / denom)) : 0)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [progress])

  // ─── Text beats, keyed to where they land in the journey ────────────────
  const identityOpacity = useTransform(progress, [0, 0.07], [1, 0])
  const identityY = useTransform(progress, [0, 0.07], [0, -46])

  const terraceOpacity = useTransform(
    progress,
    [0.15, 0.2, 0.26, 0.31],
    [0, 1, 1, 0]
  )
  const terraceX = useTransform(
    progress,
    [0.15, 0.2, 0.26, 0.31],
    [40, 0, 0, 26]
  )

  const insideOpacity = useTransform(
    progress,
    [0.48, 0.53, 0.6, 0.65],
    [0, 1, 1, 0]
  )
  const insideX = useTransform(
    progress,
    [0.48, 0.53, 0.6, 0.65],
    [-40, 0, 0, -26]
  )

  const closingOpacity = useTransform(progress, [0.9, 0.96], [0, 1])
  const closingY = useTransform(progress, [0.9, 0.96], [36, 0])
  const closingBackdrop = useTransform(progress, [0.88, 0.96], [0, 1])

  return (
    <div ref={containerRef} className="enter-track">
      <div className="enter-stage">
        {SCENES.map((alt, i) => (
          <Scene key={i} index={i} alt={alt} progress={progress} isPhone={isPhone} />
        ))}

        <div className="enter-overlay">
          {/* Beat 1 — arriving */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: identityOpacity,
              y: identityY,
              /* Two layers. The villa elevation is lit cream stone, so a single
                 bottom scrim leaves the eyebrow label unreadable; the second
                 wash darkens the left column where the text sits and clears
                 well before the building. */
              background:
                'linear-gradient(to top, rgba(28,22,16,0.80) 0%, rgba(28,22,16,0.46) 38%, rgba(28,22,16,0.12) 68%, transparent 100%),' +
                'linear-gradient(to right, rgba(28,22,16,0.62) 0%, rgba(28,22,16,0.34) 34%, transparent 64%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: 'clamp(1.75rem, 6vw, 5.5rem)',
              paddingBottom: 'clamp(3rem, 9vh, 6rem)',
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.05, ease: RISE }}
              style={{
                fontFamily: tokens.body,
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: tokens.accentHover,
                fontWeight: 500,
                marginBottom: '1.4rem',
                textShadow:
                  '0 1px 3px rgba(32,25,18,0.92), 0 2px 18px rgba(32,25,18,0.85)',
              }}
            >
              Now Previewing · 12 Villas Only
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.2, ease: RISE }}
              style={{
                fontFamily: tokens.display,
                fontWeight: 400,
                fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
                lineHeight: 1.02,
                color: '#F8F2E8',
                marginBottom: '1.5rem',
                textShadow: '0 2px 30px rgba(32,25,18,0.5)',
              }}
            >
              Altura
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: RISE }}
              style={{
                fontFamily: tokens.body,
                fontWeight: 300,
                fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                lineHeight: 1.7,
                color: '#F4EFE7',
                maxWidth: 460,
                marginBottom: '2.4rem',
                textShadow: '0 1px 20px rgba(32,25,18,0.6)',
              }}
            >
              Twelve villas on four and a half acres, set back behind their own
              gardens. Three to five bedrooms, twelve-foot ceilings, handed over
              fully finished. Possession December 2027.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: RISE }}
            >
              <span
                style={{
                  display: 'inline-block',
                  background: tokens.accent,
                  color: '#fff',
                  fontFamily: tokens.body,
                  fontWeight: 500,
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '0.9rem 2.6rem',
                }}
              >
                Explore the Residence
              </span>
            </motion.div>
          </motion.div>

          {/* Beat 2 — the terrace */}
          <motion.div
            className="hero-scrim hero-scrim--right"
            style={{ opacity: terraceOpacity }}
          />
          <div className="hero-aside hero-aside--right">
            <motion.div style={{ opacity: terraceOpacity, x: terraceX }}>
              <AsideLabel>The Arrival</AsideLabel>
              <AsideText>
                A private driveway, a reflecting pool along the entrance axis,
                and a door that opens before you reach it.
              </AsideText>
            </motion.div>
          </div>

          {/* Beat 3 — inside */}
          <motion.div
            className="hero-scrim hero-scrim--left"
            style={{ opacity: insideOpacity }}
          />
          <div className="hero-aside hero-aside--left">
            <motion.div style={{ opacity: insideOpacity, x: insideX }}>
              <AsideLabel>The Living Spaces</AsideLabel>
              <AsideText>
                Travertine underfoot, solid teak joinery, and glazing that puts
                the garden in every room that matters.
              </AsideText>
            </motion.div>
          </div>

          {/* Beat 4 — the table is yours. Holds through the end. */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: closingBackdrop,
              background:
                'radial-gradient(ellipse at center, rgba(32,25,18,0.6) 0%, rgba(32,25,18,0.25) 50%, transparent 78%)',
            }}
          />
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '0 clamp(1.5rem, 6vw, 5rem)',
              opacity: closingOpacity,
              y: closingY,
            }}
          >
            <p
              style={{
                fontFamily: tokens.body,
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: tokens.accentHover,
                fontWeight: 500,
                marginBottom: '1.5rem',
              }}
            >
              Four Already Booked
            </p>
            <h2
              style={{
                fontFamily: tokens.display,
                fontWeight: 400,
                fontSize: 'clamp(2.4rem, 6vw, 5.2rem)',
                lineHeight: 1.06,
                color: '#F8F2E8',
                maxWidth: '18ch',
                marginBottom: '2.4rem',
              }}
            >
              Come and walk through it.
            </h2>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04, background: tokens.accentHover }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
              style={{
                pointerEvents: 'auto',
                border: 'none',
                cursor: 'pointer',
                background: tokens.accent,
                color: '#fff',
                fontFamily: tokens.body,
                fontWeight: 500,
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '0.9rem 2.6rem',
              }}
            >
              Book a Site Visit
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* The pinned stage is scene 1's own viewport, so this is N-1 spacers,
          not N — giving N resting positions (page top, then one per spacer).
          scroll-snap-stop keeps a single gesture from carrying past the next. */}
      {SCENES.slice(1).map((_, i) => (
        <div key={i} className="enter-snap" />
      ))}
    </div>
  )
}

/* ─── One scene layer ─────────────────────────────────────────────────── */

function Scene({
  index,
  alt,
  progress,
  isPhone,
}: {
  index: number
  alt: string
  progress: ReturnType<typeof useMotionValue<number>>
  isPhone: boolean
}) {
  const here = anchor(index)
  const step = 1 / (N - 1)
  const prev = here - step
  const next = here + step

  // Crossfade with its neighbours only — never more than two layers visible.
  const opacity = useTransform(
    progress,
    [prev, here - step * 0.34, here + step * 0.34, next],
    [0, 1, 1, 0]
  )

  // Continuous push forward the whole time the scene is on screen. The next
  // scene starts wider and settles, so the movement reads as one travel.
  // A 16:9 frame cover-fitted into a portrait phone already crops hard, so the
  // zoom is gentler there — otherwise the building fills the frame and reads
  // as a wall rather than a house.
  const scale = useTransform(
    progress,
    [prev, next],
    isPhone ? [1.0, 1.07] : [1.02, 1.17]
  )

  // Slight counter-drift against the scroll — the parallax depth cue.
  const y = useTransform(progress, [prev, next], ['3%', '-3%'])

  const n = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      className={`enter-layer${index === 0 ? ' enter-layer--hero' : ''}`}
      style={{ opacity, scale, y }}
    >
      <div
        className="enter-layer-ph"
        style={{ backgroundImage: `url(/scenes/scene${n}p.webp)` }}
        aria-hidden
      />
      <picture>
        {/* A 16:9 frame cover-fitted into a portrait phone loses roughly two
            thirds of its width, which turns the establishing shot into a slab
            of facade. Scene 1 therefore has its own portrait crop; the
            interiors read fine cropped, so they do not need one. */}
        {index === 0 && (
          <source
            media="(max-width: 767px) and (orientation: portrait)"
            type="image/webp"
            srcSet={
              '/scenes/scene01-p900.webp 900w, ' +
              '/scenes/scene01-p1280.webp 1280w'
            }
            sizes="110vw"
          />
        )}
        <source
          type="image/webp"
          srcSet={
            `/scenes/scene${n}-1280.webp 1280w, ` +
            `/scenes/scene${n}-2048.webp 2048w, ` +
            `/scenes/scene${n}-3072.webp 3072w, ` +
            `/scenes/scene${n}-4096.webp 4096w`
          }
          /* Each scene fills the viewport and zooms to 1.17, so ask for
             appreciably more than 100vw or it renders upscaled and soft. */
          sizes="120vw"
        />
        {/* No load-state gate: the blurred stand-in sits behind, so an image
            that has not arrived yet is simply transparent and the blur shows
            through. Gating on an onLoad handler loses the event whenever the
            image completes before React attaches it — which is exactly what
            happens to the eager ones — and strands the scene on its blur. */}
        {/* No fetchPriority: React 19.0.0 emits it to the SSR markup as
            camelCase `fetchPriority`, the browser parses attribute names
            case-insensitively as `fetchpriority`, and hydration then reports
            the attribute as mismatched. The eager/lazy split below already
            does the prioritising, and scene 1 is the LCP image anyway. */}
        <img
          src={`/scenes/scene${n}-2048.webp`}
          alt={alt}
          decoding="async"
          loading={index <= 1 ? 'eager' : 'lazy'}
        />
      </picture>
    </motion.div>
  )
}

/* ─── Shared aside bits ───────────────────────────────────────────────── */

function AsideLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: tokens.body,
        fontSize: '0.65rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: tokens.accentHover,
        fontWeight: 500,
        marginBottom: '1rem',
      }}
    >
      {children}
    </p>
  )
}

function AsideText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: tokens.display,
        fontWeight: 400,
        fontSize: 'clamp(1.2rem, 2.2vw, 1.75rem)',
        lineHeight: 1.45,
        color: '#F8F2E8',
        textShadow: '0 2px 24px rgba(32,25,18,0.55)',
      }}
    >
      {children}
    </p>
  )
}
