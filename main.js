/* ~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~ */
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")
const hamIcon = document.getElementById("ham-icon")
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamIcon.classList.toggle("ri-close-large-line")
})
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamIcon.classList.toggle("ri-close-large-line")  
    })
})
/* ~~~~~~~~~~~ Swiper ~~~~~~~~~~~~~~~ */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });
  /* ~~~~~~~~~~~ Scroll Up ~~~~~~~~~~~~~~~ */
  const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")
    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    } else {
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4") 
    }
  }
  window.addEventListener("scroll", scrollUp)
  /* ~~~~~~~~~~~~ Scroll Header ~~~~~~~~~~~~~~~ */
  const scrollHeader = () => {
    const headerNav = document.getElementById("navbar")
    if(this.scrollY >= 250) {
        headerNav.classList.add("border-b-4", "border-yellow-500")
    } else {
        headerNav.classList.remove("border-b-4", "border-yellow-500") 
    }
  }
  window.addEventListener("scroll", scrollHeader)

  /* ~~~~~~~~~~~~ Active Link ~~~~~~~~~~~~~~~~ */
  const activeLink = () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")
    let current = "home"
    sections.forEach(section => {
        const sectionTop = section.offsetTop
        if(scrollY >= sectionTop - 60) {
            current = section.getAttribute("id")
        }
    })
    navLinks.forEach(item => {
        item.classList.remove("active")
        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })
  }
  window.addEventListener("scroll", activeLink)

  /* ~~~~~~~~~~~~ Scroll Reveal ~~~~~~~~~~~~ */
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300
  })
  sr.reveal('.home-data, .section-title')
  sr.reveal('.review-container', {origin: "bottom"})
  sr.reveal('.home-image', {delay: 500, scale: 0.5})
  sr.reveal('.service-box, .popular_card', {interval: 100})
  sr.reveal('.leaf-right', {delay: 1000, origin: "right"})
  sr.reveal('.leaf-left', {delay: 1000, origin: "left"})
  sr.reveal('.about-item1-image, .about-item2-content', {origin: "right"})
  sr.reveal('.about-item2-image, .about-item1-content', {origin: "left"})
  sr.reveal('.slide-bottom', {origin: "bottom"})
  sr.reveal('.slide-bottom-delay-700', {delay: 700, origin: "bottom"})
 