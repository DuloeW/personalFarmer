let tombolMenu = document.querySelector('.tombol-menu');
let nav = document.querySelector('nav')
let ul = document.querySelector('nav ul')
let insdustri = document.querySelector(".penjel-us")
let maknaLogo = document.querySelector('.makna-logo')
let kotakPenjel = document.querySelector('.container-about')
let kotakPenjelDua = document.querySelector('.container-about2')


tombolMenu.onclick = () => {
  tombolMenu.classList.toggle('active')
  nav.classList.toggle('active')
  ul.classList.toggle('active')
}

insdustri.onclick = () => {
  insdustri.classList.toggle('active')
  kotakPenjel.classList.toggle('active')
}

maknaLogo.onclick = () => {
  maknaLogo.classList.toggle('active')
  kotakPenjelDua.classList.toggle('active')
}
