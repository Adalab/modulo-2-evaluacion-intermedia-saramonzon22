'use strict'

// establecer constantes
// qué va a hacer cada elemento
// métodos a usar a priori: get random, if/else, evento sobre boton

const btn = document.querySelector('.try');
const inputNumber = document.querySelector('.input-number');
const clue = document.querySelector('.clue-js');
const numberTry = document.querySelector('.try-number');



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


function guess (event){
    event.preventDefault();
    const whatNumber = inputNumber.value;
    const randomNumber = getRandomNumber(100);
    if (whatNumber === randomNumber ){
        clue.innerHTML = '¡¡¡Has ganado campeona!!!'
    }
    else if (whatNumber < randomNumber){
        clue.innerHTML = 'Pista: Demasiado bajo.'
    }
    else if (whatNumber > randomNumber){
        clue.innerHTML = 'Pista: Demasiado alto.'
    }

};



btn.addEventListener('click', guess);
console.log(getRandomNumber(100));