const ideas = [
  "🔥 Neue Tanz-Challenge starten",
  "🎭 Lustige Mini-Sketche filmen",
  "🎶 Lip-Sync Battle mit Freunden",
  "📚 Storytime spannend erzählen",
  "🌟 Glow-Up Transformation zeigen",
  "🐶 Haustier-Challenges",
  "🍔 Geiles Food-Review",
  "🎮 Gaming Highlight Clips",
  "🎤 Karaoke Performance",
  "🏋️‍♂️ Fitness-Tutorial posten",
  "🧠 Lifehacks verraten",
  "🎨 Schnelle Kunstwerke erstellen",
  "🎬 Filmparodien drehen",
  "😎 Streetstyle vorstellen",
  "🚗 Auto-Innenraum zeigen",
  "🍃 Naturaufnahmen bearbeiten",
  "📈 Business-Hacks teilen",
  "🛍️ Schnäppchen Tipps",
  "🏝️ Urlaubsvibes verbreiten",
  "🎲 Challenge-Wheel drehen",
  "🕺 Eltern zum Tanzen bringen",
  "🧩 DIY-Kunstwerke",
  "🔮 Wahrsager-Video machen",
  "🐣 Tierbabys filmen",
  "🎁 Geschenkideen verraten",
  "🎭 Cosplay präsentieren",
  "🎯 Reaktions-Videos",
  "🖌️ Speed Painting",
  "📷 Instagram Reels Hacks",
  "🎧 Sound-Experimente",
  "🎸 Mini-Konzert",
  "🏆 Sportliche Bestleistungen",
  "🧘‍♂️ Yoga-Challenges",
  "👗 Jahreszeiten-Outfits",
  "🛠️ Gadget Lifehacks",
  "🛏️ Produktive Morgenroutinen",
  "💡 Mindset und Motivation",
  "🧙‍♂️ Zaubertricks zeigen",
  "🎂 Birthday-Pranks filmen",
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

// Hintergrund Partikel Effekt
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.02;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < 200; i++) {
    particlesArray.push(new Particle());
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
}

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
