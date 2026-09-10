const revealButton = document.getElementById("revealButton");
const title = document.querySelector(".title h1");
const scrollText = document.querySelector(".title p");

revealButton.addEventListener("click", revealTitle);

function revealTitle() {
  title.classList.add("revealed");
  scrollText.classList.add("revealed");

  revealButton.style.opacity = "0";
  revealButton.style.pointerEvents = "none";
}

const infoElements = document.querySelectorAll(
  ".info, .contact"
);

const interests = document.querySelector(".interests");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY > windowHeight * 0.45) {
    infoElements.forEach(element => {
      element.classList.add("visible");
    });
  } else {
    infoElements.forEach(element => {
      element.classList.remove("visible");
    });
  }

  if (scrollY > windowHeight * 1.55) {
    interests.classList.add("visible");
  } else {
    interests.classList.remove("visible");
  }

});