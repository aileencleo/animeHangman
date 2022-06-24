const main            = document.getElementById("main");

const animePicture    = document.getElementById("animePicture");
const hangmanPicture  = document.getElementById("hangmanPicture");

const wordGuess       = document.getElementById("wordGuess");
const hint            = document.getElementById("hint");
const incorrectGuess  = document.getElementById("incorrectGuess");

const popUp           = document.getElementById('popUp');
const playAgain       = document.getElementById("playAgain");
const results         = document.getElementById("results");

const letter          = document.querySelectorAll(".letter"); 

const lives           = 7;
let   incorrect;
let   incorrectHolder = ``;

//player's guess word
let   guess;
let   toGuessArray;
let   toGuess;
let   animeImageSrc;
let   counter;

const popUpDelay      = 100;
let   random;

const animeObject     = JSON.parse(animeArray);

letter.forEach(l => {

    l.addEventListener('click', function (event) {

            let selected = l.innerHTML.toLowerCase();

            if(toGuess.includes(selected)){
                for(let x = 0; x < toGuess.length; x++){

                    if(toGuess[x] === selected) {
            
                        toGuessArray[x] = selected;
                        
                        let compare = toGuessArray.join('');

                        if (compare === toGuess){

                            endGame();
                        }
                    }
                }
            }
            else {
                incorrect++;

                if(incorrect >= lives) {
                    updateLives();
                }
                else {
                    updateLives();
                }
            }
            updateWord();

            l.classList.add("disabled");
      });
});

play();

playAgain.addEventListener("click", play);