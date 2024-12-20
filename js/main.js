'use strict'


/* REPASO INTERMEDIO

apunte:

< less than
> greater than mayor que
<= less than or equal
>= greater than or equal


PASOS:
 
1.crear maquetacion HTML: 
   --select con 3 opciones
   -- boton
   --espacio para el resultado 

2.llamar a los elementos al js/crear un evento en el boton click
3.generar numero aleatorio
4.Comparar jugadas
5. se actualiza la puntuacion
El juego se detiene despues de realizar 10 movimientos
*/

const selectElement = document.querySelector('.js-select');
const btnPlay = document.querySelector('.js-btn');
const h3Result = document.querySelector('.js-result');


//generador de numero aleatorio.
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

//funcion para generar movimiento aleatorio para Computadora:
/* si el número aleatorio generado en el paso anterior es menor o igual que 3 el movimiento es
piedra
si el número aleatorio generado es mayor o igual que 7 el movimiento es papel
y sino, el movimiento generado es tijera */
function computerGame(){
    const numRamdom = getRandomNumber(10);
    if(numRamdom <= 3){
        return 'piedra';

    }else if(numRamdom >= 7){
        return 'papel';

    }else {
        return 'tijera';
    };  
};

//Recoger el valor de la Usuaria, crear const 
const userGame = selectElement.value;
const computerMove = computerGame();

//funcion para comparar jugada
function compareResult (userGame, computerMove){
    if(userGame === computerGame){
        return 'Empate'
    }else if(
        (userGame === 'piedra' && computerMove === 'tijera') ||
        (userGame === 'papel' && computerMove === 'piedra') ||
        (userGame === 'tijera' && computerMove === 'papel')
    ){
        return 'Has ganado!';
    }else{
        
        return 'Has perdido!'
    }
};  

//comparar resultados creando otra const ?
const resultado = compareResult(userGame, computerMove);
 
//iniciar el juego
function startGame(event){
    event.preventDeafult();
    if(){

    };

};





    //agregar evento al boton

btnPlay.addEventListener('click', startGame);

//recoger el valor de la usuaria, segundo paso saber el valor del ordenador 42