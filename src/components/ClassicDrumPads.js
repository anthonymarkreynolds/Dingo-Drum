import React from 'react'
import {Frame} from './styled'


export default function ClassicDrumPads() {
  const playSound = (e) => {
    e.preventDefault()

  }


  return (
    <div className="frameContainer">
    <Frame className="animalPads" onClick={playSound}></Frame>
    <Frame onClick={playSound}></Frame>
    <Frame onClick={playSound}></Frame>
    <Frame onClick={playSound}></Frame>
    <Frame onClick={playSound}></Frame>
    <Frame onClick={playSound}></Frame>
    <Frame onClick={playSound}></Frame>
</div>
  )
}
