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
function checkForMatch(){
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log('You found match!');
            //alert('You found match!');
            cardsInPlay = [];
        } else {
            console.log(`Sorry, try again`);
            //alert('Sorry, try again');
        }

    }
}
function flipCard(){

    let cardId = this.getAttribute("data-id");
    cardsInPlay.push(cards[cardId].rank);

    this.setAttribute("src",cards[cardId].cardImage)
    checkForMatch();
}
function creatBoard(){
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
    //This only reseted my board but the alert for the fucntion flipCard was not 
    //.. alerting again
    // let element = document.getElementById('game-board');
    // while(element.hasChildNodes()){
    //     element.removeChild(element.firstChild)
    // }

    // creatBoard();
    location.reload();
}
document.querySelector('button').addEventListener('click', restart);


