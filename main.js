var lightMode = true
const toggleTheme = () => {
  if (lightMode) {
    document.body.classList.add('dark')
    document.getElementById('themeToggleBtn').innerText = 'Light'
  } else {
    document.body.classList.remove('dark')
    document.getElementById('themeToggleBtn').innerText = 'Dark'
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
