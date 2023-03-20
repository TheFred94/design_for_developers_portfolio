"use strict";

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
