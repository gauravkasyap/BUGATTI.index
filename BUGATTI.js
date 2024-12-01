function closepreloader() {
  document.getElementById("preloader").style.display = "none";
}
window.addEventListener("load", function () {
  setTimeout(closepreloader, 1000);
});

//nav_manu_cross hidden and visible
const nav_manu_cross = document.getElementById("nav_manu_cross");
const nav_manu_V = document.getElementById("nav_manu");

let ishiden = false;

nav_manu_V.addEventListener("click", () => {
  if (ishiden) {
    nav_manu_cross.style.visibility = "hidden";
  } else {
    nav_manu_cross.style.visibility = "visible";
  }
  ishiden = !ishiden;
});

//nav_manu_V visible and hidden
const nav_manu_V1 = document.getElementById("nav_manu_V");
const nav_manu_V2 = document.getElementById("nav_manu");

let isvisible = false;

nav_manu_V2.addEventListener("click", () => {
  if (isvisible) {
    nav_manu_V.style.visibility = "visible";
  } else {
    nav_manu_V.style.visibility = "hidden";
  }
  isvisible = !isvisible;
});

// visibal style

const visibal = document.getElementById("visibal");
const visiball = document.getElementById("visiball");
const stylea = document.getElementById("navdowndetaibutton");

let isvisibal = false;

stylea.addEventListener("click", () => {
  if (isvisibal) {
    visibal.style.visibility = "visible";
    visiball.style.visibility = "visible";
  } else {
    visibal.style.visibility = "hidden";
    visiball.style.visibility = "hidden";
  }
  isvisibal = !isvisibal;
});

// button rotate

const button = document.getElementById("button");
const style = document.getElementById("style");

let isRotate = false;

style.addEventListener("click", () => {
  if (isRotate) {
    style.style.transform = "rotateY(180deg)";
  } else {
    style.style.transform = "rotateZ(180deg)";
  }
  isRotate = !isRotate; // Toggle state
});

//navdown-detais height incr button

const navdowndetais = document.getElementById("navdowndetais");
const navdowndetaisbutton = document.getElementById("navdowndetaibutton");

let isExpanded = false;

navdowndetaisbutton.addEventListener("click", () => {
  if (isExpanded) {
    navdowndetais.style.height = "5vh";
  } else {
    navdowndetais.style.height = "68vh";
  }
  isExpanded = !isExpanded;
});
//nav_manu_details up and down
const nav_manu_details = document.getElementById("nav_manu_details");
const nav_manu = document.getElementById("nav_manu");

let isExpande = false;

nav_manu.addEventListener("click", () => {
  if (isExpande) {
    nav_manu_details.style.height = "0vh";
  } else {
    nav_manu_details.style.height = "100vh";
  }
  isExpande = !isExpande;
});

gsap.to("#delails", {
  y: 180,
  opacity: 0,
  duration: 1,

  // stagger: 0.8,
  scrollTrigger: {
    trigger: "#delails",
    scroller: "body",
    //markers: true,
    start: "top 8%",
    end: "top 15%",
    scrub: 1,
  },
});

gsap.to("#vido1", {
  x: -180,
  opacity: 0,
  duration: 5,
  scale: 1,

  // stagger: 0.8,
  scrollTrigger: {
    trigger: "#vido1",
    scroller: "body",
    // markers: true,
    start: "top -200%",
    end: "top 50%",
    scrub: 3,
  },
});

gsap.to("#heeeeio", {
  x: -0,
  visibility: "visible",
  duration: 3,
  scrollTrigger: {
    trigger: "#heeeeio",
    scroller: "body",
    //markers: true,
    start: "top -630%",
    end: "top 100%",
    scrub: 1,
  },
});

// smooth scroll

const slider = document.querySelector(".slide");
const sections = gsap.utils.toArray(".slide section");
// const fishies = gsap.utils.toArray(".slide2_details img");

let tl = gsap.timeline({
  defaults: {
    ease: "none",
  },
  scrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 2,
    end: () => "+=" + slider.offsetWidth,
  },
});

tl.to(slider, {
  xPercent: -66.666666,
});

const lenis = new lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
