///carrousel
const slider = document.querySelector(".gallery");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 1;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

//video spil stop

window.onscroll = function () {
  var blooper = document.getElementById("myVideo");
  //tjekke på med if sætning, er du synlig så afspil video, er du ikke synlig så pause video
  // de 250 fortæller af den bare skal være inden for 250 px
  if (
    blooper.getBoundingClientRect().bottom < 250 ||
    blooper.getBoundingClientRect().top > 250
  )
    blooper.pause();
  else blooper.play();
};
