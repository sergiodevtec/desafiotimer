export default function Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
  }) {
  
    function play() {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
      buttonStop.classList.remove('hide')
    }

  
    function pause() {
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
    }
    
    function reset() {
      buttonPlay.classList.remove('hide')
      buttonPause.classList.add('hide')
    }

    function getMinutes() {
      let newMinutes = prompt('Quantos minutos?')
      if (!newMinutes) {
        return false
      }
  
      return newMinutes
    }
  
    return {
      reset,
      play,
      pause,
      getMinutes
    }
  }