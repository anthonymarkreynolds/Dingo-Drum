import React from 'react'
import {Frame} from './styled'
import bird from '../AnimalDrum/bird.mp3'
import dog from '../AnimalDrum/dog.mp3'
import frog from '../AnimalDrum/frog.mp3'
import kitty from '../AnimalDrum/kitty.mp3'
import squirrel from '../AnimalDrum/squirrel.mp3'
import wolf from '../AnimalDrum/wolf.mp3'



export default function AnimalPads() {
  
  const animals = ["bird", "dog", "frog", "kitty", "squirrel", "wolf"] 

  const playSound = (e) => {
    
    soundSelector(e.target.value)
  }
  const soundSelector= (key) => {
    switch(key){
      case "bird":
        new Audio(bird).play();
        break
      case "dog":
        new Audio(dog).play();
        break
      case "frog":
        new Audio(frog).play();
        break
      case "kitty":
        new Audio(kitty).play();
        break
      case "squirrel":
        new Audio(squirrel).play();
        break
      case "wolf":
        new Audio(wolf).play();
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
            soundSelector('bird')
            break
        case 's':
            soundSelector('dog')
            break
        case 'd':
            soundSelector('frog')
            break
        case 'f':
            soundSelector('kitty')
            break
        case 'g':
            soundSelector('squirrel')
            break
        case 'h':
            soundSelector('wolf')
            break
            default:
          break
    }
});
    return (
    
        <div className="frameContainer">
     {animals.map((component, index) => {
            return (
                <Frame key={index} onClick={playSound} value={component} >animal</Frame>
            )
        })}
        </div>
    
  )
}

