let captcha = document.querySelector('.auth__form-captcha')
let fields = document.querySelectorAll('.auth__form--input')
let blueBtn = document.querySelector('.auths__btn-blue')
// hidden inputs
let password = document.querySelector('.auth__password')
let repeatPassword = document.querySelector('.auth__repeatPassword')
let mail = document.querySelector('.auth__mail')
let place = document.querySelector('.auth__place')
let image = document.querySelector('.auth__form--bg')

let blur = document.querySelector('.auth__form--blur')

password.style = "display:none"
repeatPassword.style = "display:none"
mail.style = "display:none"
place.style = "display:none"

function enterPassword(el)
{
  console.log(el);
  captcha.style = "display:none"
  password.style = "display:block"
  repeatPassword.style = "display:block"
  mail.style = "display:block"
  fields.forEach(function changeMargin(field){
    field.style = "margin-bottom: 10px"
  })
  el.textContent = "Зарегистрироваться"
  blueBtn.style = "margin-top: var(--tiny-offset)"
  image.style = "display:none"
  place.style = "display:block; margin-bottom: var(--tiny-offset)"
  
  blur.style = "padding-top: var(--small-offset); background: var(--white-color)"
}