// console.log("Up and Running!");

// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";

// console.log("User flipped " + cardOne);

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log(`User flipped ${cardsInPlay[0]}.`);
let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log(`User flipped ${cardsInPlay[1]}.`);


if(cardsInPlay.length ===  2){   
    if(cardsInPlay[0] === cardsInPlay[1]){
        alert('You found match!');
    }else{
        alert(`Sorry, try again`);
    }

}