var lightMode = true
const toggleTheme = () => {
  if (lightMode) {
    document.body.classList.add('dark')
    document.getElementById('themeToggleBtn').classList.add('dark')
    document.getElementById('themeToggleBtn').classList.remove('light')
  } else {
    document.body.classList.remove('dark')
    document.getElementById('themeToggleBtn').classList.remove('dark')
    document.getElementById('themeToggleBtn').classList.add('light')
  }
  lightMode = !lightMode
  localStorage.setItem('theme', lightMode ? 'light' : 'dark')
}
const removeElementFocus = (elementID) => {
  document.getElementById(elementID).classList.remove('focus')
}

const focusElement = (elementID) => {
  console.log(elementID)
  document.getElementById(elementID).classList.add('focus')
  setTimeout(() => removeElementFocus(elementID), 2000)
}
window.onscroll = () => {
  navFunction()
}
window.onload = () => {
  const prevTheme = localStorage.getItem('theme')

  if (prevTheme === 'dark') {
    toggleTheme()
  }

  setTimeout(() => {
    document.getElementById('preloader').style.opacity = 0;
    document.getElementById('preloader').style.transform = "scale(3)";
    document.getElementById('preloader').style.zIndex = -5;
    document.getElementById('app').style.opacity = 1;

  }, 2000)
}

var prevScrollpos = window.pageYOffset
window.onscroll = () => {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('header').style.top = '0'
  } else {
    document.getElementById('header').style.top = '-70px'
  }
  prevScrollpos = currentScrollPos
}