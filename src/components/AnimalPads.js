import React from 'react'
import {Frame} from './styled'

export default function AnimalPads() {
    const playSound = (e) => {
        e.preventDefault()

      }
  
    return (
    
        <div className="frameContainer">
            <Frame onClick={playSound}></Frame>
            <Frame onClick={playSound}></Frame>
            <Frame onClick={playSound}></Frame>
            <Frame onClick={playSound}></Frame>
            <Frame onClick={playSound}></Frame>
            <Frame onClick={playSound}></Frame>
            <Frame onClick={playSound}></Frame>
        </div>
    
  )
}
