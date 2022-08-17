import Controls from "./controls.js"
import Timer from "./timer.js"
import {    
  buttonPlay,
  buttonPause,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
  addMinutes,
  removeMinutes,
  buttonForest,
 } from "./elements.js"
 import Sound from "./sounds.js"


const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  addMinutes,
  removeMinutes,
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound()


buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

addMinutes.addEventListener('click', function() {

  // let newMinutes = controls.getMinutes()

  // if (!newMinutes) {
  //   timer.reset()
  //   return
  // }
  let minutes = parseInt(String(minutesDisplay.textContent));

  timer.updateMinutes(minutes + 5);
  timer.updateDisplay(minutes + 5, 0);
})

removeMinutes.addEventListener('click', function(){
  let minutes = parseInt(String(minutesDisplay.textContent));

  timer.updateMinutes(minutes - 5);
  timer.updateDisplay(minutes - 5, 0);
})

buttonForest.addEventListener('click', function() {
  controls.playForest()
})







