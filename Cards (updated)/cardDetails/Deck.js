import Card from './Card.js';

export default class Deck {
    constructor(rank, suit){        
        this.rank = rank;
        this.suit = suit;
        this.deckOfCards = [];

        for(let x in this.suit){
            this.rank.rankItems.forEach(rankItem => {
                this.deckOfCards.push(new Card(rankItem, this.suit[x]))        
            });              
        }
    }
    
    shuffle(){
        const shuffledDeck = this.deckOfCards;                    
        for(let i = shuffledDeck.length -1; i >= 0; i--){
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const randomCard = shuffledDeck[randomIndex];
            shuffledDeck[randomIndex] = shuffledDeck[i];
            shuffledDeck[i] = randomCard;
        }
                
        this.deckOfCards = shuffledDeck;
    }

    pickCard() {
        return this.deckOfCards.pop();    
    }
}