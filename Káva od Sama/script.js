// navbar - hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// hide navbar
const navbar = document.querySelector(".navbar");

const mapZoom = (entries) => {
    entries.forEach(e => {
        navbar.classList.toggle("hide", e.isIntersecting);
})};

const observer = new IntersectionObserver(mapZoom);

observer.observe(document.querySelector("#menu"));