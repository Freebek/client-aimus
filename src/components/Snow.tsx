'use client'

import Snowfall from 'react-snowfall'

export default function Snow() {
  return (
    <Snowfall
      snowflakeCount={120}
      color="#fff"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
