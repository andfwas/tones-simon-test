var audioCtx = new (window.AudioContext || window.webkitAudioContext)()

var tones = document.getElementsByClassName('tone')

var tonesListeners = function() {
  for (var i = 0; i < tones.length; i++) {
    let tone = tones[i]
    tone.addEventListener('click', () => {
      playTone(tone)
    })
  }
}
tonesListeners()

function playTone(color) {
  if (color) {
    var decay = decay
    let frequency = color.id.length*40
    let oscillator = audioCtx.createOscillator()
    let gainNode = audioCtx.createGain()
    // let time = audioCtx.currentTime
    oscillator.type = "square"
    oscillator.frequency.value = frequency
    oscillator.attackTime = 0.01
    oscillator.decayTime = 0.2
    oscillator.releaseTime = 0.5
    gainNode.gain.value = 0.1
    oscillator.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.4)
    console.log(audioCtx.currentTime)

  }
}
