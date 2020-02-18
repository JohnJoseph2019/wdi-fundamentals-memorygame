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
        cardImage: "images/queen-of-hearts.png",
        flip: false
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png", 
        flip: false       
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png",   
        flip: false     
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png",
        flip: false      
    }
]
let cardsInPlay = [];
let score = 0; //This will keep track of the score 
let counter = 0
function checkForMatch(){
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0].rank === cardsInPlay[1].rank && cardsInPlay[0].suit !== cardsInPlay[1].suit) {
            score++;
            // console.log(`You found match! You have won ${score}`);
            alert(`You found match! Times won: ${score}`);
            counter+=2;
            allflip();
        } else {
            // console.log(`Sorry, try again`);
            alert('Sorry, try again');
            let matches = document.querySelectorAll('img');
            //This will flip back the card it does not match 
            for(let i = 0; i < matches.length; i++){
                if (matches[i].cardImage !== "images/back.png" ){
                    matches[i].setAttribute("src", "images/back.png");
                }
            }            
        }
        //this will delete everything in the array to just compare index 0 and 1 for the next round.
        cardsInPlay.pop();
        cardsInPlay.pop();

    }
}
function allflip(){
    let cards = document.querySelectorAll('img');
    if(counter === 4)
    {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].cardImage !== "images/back.png") {
                cards[i].setAttribute("src", "images/back.png");
            }
        }  
        counter = 0;
        //This will reload the game 
        reload();            
    }


}
function flipCard(){

    let cardId = this.getAttribute("data-id");
    this.setAttribute("src",cards[cardId].cardImage)
    cards[cardId].flip = true;
    cardsInPlay.push(cards[cardId]);
    //I used set-timmeout because it dispaly the second card after it did this function and I wanted to displaythe second card first before it did the function
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
function createBoard(){
    //resetCards();
    //This will display the random cards
    for(let i = 0; i < cards.length; i++)
    {
        let cardElement =  document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        document.getElementById('game-board').appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);

    }
}

createBoard();

function reload(){
    //This will delete all images
    //This will delete everything in the cardsInplay array
    //then called reset function to reset the cards array
    //then called creatBoard to display that
    let element = document.getElementById('game-board');
    while(element.hasChildNodes()){
        element.removeChild(element.firstChild)
    }
    //here will delete any elements in the cardInPlay just incase
    while(cardsInPlay.length > 0){
        cardsInPlay.pop();
    }
    resetCards();
    createBoard();
}
function restart(){
    //I first used this to just reload the page . this is the same as clicking the refresh button
    location.reload();
}

document.querySelector('button').addEventListener('click', restart);


