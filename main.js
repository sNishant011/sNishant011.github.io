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
