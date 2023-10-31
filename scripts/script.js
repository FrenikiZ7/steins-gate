'use strict'




function openMenu() {
  let menu = document.querySelector('div#change-theme-mobile')
  let icon = document.querySelector('img#menu-icon')
  let changeThemeMobile = document.querySelector('div#change-theme-mobile')

  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide')
    menu.classList.add('show')
    icon.src = 'steins-gate-images/menu/close_white_36dp.svg'
  } else {
    menu.classList.remove('show')
    menu.classList.add('hide')
    icon.src = 'steins-gate-images/menu/menu_white_36dp.svg'
  }
}




const containerImages = document.querySelector('#images')


const images = [
  {id: 1, 'url': 'steins-gate-images/Wallpapers/1.jpg'},
  {id: 2, 'url': 'steins-gate-images/Wallpapers/2.jpg'},
  {id: 3, 'url': 'steins-gate-images/Wallpapers/3.jpg'},
  {id: 4, 'url': 'steins-gate-images/Wallpapers/4.jpg'},
  {id: 5, 'url': 'steins-gate-images/Wallpapers/5.jpg'},
  {id: 6, 'url': 'steins-gate-images/Wallpapers/6.jpg'},
  {id: 7, 'url': 'steins-gate-images/Wallpapers/7.jpg'},
  {id: 8, 'url': 'steins-gate-images/Wallpapers/8.jpg'},
  {id: 9, 'url': 'steins-gate-images/Wallpapers/9.jpg'},
  {id: 10, 'url': 'steins-gate-images/Wallpapers/10.jpg'},
]

const loadImages = (images, containerImages) => {
 images.forEach (image => {
    containerImages.innerHTML += `
      <div class='items'>
        <img src='${image.url}'>
      </div>
      `
  })
}


loadImages(images, containerImages);


let items = document.querySelectorAll('.items')

const previousImage = () => {
  containerImages.appendChild(items[0])
  items = document.querySelectorAll('.items')
}


const nextImage = () => {
  const lastItem = items[items.length - 1]
  containerImages.insertBefore(lastItem, items[0])
  items = document.querySelectorAll('.items')
}


const next = document.querySelector('#next').addEventListener('click', nextImage)
const previous = document.querySelector('#previous').addEventListener('click', previousImage)


function changeTheme(e) {

  let body = document.querySelector('body')
  let background = document.querySelector('section.main-section')
  let titles = document.querySelectorAll('h1.titles')
  let header = document.querySelector('div#header-container')
  let newsletter = document.querySelector('div#newsletter')
  let emailNewsletter = document.querySelector('input#email-newsletter')
  let buttonNewsletter = document.querySelector('button#button-newsletter')
  let story = document.querySelector('div#story')

  let item = e.target
  console.log(item.id)

  if (item.id === 'theme-2') {

    body.style.background = '#C2C2C2'
    background.style.background = 'url("../steins-gate-images/background-2.jpg") no-repeat top center fixed'
    header.style.border = 'solid 2px white'
    newsletter.style.border = 'solid 3px white'
    emailNewsletter.style.background = 'white'
    buttonNewsletter.style.background = 'white'
    story.style.background = 'white'

    titles.forEach (title => {
      title.style.color = 'white'
    })
  } else if (item.id === 'theme-1') {

    body.style.background = '#a59c8a'
    background.style.  = 'url("../steins-gate-images/background.png") no-repeat top center fixed'
    header.style.border = 'solid 2px rgba(255, 250, 217, 0.306)'
    newsletter.style.border = 'solid 3px rgba(255, 250, 217, 0.736)'
    emailNewsletter.style.background = 'rgb(255, 250, 217)'
    buttonNewsletter.style.background = 'rgb(255, 250, 217)'
    story.style.background = 'rgb(201, 197, 171)'
    titles.forEach (title => {
      title.style.color = 'white'
    })

  }
}

const themeButtons = document.querySelector('.icons').addEventListener('click', changeTheme)
