import React from 'react'
import {Frame} from './styled'

export default function AnimalPads() {

  const componentsOfClassicDrumPads = ["kick", "snare", "crash", "tom1", "tom2", "tom3"] 

    const playSound = (e) => {
        e.preventDefault()

      }
  
    return (
    
        <div className="frameContainer">
     {componentsOfClassicDrumPads.map((component, index) => {
            return (
                <Frame key={index} onClick={playSound} value={component} >animal</Frame>
            )
        })}
        </div>
    
  )
}
