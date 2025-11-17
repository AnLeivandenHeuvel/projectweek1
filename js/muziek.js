const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound() {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'square'; // retro 90s synth vibe
  osc.frequency.value = 220 + Math.random() * 200; // willekeurige toon
  gain.gain.value = 0.2;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.5);
}

document.getElementById('playBtn').addEventListener('click', playSound);