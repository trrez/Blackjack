let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
//otra manera de hacerlo con querySelector = let sumEl = document.querySelector("#sum-el");
//El query selector puede seleccionar cualquier selector de css, cualquier etiqueta.
//por ejemplo si es por el selector id tiene que ser con un hashtag(#) al principio, si es
//con una clase con un punto(.) al principio.
//si es por ej con el body se debe poner solo body.
function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = 7;
  sum += card;
  startGame();
}
