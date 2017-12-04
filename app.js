var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
// var distortion = audioCtx.createWaveShaper()

var tones = document.getElementsByClassName('tone')

var tonesListeners = function() {
  for (var i = 0; i < tones.length; i++) {
    let color = tones[i]
    color.addEventListener('click', () => {
      playTone(color)
    })
  }
}
tonesListeners()

function playTone(color) {
  if (color) {
    for (var i = 0; i < 4; i++) {
      let time = audioCtx.currentTime
      let gainNode = audioCtx.createGain()
      gainNode.gain.value = 0
      gainNode.connect(audioCtx.destination)

      let oscillator = audioCtx.createOscillator()
      oscillator.connect(gainNode)
      oscillator.type = "sawtooth"
      oscillator.attackTime = 0.01
      oscillator.releaseTime = 0.39

      let frequency = color.id.length*Math.PI*30 - Math.PI*i*15
      oscillator.frequency.value = frequency

      // make a sound
      oscillator.start();
      console.log(time);
      // attack
      gainNode.gain.linearRampToValueAtTime(1.0, time + 0.05);
      // decay
      gainNode.gain.exponentialRampToValueAtTime(0.2, time + 0.1);
      // sustain
      gainNode.gain.linearRampToValueAtTime(1.0, time + 0.2);
      // release
      gainNode.gain.exponentialRampToValueAtTime(0.2, time + 0.2);
      // stop
      oscillator.stop(time + 0.3)
    }
  }
}
