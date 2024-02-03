const playButton = document.querySelector(".play-button");
const homePage = document.querySelector(".homepage");
const gamePage = document.querySelector(".game");
const gameImages = document.querySelectorAll(".game-images .img-container ");
const infoIcon = document.querySelector(".bottom.icon");

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
  });
});
infoIcon.addEventListener("click", () => {
  infoIcon.classList.remove("hide");
  animateInfo();
});
