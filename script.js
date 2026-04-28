const btn = document.getElementById("revealBtn");
const message = document.getElementById("hiddenMessage");
const bgm = document.getElementById("bgm");

btn.addEventListener("click", () => {
  // 1. Reveal the message
  message.classList.add("show");
  
  // 2. Hide the button
  btn.style.display = "none";
  
  // 3. Play the music
  // We trigger it here because a button click is a "strong" user interaction
  bgm.play().catch(error => {
    console.log("Autoplay was prevented, but usually works on click:", error);
  });
});
