let startSection = document.querySelector('.start')
const buttonPlay = document.querySelector('.play');



function changeScreen() {
  startSection.classList.add('display-none')
}

buttonPlay.addEventListener('click', changeScreen )



