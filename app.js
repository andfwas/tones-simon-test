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
    for (var i = 0; i < 4; i++) {
      let oscillator = audioCtx.createOscillator()
      let gainNode = audioCtx.createGain()
      let time = audioCtx.currentTime
      let frequency  =color.id.length*30 - i*0.15
      oscillator.type = "sawtooth"
      oscillator.frequency.value = frequency
      oscillator.attackTime = 0.01

      oscillator.releaseTime = 0.5
      gainNode.gain.value = 0.4
      oscillator.connect(gainNode)
      gainNode.connect(audioCtx.destination)
      oscillator.start();
      gainNode.gain.linearRampToValueAtTime(0.0, time + 0.4);
      oscillator.stop(audioCtx.currentTime + 0.4)
    }
  }
}
