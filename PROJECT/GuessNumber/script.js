let random = (Math.floor(Math.random() * 100 + 1));
console.log(random);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHigh = document.querySelector('.lowOrHigh');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// prevoiusGuess name ka array bna liye hai usi me hm user ke input ko dikhayenge 

let previousGuess = [];
// numGuess mtlb ki pahla guess kar rhe hai 
let numGuess = 1;

// game start kane ke liye hme playGame ko true karna hi padega 

let playGame = true;

//agar game khelna chahta hai toh 
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// check karega validateguess se ki user ka input jo hai ooo number hai ki nhi ya greter than 100 aur less than 0 hai ki nhi 
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number ");
  }
  else if (guess > 100) {
    alert("please enter less than 100");
  }
  else if (guess < 1) {
    alert("please enter more than 1 value ");
  }
  else {
    // agar upar ka condition sab match nhi ho rha hai toh  ab push kar denge previousGuess me  
    previousGuess.push(guess);
    // agar user 10 baar khel liya toh ab hm use game over dikhayenge 
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over . Random number was ${random}`);
      endGame();
    }
    // agar abhi user ka chance left hai toh hm use khelne denge 
    else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


// function ke help se user ko pta chalega ki sahi guess kiya ki nhi ya kitna close hai random value se
function checkGuess(guess) {
  if (guess === random) {
    displayMessage("you guessed it right");
    endGame();
  }
  else if (guess < random) {
    displayMessage(`Number is TOO Low`);
  }
  else if (guess > random) {
    displayMessage(`Number is TOO High `);
  }
}


function displayGuess(guess) {
  // ek input daalne ke baad usme phir se input daalne ke liye userinput box ko khali kar rhe hai 
  userInput.value = ' ';
  // guess value ko hm usme push karte ja rhe hai 
  guessSlot.innerHTML += `${guess} , `;
  // phir ab hm yha par numGuess ko badhate ja rhe hai 
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;

}


// message display kra rhe hai ki kitna close hai random number se 
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // userInput box ko khali kar denge 
  userInput.value = ' ';
  // ab user ko disabled kar rhe hai ki phir se userinput me na input daal paai 
  userInput.setAttribute('disabled', ' ');
  // ab hm jo global me paragraph ko create kiye the uske help se hm ab game over dikhayenge aur usko class de denge 
  p.classList.add('button');
  // p  ko id bhi de diye aur innertext bhi uske andar 
  p.innerHTML = `<h2 id='newGame'> Start New Game</h2>`
  // jo startOver tha global me usme ab append kar denge 
  startOver.appendChild(p);
  // ab playGame ko false kar denge ki user ab na khel paai bina new game kiye 
  playGame = false;
  newGame();
}

// ab new game ke liye 
function newGame() {
  // endGame wala <h2> tag se id ko target kar liye hai ki usme addeventlistner lga de aur usko touch karte hi new game start ho jaai 
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', function (e) {
    random = (Math.floor(Math.random() * 100 + 1));
    // prevousGuess  array ko blank kar diye 
    previousGuess = [];
    // user abhi pahla khel rha hai 
    numGuess = 1;
    // pahle ka input ko box se hta de rhe hai 
    guessSlot.innerHTML = ' ';
    remaining.innerHTML = `${11 - numGuess}`;
    // jo disabled kiye thee endGame me usko ab remove kar rhe hai 
    userInput.removeAttribute('disabled');
    // ab paragrapg tag ko bhi remove kar rhe hai ki ab show na ho jab new game karte hai toh 
    startOver.removeChild(p);

    // phir se new game khelne ke liye true kar diye 
    playGame = true;
  });
}