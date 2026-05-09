const btn = document.getElementById("revealBtn");
const message = document.getElementById("hiddenMessage");
const bgm = document.getElementById("bgm");
const heartContainer = document.getElementById("heart-container");

/* PASSWORD LOGIC */

const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("passwordInput");
const loginScreen = document.getElementById("loginScreen");
const mainPage = document.getElementById("mainPage");
const hintText = document.getElementById("hintText");

const correctPassword = "rajiandram"; // CHANGE THIS

let attempts = 0;

loginBtn.addEventListener("click", checkPassword);

passwordInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});

function checkPassword() {
  const entered = passwordInput.value;

  if (entered === correctPassword) {
    loginScreen.style.display = "none";
    mainPage.classList.remove("hidden-page");
    mainPage.classList.add("show-page");
  } else {
    attempts++;

    passwordInput.value = "";

    if (attempts === 1) {
      hintText.innerText = "come on... you can do it 😌";
    } 
    else if (attempts === 2) {
      hintText.innerText = "text Ram now to know 😉";
    } 
    else {
      hintText.innerText = "still wrong 😂";
    }
  }
}

/* SURPRISE BUTTON */

btn.addEventListener("click", () => {

  const introItems = document.querySelectorAll(".intro");

  introItems.forEach(item => {
    item.style.display = "none";
  });

  btn.style.display = "none";

  message.classList.add("show");

  bgm.play().catch(e => 
    console.log("Audio waiting for user interaction")
  );

  createHeart();

  setInterval(createHeart, 250);
});

/* HEARTS */

function createHeart() {

  const heart = document.createElement("div");

  heart.classList.add("heart");

  const emojis = ["❤️", "💖", "✨", "🫧", "💙", "🌸"];

  heart.innerText =
    emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  heart.style.animationDuration =
    Math.random() * 3 + 3 + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
