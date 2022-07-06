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

let randomNumber = getRandomNumber(100);
    console.log(randomNumber);


function guess (event){
    event.preventDefault();
    const whatNumber = inputNumber.value;
    
    if (whatNumber == randomNumber ){
        clue.innerHTML = '¡¡¡Has ganado campeona!!!'
    }
    else if (whatNumber < randomNumber){
        clue.innerHTML = 'Pista: Demasiado bajo.'
    }
    else if (whatNumber > randomNumber){
        clue.innerHTML = 'Pista: Demasiado alto.'
    }
    if (whatNumber > 100){
        clue.innerHTML = 'El número debe estar entre 1 y 100.'
    }
    if (whatNumber < 0){
        clue.innerHTML = 'El número debe estar entre 1 y 100.'
    }

};

let contar = 0;
btn.onclick = function(){
    contar++;
    numberTry.innerHTML = contar;
}


btn.addEventListener('click', guess);
