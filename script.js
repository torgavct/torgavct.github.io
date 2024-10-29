function myFunction(x) {
  const offscreenwrapper = document.querySelector(".offscreen-wrapper");
  const herowrapper = document.querySelector(".hero-wrapper");
  const navbar = document.querySelector(".navbar");
  offscreenwrapper.classList.toggle("active");
  herowrapper.classList.toggle("active");
  navbar.classList.toggle("active");
}
