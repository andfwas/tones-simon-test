var audioCtx = new (window.AudioContext || window.webkitAudioContext)()

var tones = document.getElementsByClassName('tone')

var tonesListeners = function() {
  for (var i = 0; i < tones.length; i++) {
    let tone = tones[i]
    tone.addEventListener('click', () => {
      console.log(tone);
      let oscillator = audioCtx.createOscillator()
      let gainNode = audioCtx.createGain()
      oscillator.type = "square"
      oscillator.frequency.value = 200
      oscillator.attackTime = 0.1
      oscillator.decayTime = 0.5
      oscillator.releaseTime = 0.5
      gainNode.gain.value = 0.1
      oscillator.connect(gainNode)
      gainNode.connect(audioCtx.destination)
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.5)

    })
  }
}
tonesListeners()

// function playTone(color) {
//   if (color) {
//     console.log(color);
//
//   }
// }
