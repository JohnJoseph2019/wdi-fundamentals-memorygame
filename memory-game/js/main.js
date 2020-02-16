// console.log("Up and Running!");

// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";

// console.log("User flipped " + cardOne);

//let cards = ["queen", "queen", "king", "king"];
let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"        
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"        
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"       
    }
]
let cardsInPlay = [];
let score = 0; //This will keep track of the score 
function checkForMatch(){
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            score++;
            // console.log(`You found match! You have won ${score}`);
            alert(`You found match! You have won ${score}`);
            cardsInPlay = [];
        } else {
            // console.log(`Sorry, try again`);
            alert('Sorry, try again');
        }
        //this will delete everything in the array to just compare index 0 and 1 for the next round.
        cardsInPlay.pop();
        cardsInPlay.pop();

    }
}
function flipCard(){

    let cardId = this.getAttribute("data-id");
    cardsInPlay.push(cards[cardId].rank);

    this.setAttribute("src",cards[cardId].cardImage)
    //I used setimmeout because it dispaly the second card after it did this function and I wanted to displaythe second card first before it did the function
    setTimeout(checkForMatch, 50);
}
function resetCards(){
    for (let i = 3; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }    
}
function creatBoard(){
    //resetCards();
    //This will display the random cards
    for(let i = 0; i < cards.length; i++){
       let cardElement =  document.createElement('img');
       cardElement.setAttribute('src', "images/back.png");
       cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);

    }
}

creatBoard();
function restart(){
    //This won't reset the score just the board
    //This will restart the board and flip the card downside up.
    let element = document.getElementById('game-board');
    while(element.hasChildNodes()){
        element.removeChild(element.firstChild)
    }
    //here will delete any elements in the cardInPlay just incase
    while(cardsInPlay.length > 0){
        cardsInPlay.pop();
    }
    resetCards();
    creatBoard();
    //I first used this to just reload the page . this is the same as clicking the refresh button
    //location.reload();
}
document.querySelector('button').addEventListener('click', restart);


