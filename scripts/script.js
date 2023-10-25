

function openMenu() {
  let menu = document.querySelector('div#change-theme-mobile')
  let icon = document.querySelector('img#menu-icon')

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