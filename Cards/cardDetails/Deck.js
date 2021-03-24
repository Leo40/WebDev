import Card from './Card.js';
import Suit from './Suit.js';
import Rank from './Rank.js';

export default class Deck {
    constructor(){        
        this.rank = new Rank();
        this.suit = new Suit();
        this.deckOfCards = [];

        for(let x in this.suit){
            this.rank.rankItems.forEach(rankItem => {
                this.deckOfCards.push(new Card(rankItem, this.suit[x]))        
            });              
        }

        //Display unshuffled deck
        console.log(this.deckOfCards)
        this.deckOfCards.forEach(card => {
            console.log(`${card.rank} of ${card.suit}`);
        });
    }
    
    shuffleCards() {
        const shuffledDeck = this.deckOfCards;                    
        for(let i = shuffledDeck.length -1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const randomCard = shuffledDeck[randomIndex];
            shuffledDeck[randomIndex] = shuffledDeck[i];
            shuffledDeck[i] = randomCard;
        }
                
        //Display shuffled deck        
        console.log(shuffledDeck);
        shuffledDeck.forEach(card => {
            console.log(`${card.rank} of ${card.suit}`);
        });

        return shuffledDeck;
    }

    pickCard() {
        const shuffledDeck = this.shuffleCards();
        const pickedCard = shuffledDeck.pop();

        //Dispaly picked card
        console.log(pickedCard);

        return pickedCard;
    }
}