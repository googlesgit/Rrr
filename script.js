const btn = document.getElementById("revealBtn");
const message = document.getElementById("hiddenMessage");
const bgm = document.getElementById("bgm");
const heartContainer = document.getElementById("heart-container");

btn.addEventListener("click", () => {
  // 1. Reveal hidden message
  message.classList.add("show");
  
  // 2. Hide the button
  btn.style.display = "none";
  
  // 3. Play Music
  bgm.play().catch(error => console.log("Audio waiting for user..."));

  // 4. Start the heart/bubble effect
  // We call it once immediately, then set an interval
  createHeart();
  setInterval(createHeart, 250); 
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  
  // Array of things to float up
  const items = ["❤️", "💖", "✨", "🫧", "💙"];
  heart.innerText = items[Math.floor(Math.random() * items.length)];
  
  // Random horizontal position (0 to 100% of screen width)
  heart.style.left = Math.random() * 100 + "vw";
  
  // Random size
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  
  // Random speed (between 3 and 6 seconds)
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  
  // Add to the container
  heartContainer.appendChild(heart);
  
  // Clean up after it floats away
  setTimeout(() => {
    heart.remove();
  }, 6000);
}
