console.log('tones test')

var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
var oscillator = audioCtx.createOscillator()
var gainNode = audioCtx.createGain()

oscillator.type = "square"
oscillator.frequency.value = 200
gainNode.gain.value = 0.5

oscillator.connect(gainNode)
gainNode.connect(audioCtx.destination)
