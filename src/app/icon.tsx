import { ImageResponse } from 'next/og'
 
export function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 32, height: 32 },
      id: 'xsmall',
    },
    {
      contentType: 'image/png',
      size: { width: 48, height: 48 },
      id: 'small',
    },
    {
      contentType: 'image/png',
      size: { width: 72, height: 72 },
      id: 'medium',
    },
    {
      contentType: 'image/png',
      size: { width: 180, height: 180 },
      id: 'apple-icon',
    },
  ]
}

export const runtime = 'edge'

export default function Icon( { size }: { size: object }) {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: 'Atkinson Hyperlegible',
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        gh
      </div>
    ),
    {
      ...size,
    }
  )
}