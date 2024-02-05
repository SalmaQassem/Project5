const playButton = document.querySelector(".play-button");
const homePage = document.querySelector(".homepage");
const gamePage = document.querySelector(".game");
const gameImages = document.querySelectorAll(".game-images .img-container");
const infoIcon = document.querySelector(".bottom.icon");
const scoreElement = document.querySelector(".scoreWrapper .score");
const successModal = document.querySelector(".success-card");
const overlay = document.querySelector(".overlay");
let counter = 0;
const animateInfo = () => {
  infoIcon.classList.add("show");
  infoIcon.addEventListener("animationend", () => {
    setTimeout(() => {
      infoIcon.classList.remove("show");
      infoIcon.classList.add("hide");
    }, 1000);
  });
};
playButton.addEventListener("click", () => {
  document.querySelector("#start-audio").play();
  homePage.classList.add("hide");
  homePage.addEventListener("animationend", () => {
    homePage.classList.remove("hide");
    homePage.style.visibility = "hidden";
    gamePage.style.visibility = "visible";
    animateInfo();
  });
});
gameImages.forEach((image) => {
  image.addEventListener("click", () => {
    document.querySelector(`audio[id="${image.dataset.id}"]`).play();
    image.classList.add("clicked");
    image.classList.add("colored");
    image.addEventListener("animationend", () => {
      image.classList.remove("clicked");
    });
    const text = image.querySelector(".card-text");
    text.classList.add("show");
    text.addEventListener("animationend", () => {
      text.classList.remove("show");
    });
    counter += 1;
    scoreElement.textContent = `${counter}/${gameImages.length}`;
    document
      .querySelector(":root")
      .style.setProperty("--width", `${(100 / gameImages.length) * counter}%`);
    if (counter === gameImages.length) {
      const text = document.querySelector(".text-card .score-text");
      text.textContent = `${counter}/${gameImages.length}`;
      successModal.classList.add("show");
      overlay.classList.add("show");
    }
  });
});
infoIcon.addEventListener("click", () => {
  infoIcon.classList.remove("hide");
  animateInfo();
});
/*window.addEventListener("click", (e) => {
  if (
    !successModal.contains(e.target) &&
    successModal.classList.contains("show")
  ) {
    successModal.classList.remove("show");
    setTimeout(() => {
      overlay.classList.remove("show");
    }, 400);
  }
});*/
document.querySelector(".closeModal").addEventListener("click", () => {
  successModal.classList.remove("show");
  setTimeout(() => {
    overlay.classList.remove("show");
  }, 400);
});
