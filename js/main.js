'use strict'

// establecer constantes
// qué va a hacer cada elemento
// métodos a usar a priori: get random, if/else, evento sobre boton

const btn = document.querySelector('.try');
const inputNumber = document.querySelector('.input-number');
const clue = document.querySelector('.clue-js');
const numberTry = document.querySelector('.try-number');
const reset = document.querySelector('.reset');

let contar = 0;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function userNumber(){
    userNumberInput = inputNumber.value; 
}

let randomNumber = getRandomNumber(100);
    console.log(randomNumber);


function guess (){
    
    const whatNumber = parseInt(inputNumber.value);
    
    if (isNaN(whatNumber)) {
        clue.innerHTML = 'El número debe estar entre 1 y 100.'
    }
    else if (whatNumber < 1){
        clue.innerHTML = 'Pista: El número debe estar entre 1 y 100'
    }
    else if (whatNumber > 100){
        clue.innerHTML = 'El número debe estar entre 1 y 100.'
    }
      else if (whatNumber < randomNumber){
        clue.innerHTML = 'Pista: Demasiado bajo.'
    }
    else if (whatNumber > randomNumber){
        clue.innerHTML = 'Pista: Demasiado alto.'
    }
    else if (whatNumber === ''){
        clue.innerHTML = 'Pista: Introduce un número entre 1 y 100.'
    }
    
    else if (whatNumber === randomNumber){
        clue.innerHTML = '¡¡¡Has ganado campeona!!!'}
    
    };

  
function count(){
        btn.onclick = function(){
        contar++;
        numberTry.innerHTML = contar;
    }    
}

function handleClick(event){
    event.preventDefault();
    count();
    guess();
    
}

function resetClick(){
    contar = 0;
    numberTry.innerHTML = 0;
}

reset.addEventListener('click', resetClick);
btn.addEventListener('click', handleClick);
/* btn.addEventListener('click', guess); */
