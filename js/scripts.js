const menuBtn = document.querySelector(".menu-btn")
const headerNav = document.querySelector(".site-header__nav")
const headerRight = document.querySelector(".site-header__right-box")

let menuOpen = false

menuBtn.addEventListener("click", () => {
  if(!menuOpen) {
    menuBtn.classList.add("open")
    headerNav.classList.add("site-header__nav--open")
    headerRight.classList.add("site-header__right-box--open")
    menuOpen = true
  } else {
    menuBtn.classList.remove("open")
    headerNav.classList.remove("site-header__nav--open")
    headerRight.classList.remove("site-header__right-box--open")
    menuOpen = false
  }
})