const btn = document.getElementById("revealBtn");
const message = document.getElementById("hiddenMessage");
const bgm = document.getElementById("bgm");
const heartContainer = document.getElementById("heart-container");

btn.addEventListener("click", () => {
  message.classList.add("show");
  btn.style.display = "none";
  bgm.play().catch(e => console.log("Music ready"));

  // Start the bubbles
  setInterval(createHeart, 200); 
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  
  const emojis = ["❤️", "💖", "🫧", "✨", "💙"];
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  
  heartContainer.appendChild(heart);
  
  setTimeout(() => { heart.remove(); }, 5000);
}
