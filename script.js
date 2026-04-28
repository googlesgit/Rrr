const btn = document.getElementById("revealBtn");
const message = document.getElementById("hiddenMessage");
const bgm = document.getElementById("bgm");

// Play music after first interaction
document.body.addEventListener("click", () => {
  if (bgm.paused) {
    bgm.play();
  }
}, { once: true });

btn.addEventListener("click", () => {
  message.classList.add("show");
  btn.style.display = "none";
});
