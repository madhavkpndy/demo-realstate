export const tokens = {
  bg: '#F4EFE7',
  textPrimary: '#2C2924',
  textBody: '#5F5A51',
  accent: '#B86F4B',
  accentHover: '#D18A61',
  dim: '#777168',
  border: 'rgba(74,63,51,0.16)',
  cream: '#E8DDCC',
  olive: '#69705A',
  display: 'var(--font-playfair)',
  body: 'var(--font-inter)',
} as const

export const label = {
  fontFamily: tokens.body,
  fontSize: '0.65rem',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: tokens.accent,
  fontWeight: 500,
} as const

export const ease = [0.25, 0, 0, 1] as const
