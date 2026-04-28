const btn = document.getElementById("revealBtn");
const message = document.getElementById("hiddenMessage");
const bgm = document.getElementById("bgm");
const heartContainer = document.getElementById("heart-container");

btn.addEventListener("click", () => {
  // 1. Hide the intro elements and the button
  const introItems = document.querySelectorAll(".intro");
  introItems.forEach(item => {
    item.style.display = "none";
  });
  btn.style.display = "none";

  // 2. Reveal the secret message
  message.classList.add("show");
  
  // 3. Play music (Browsers allow it now because of the button click)
  bgm.play().catch(e => console.log("Audio waiting for user interaction"));

  // 4. Start spawning the love bubbles
  createHeart(); // Create one immediately
  setInterval(createHeart, 250); 
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  
  // Mix of different shapes
  const emojis = ["❤️", "💖", "✨", "🫧", "💙", "🌸"];
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  
  // Random horizontal position
  heart.style.left = Math.random() * 100 + "vw";
  
  // Random sizing
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  
  // Random speed (between 3 and 6 seconds)
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  
  heartContainer.appendChild(heart);
  
  // Cleanup heart after animation finishes to keep performance high
  setTimeout(() => {
    heart.remove();
  }, 6000);
}
