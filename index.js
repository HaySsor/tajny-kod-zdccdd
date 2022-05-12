import './style.css';

const display = document.querySelector('.display')
const reset = document.querySelector('.keyboard__button--reset')
const buttons = document.querySelectorAll('.keyboard__button')
const save = document.querySelector('.keyboard__button--save')

let code = []


function takeCode(){
  buttons.forEach(button=>{
    button.addEventListener('click',({target:{dataset:{value}}})=>{
      display.textContent +="*"
      if(value < 10){ 
        code.push(value)
      }else{
        return
      }
    })
  })
}
takeCode()

function resetCode(){
  display.textContent = ''
  code = []
}

function displayCode(){
   display.textContent = (code.join('')*1)
}
 

reset.addEventListener('click',resetCode)
save.addEventListener('click',displayCode)