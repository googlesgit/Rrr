const btn = document.getElementById("revealBtn");
const message = document.getElementById("hiddenMessage");
const bgm = document.getElementById("bgm");
const heartContainer = document.getElementById("heart-container");

btn.addEventListener("click", () => {
  // 1. Reveal message & Play Music
  message.classList.add("show");
  btn.style.display = "none";
  bgm.play();

  // 2. Start creating bubbles/hearts
  setInterval(createHeart, 300);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  
  // Randomly pick a heart or bubble emoji
  const shapes = ["❤️", "💖", "✨", "🌸", "🫧"];
  heart.innerText = shapes[Math.floor(Math.random() * shapes.length)];
  
  // Random position and size
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5 seconds
  
  heartContainer.appendChild(heart);
  
  // Remove from DOM after animation finishes to keep it fast
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
