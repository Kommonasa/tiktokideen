const ideas = [
  "🔥 Extreme Tanz-Challenge!",
  "🎭 Verkleidung in 5 Sekunden!",
  "💥 Glow-Up: schlimm ➔ schön!",
  "🎮 Gaming Rage Clips!",
  "🍔 FastFood Battle!",
  "🎤 Verrückte Karaoke Session!",
  "🐶 Tier-Reaction Video!",
  "🎬 Film nachspielen!",
  "🛍️ Einkauf Haul verrückt gemacht!",
  "👑 Prinzessin für einen Tag",
  "🎯 1 Tag alles blind machen!",
  "🚀 Lifehack Mission Impossible",
  "🌈 Outfit in 60 Sekunden wechseln!",
  "😱 Pranks in der Öffentlichkeit!",
  "💡 TikTok Hacks testen!",
  "🔥 Sport-Move Nachstellen!",
  "🎨 Graffiti Live malen!",
  "🎤 Beatbox Battle starten!",
  "🎯 Zielwerfen Challenge!",
  "🧠 Schnellraten Quiz!"
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

// Button Click
document.getElementById('generateButton').addEventListener('click', () => {
  updateIdea();
});

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
setInterval(createMeteor, 500);

window.addEventListener('resize', () => {
  meteorsCanvas.width = window.innerWidth;
  meteorsCanvas.height = window.innerHeight;
});
