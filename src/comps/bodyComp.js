import React from 'react'
import InputComp from './insideBody/inputComp'
import ScoreComp from './insideBody/scoreComp'

export default function BodyComp() {
  return (
    <div className='row body-comp'>
        <InputComp/>
        <ScoreComp/>
    </div>
  )
}
