import { createContext } from "react";
import soundFile from "./kits/TEKvsAnalogHeat_Maschine/BD_Tek_AHeat_1_1.mp3";

let actx = new AudioContext();
let out = actx.destination;
let gainNode = actx.createGain();
gainNode.gain.value = 0.5;

let pads = Array.from({ length: 9 }, () => {
  const sample = new Audio(soundFile);
  const source = actx.createMediaElementSource(sample);
  const gainNode = actx.createGain();
  gainNode.gain.value = 0.5;
  source.connect(gainNode).connect(out);
  return {
    node: sample,
    gain: gainNode,
  };
});

let initialContext = {
  actx,
  out,
  pads,
};

const AudioCTX = createContext(initialContext);

export default AudioCTX;
