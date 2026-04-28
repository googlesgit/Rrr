const btn = document.getElementById("revealBtn");
const message = document.getElementById("hiddenMessage");

btn.addEventListener("click", () => {
  message.classList.add("show");
  btn.style.display = "none";
});
