"use strict";
import { animate } from "https://cdn.skypack.dev/motion";

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => link.addEventListener("click", scrollToSection));

window.addEventListener("load", function () {
  animateOnLoad();
});

let slides = "slide1";
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    // Close any open collapsibles
    let openCollapsible = document.querySelector(".collapsible.active");
    if (openCollapsible && openCollapsible !== this) {
      openCollapsible.classList.remove("active");
      openCollapsible.nextElementSibling.style.maxHeight = null;
    }

    // Toggle the clicked collapsible
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const slideButtons = document.querySelectorAll("ol li a");
slideButtons.forEach((slide) => slide.addEventListener("click", chooseSlide));

function animateOnLoad() {
  document.querySelectorAll(".carousel__navigation-button.chosenslide.dot").forEach(function (dotButton) {
    animate(dotButton, { y: -10 }, { duration: 0.5, easing: "ease-out", direction: "alternate", repeat: "Infinity" });
  });
}

function chooseSlide() {
  console.log(slides);
  slides = this.dataset.category;

  document.querySelector(".chosenslide").classList.remove("chosenslide");

  document.querySelectorAll(".carousel__navigation-button.dot").forEach(function (dotButton) {
    dotButton.classList.remove("dot");
    animate(dotButton, { y: 0 });
  });

  this.classList.add("chosenslide");
  this.classList.add("dot");
  animate(".dot", { y: 0 });
  console.log("removed animation");
  animate(".dot", { y: -10 }, { duration: 0.5, easing: "ease-out", direction: "alternate", repeat: "Infinity" });
}

function scrollToSection(event) {
  event.preventDefault(); // prevent default behavior of clicking on a link

  const targetId = event.target.getAttribute("href"); // get the href value of the clicked link
  const targetElement = document.querySelector(targetId); // get the target element to scroll to

  targetElement.scrollIntoView({ behavior: "smooth" }); // scroll smoothly to the target element
}
