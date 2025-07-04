const menuBtn = document.getElementById("menu");
const mobileNav = document.querySelector(".mobile-navigation");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  if (mobileNav.classList.contains("active")) {
    menuBtn.src = "assets/mobile/icon-cross.svg";
  } else {
    menuBtn.src = "assets/mobile/icon-hamburger.svg";
  }
});

const slides = [
  {
    text: "Brand naming & guidelines",
    images: {
      mobile: "assets/mobile/image-slide-1.jpg",
      tablet: "assets/tablet/image-slide-1.jpg",
      desktop: "assets/desktop/image-slide-1.jpg",
    },
  },
  {
    text: "Brand identity & merchandise",
    images: {
      mobile: "assets/mobile/image-slide-2.jpg",
      tablet: "assets/tablet/image-slide-2.jpg",
      desktop: "assets/desktop/image-slide-2.jpg",
    },
  },
  {
    text: "Brand identity & web design",
    images: {
      mobile: "assets/mobile/image-slide-3.jpg",
      tablet: "assets/tablet/image-slide-3.jpg",
      desktop: "assets/desktop/image-slide-3.jpg",
    },
  },
];

let currentSlide = 0;

const h6Text = document.querySelector(".product-roadmap-slider h6");
const picture = document.querySelector(".product-roadmap-box-image");
const img = document.querySelector(".slider-image");
const prevBtn = document.querySelector(".slider-buttons img:first-child");
const nextBtn = document.querySelector(".slider-buttons img:last-child");

function updateSlide() {
  const slide = slides[currentSlide];
  h6Text.textContent = slide.text;
  picture.innerHTML = `
    <source srcset="${slide.images.desktop}" media="(min-width: 1024px)" />
    <source srcset="${slide.images.tablet}" media="(min-width: 769px)" />
    <source srcset="${slide.images.mobile}" media="(max-width: 768px)" />
    <img class="slider-image" src="${slide.images.mobile}" alt="slide image" />
  `;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

document.addEventListener("DOMContentLoaded", () => {
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});
