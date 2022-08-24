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
  buttonChuva,
  buttonCafeteria,
  buttonLareira,
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
  sound.playForest()
  removeBg()
  setTimeout(() => {
    buttonForest.classList.add('bg-blue')
  }, 500)
})

buttonChuva.addEventListener('click', function() {
  sound.playChuva()
  removeBg()
  setTimeout(() => {
    buttonChuva.classList.add('bg-blue')
  }, 500)
})

buttonCafeteria.addEventListener('click', function() {
  sound.playCafeteria()
  removeBg()
  setTimeout(() => {
    buttonCafeteria.classList.add('bg-blue')
  }, 500)
})

buttonLareira.addEventListener('click', function() {
  sound.playLareira()
  removeBg()
  setTimeout(() => {
    buttonLareira.classList.add('bg-blue')
  }, 500)
})

function removeBg() {
  buttonForest.classList.remove('bg-blue')
  buttonChuva.classList.remove('bg-blue')
  buttonCafeteria.classList.remove('bg-blue')
  buttonLareira.classList.remove('bg-blue')
}









