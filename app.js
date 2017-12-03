var tones = document.getElementsByClassName('tone')
var tonesListeners = function() {
  for (var i = 0; i < tones.length; i++) {
    let tone = tones[i]
    tone.addEventListener('click', () => {
      console.log(tone.id);
    })
  }
}
tonesListeners()
