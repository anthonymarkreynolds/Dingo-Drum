import React from 'react'
import {Frame} from './styled'
import kickBass from '../ClassicDrum/kick-bass.mp3'
import snare from '../ClassicDrum/snare.mp3'
import crash from '../ClassicDrum/crash.mp3'
import tom1 from '../ClassicDrum/crash.mp3'
import tom2 from '../ClassicDrum/crash.mp3'
import tom3 from '../ClassicDrum/crash.mp3'


export default function ClassicDrumPads() {
  
  const componentsOfClassicDrumPads = ["kick", "snare", "crash", "tom1", "tom2", "tom3"] 
  
  const playSound = (e) => {
    console.log(e.target.value)
    soundSelector(e.target.value)
  }


  const soundSelector= (key) => {
    switch(key){
      case "kick":
        new Audio(kickBass).play();
        break
      case "snare":
        new Audio(snare).play();
        break
      case "crash":
        new Audio(crash).play();
        break
      case "tom1":
        new Audio(tom1).play();
        break
      case "tom2":
        new Audio(tom2).play();
        break
      case "tom3":
        new Audio(tom3).play();
        break
        default:
          break
    }
  }

  document.addEventListener("keydown", (e) => {
    e.stopImmediatePropagation();
    console.log(e.key)
    switch(e.key) {
        case 'a':
            soundSelector('kick')
            break
        case 's':
            soundSelector('snare')
            break
        case 'd':
            soundSelector('crash')
            break
        case 'f':
            soundSelector('tom1')
            break
        case 'g':
            soundSelector('tom2')
            break
        case 'h':
            soundSelector('tom3')
            break
        default:
          break
    }
});


  return (
    <div className="frameContainer">
     {componentsOfClassicDrumPads.map((component, index) => {
            return (
                <Frame key={index} onClick={playSound} value={component} >classic</Frame>
            )
        })}
    </div>
  )
}
