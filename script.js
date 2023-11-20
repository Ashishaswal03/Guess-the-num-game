const randomNumber =  parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userIput=document.querySelector('#guessField');

const guessesLot=document.querySelector('.guesses');
const remainingGuesses=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')

const prevGuess=[]
let numGuess=1

let playGame=true;

if(playGame){
    submit.addEventListener('click' ,function(e){
        e.preventDefault();
       const guess=parseInt(userIput.value)
    //    console.log(guess);
       validateGuess(guess);

    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a vlid number')
    }
    else if(guess<1){
        alert('Please enter a vlid number greater than zero')


    }
    else if(guess>100){
        alert('Please enter a vlid number less than 100')


    }
    else {
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game over Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            chechGuess(guess)
        }


    }

}

function chechGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is TOO high`)
    }

}
function displayGuess(guess){
    userIput.value=''
    guessesLot.innerHTML+=`${guess} `
    numGuess++;
    remainingGuesses.innerHTML=`${11-numGuess}`
    if(remainingGuesses==0){ 
        
    }


}


function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}

function endGame(guess){

}
function newGame(guess){

}
