"use strict";

window.addEventListener("load", windowLoad);

function windowLoad(e) {
  document.addEventListener("click", documentAction);
}

const documentAction = (e) => {
  const targetElement = e.target;
  //console.log(targetElement);
  //Works filter
  if (
    targetElement.classList.contains("filter-cards__item")
    // &&    !targetElement.classList.contains("active")
  ) {
    const activeElement = document.querySelector(`.filter-cards__item.active`);
    //console.log(activeElement);
    const elements = document.querySelectorAll(`.portfolio-box`);
    console.log(elements);
    const elementType = targetElement.dataset.filter;

    activeElement.classList.remove("active");
    targetElement.classList.add("active");

    elements.forEach((element) => {
      !elementType || element.dataset.filter === elementType
        ? (element.style.display = "block")
        : (element.style.display = "none");
    });
  }
};

//menu icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections active line
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //remove menu icon navbar when ckicked navbarlink
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//dark light mode
let darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

//Scroll Reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-container, .testimonial-wrapper, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about-img img, .filter-cards", {
  origin: "left",
});

ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});

function sendEmail() {
  const user = document.querySelector("#fullName").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;
  const emailSubject = document.querySelector("#emailSubject").value;
  const message = document
    .getElementById("message")
    .value.replace(/\./g, "")
    .replace(/\n/g, "<br />");

  let htmlBody = `
  ${message}
  <br>
  ${user}<br>
  ${mobile}
  `;
  var body = htmlBody.replace(/<br\s*\/?>/gm, "%0D%0A");
  console.log(body);
  window.open(`mailto:mprostya@gmail.com?subject=${emailSubject}&body=${body}`);
}
