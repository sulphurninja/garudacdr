import React from 'react'

export default function Coordinates({latitude, longitude}) {
  return (
    <div>
      <div>
            <p>Location access granted!</p>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
          </div>
    </div>
  )
}
