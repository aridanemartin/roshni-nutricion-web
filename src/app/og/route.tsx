import { ImageResponse } from 'next/og'

const size = { height: 630, width: 1200 }

// The card never depends on request data, so it can be prerendered once.
export const dynamic = 'force-static'

// Social share card served at /og and referenced from page metadata.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#1c2620',
          color: '#f6f7f2',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '80px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              color: '#8db56c',
              fontSize: 28,
              letterSpacing: '0.16em',
            }}
          >
            DIETISTA-NUTRICIONISTA
          </span>
          <span style={{ fontSize: 84, lineHeight: 1.05, marginTop: 28 }}>
            Roshni Peswani
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: '#f6f7f2', fontSize: 42 }}>
            La salud empieza en tu intestino
          </span>
          <span style={{ color: '#b9c4bb', fontSize: 28, marginTop: 20 }}>
            Salud digestiva y bienestar · Las Palmas de Gran Canaria
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
