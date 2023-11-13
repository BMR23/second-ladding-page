const buttonIntro = document.querySelector('#button-intro');
const content = document.querySelector('#content-all')
const bgColor = document.querySelector('#bg-color')
const arrayText = document.querySelectorAll('.toggle-color')


const toggleClass = (element, classe) => {
  element.classList.toggle(classe)
}

buttonIntro.addEventListener('mouseover', (event) => {
  if (bgColor.classList.contains('color-content-hover')) return null

  toggleClass(bgColor, 'bg-color');
  toggleClass(bgColor, 'color-content-hover');

  arrayText.forEach(element => {
    toggleClass(element, 'color-white')
  });
})

buttonIntro.addEventListener('mouseout', (event) => { 
  if (!bgColor.classList.contains('color-content-hover')) return null

  const removeClass = () => {
    toggleClass(bgColor, 'bg-color');
    toggleClass(bgColor, 'color-content-hover');
    arrayText.forEach(element => {
      toggleClass(element, 'color-white')
    });
  }
  setTimeout(removeClass, 200)
})
