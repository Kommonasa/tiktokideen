const ideas = [
  "🔥 Neue Tanz-Challenge starten",
  "🎭 Lustige Sketche filmen",
  "💥 Glow-Up: vorher hässlich ➔ nachher hübsch",
  "🎶 Lip-Sync Battle",
  "🐶 Haustier-Tricks",
  "🍔 Essens-Challenge",
  "🎮 Gaming Highlight Clips",
  "🎤 Karaoke Show",
  "📚 Storytime Drama",
  "🏋️‍♂️ Fitness Transformation",
  "💄 Makeover Blitz",
  "🧠 Lifehacks verraten",
  "🎨 Kunst Speedrun",
  "🚀 Cosplay Explosion",
  "🛍️ Mega Shopping Tipps",
  "🌌 Sterne beobachten Vlog",
];

let currentIndex = 0;

function updateIdea() {
  currentIndex = (currentIndex + 1) % ideas.length;
  const ideaText = document.getElementById('ideaText');

  ideaText.classList.add('fade');

  setTimeout(() => {
    ideaText.innerText = ideas[currentIndex];
    ideaText.classList.remove('fade');
  }, 500);
}

setInterval(updateIdea, 5000);

// Background Stars
const starsCanvas = document.getElementById('stars');
const starsCtx = starsCanvas.getContext('2d');
starsCanvas.width = window.innerWidth;
starsCanvas.height = window.innerHeight;

function drawStars() {
  starsCtx.fillStyle = '#000';
  starsCtx.fillRect(0, 0, starsCanvas.width, starsCanvas.height);
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * starsCanvas.width;
    const y = Math.random() * starsCanvas.height;
    const size = Math.random() * 2;
    starsCtx.fillStyle = 'white';
    starsCtx.beginPath();
    starsCtx.arc(x, y, size, 0, Math.PI * 2);
    starsCtx.fill();
  }
}
setInterval(drawStars, 1000);

// Meteor Shower
const meteorsCanvas = document.getElementById('meteors');
const meteorsCtx = meteorsCanvas.getContext('2d');
meteorsCanvas.width = window.innerWidth;
meteorsCanvas.height = window.innerHeight;

function createMeteor() {
  const x = Math.random() * meteorsCanvas.width;
  const y = 0;
  const length = Math.random() * 80 + 30;
  meteorsCtx.strokeStyle = 'rgba(255,255,255,0.7)';
  meteorsCtx.lineWidth = 2;
  meteorsCtx.beginPath();
  meteorsCtx.moveTo(x, y);
  meteorsCtx.lineTo(x - length, y + length);
  meteorsCtx.stroke();
}
setInterval(createMeteor, 300);

// Laser Strikes
const lasersCanvas = document.getElementById('lasers');
const lasersCtx = lasersCanvas.getContext('2d');
lasersCanvas.width = window.innerWidth;
lasersCanvas.height = window.innerHeight;

function shootLaser() {
  const x = Math.random() * lasersCanvas.width;
  const y = Math.random() * lasersCanvas.height;
  lasersCtx.strokeStyle = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
  lasersCtx.lineWidth = 3;
  lasersCtx.beginPath();
  lasersCtx.moveTo(x, y);
  lasersCtx.lineTo(x + (Math.random() * 100 - 50), y - 300);
  lasersCtx.stroke();
}
setInterval(shootLaser, 500);

// Resize Canvases
window.addEventListener('resize', () => {
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;
  meteorsCanvas.width = window.innerWidth;
  meteorsCanvas.height = window.innerHeight;
  lasersCanvas.width = window.innerWidth;
  lasersCanvas.height = window.innerHeight;
});
