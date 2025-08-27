import React from 'react'
import Children from './Children'
import GranChildren from './GranChildren'

export default function Parent() {
  return (
    <div>
        <h1>Par</h1>
        <Children/>
        <GranChildren/>
    </div>
  )
}
