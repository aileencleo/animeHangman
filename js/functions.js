//updates the letter lines
function updateWord(){
    
    output = ``;

    toGuessArray.forEach(function(x, index){

        output += toGuessArray[index];
    
    });

    wordGuess.innerHTML = output;
}

function updateLives(){
    //updates the hangman picture
    if (incorrect >= lives) {
        hangmanPicture.src = `./images/Drawing-${lives}.png`;

        incorrectHolder           = `Incorrect Guesses: ${lives}/ ${lives}`;
        incorrectGuess.innerHTML  = incorrectHolder;

        endGame();

    }
    else {
        hangmanPicture.src        = `./images/Drawing-${incorrect}.png`;

        incorrectHolder           = `Incorrect Guesses: ${incorrect}/ ${lives}`;
        incorrectGuess.innerHTML  = incorrectHolder;    
    }
}


function endGame(){

    let resultsOutput = ``;

    if(incorrect >= lives){

        resultsOutput = `<h2>🎮❌Game Over!❌🎮</h2>
                         <h3>You Loose!</h3>`;

    }
    else{
        resultsOutput = `<h2>🎉🎉🎉Congrats!🎉🎉🎉</h2>
                         <h3>You Win!</h3>`;
    }

    results.innerHTML   = resultsOutput;

    popUp.style.display = "block"; 

    fadeIn();

    main.classList.add('disabled');
}


//fade in effect for popup
function fadeIn() {
    let opacity = 0;
    let intervalID = setInterval(function() {

        if (opacity < 1) {
            opacity = opacity + 0.1
            popUp.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, popUpDelay);
}


function play(){
    //hide popup on the initial load of the page
    popUp.style.display = "none"; 

    //allows the player to access the main content
    main.classList.remove('disabled');

    letter.forEach(l => {
          l.classList.remove("disabled");
    });

    //sets the incorrect to 0
    incorrect = 0;

    random    = Math.floor(Math.random() * animeObject.length);

    //selects the random character
    toGuess = animeObject[random].character;
    toGuess = toGuess.toLowerCase();

    //changes the current character picture on the page
    animeImageSrc    = `./image-anime/` + toGuess + `.jpg`
    animePicture.src = animeImageSrc;
    animePicture.alt = toGuess;

    toGuessArray     = [];
    counter          = toGuess.length;

    //displays the letter underlines
    while (counter != 0) {
        toGuessArray.push(' _ ');
        counter--;
    }

    updateWord();

    hint.innerHTML            = `<strong>Hint:</strong> ${animeObject[random].hint}`;

    updateLives();
}
