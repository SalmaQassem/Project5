const playButton = document.querySelector(".play-button");
const homePage = document.querySelector(".homepage");
const gamePage = document.querySelector(".game");
const gameImages = document.querySelectorAll(".game-images .img-container ");
playButton.addEventListener("click", () => {
  homePage.classList.add("hide");
  homePage.addEventListener("animationend", () => {
    homePage.classList.remove("hide");
    homePage.style.visibility = "hidden";
    gamePage.style.visibility = "visible";
  });
});
gameImages.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.add("clicked");
    image.classList.add("colored");
    image.addEventListener("animationend", () => {
      image.classList.remove("clicked");
      //image.style.visibility = "hidden";
      //gamePage.style.visibility = "visible";
    });
  });
});
