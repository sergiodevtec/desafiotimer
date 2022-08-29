export default function() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
    const forestAudio = new Audio("audios/Floresta.wav?raw=true")
    const chuvaAudio = new Audio("audios/Chuva.wav?raw=true")
    const cafeteriaAudio = new Audio("audios/Cafeteria.wav?raw=true")
    const lareiraAudio = new Audio("audios/Lareira.wav?raw=true")



    bgAudio.loop

    function pressButton() {
        bgAudio.play()
    }

    function pararSom() {
        bgAudio.pause()
    }

    function playForest() {
        forestAudio.play()
    }

    function playChuva() {
        chuvaAudio.play()
    }

    function playCafeteria() {
        cafeteriaAudio.play()
    }

    function playLareira() {
        lareiraAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function stopForest() {
        forestAudio.pause()
    }

    function stopChuva() {
        chuvaAudio.pause()
    }

    function stopCafeteria() {
        cafeteriaAudio.pause()
    }

    function stopLareira() {
        lareiraAudio.pause()
    }


    return {
        pressButton,
        pararSom,
        timeEnd,
        bgAudio,
        playForest,
        playChuva,
        playCafeteria,
        playLareira,
        stopForest,
        stopChuva,
        stopCafeteria,
        stopLareira,

    }
}