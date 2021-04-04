import Deck from './Deck.js';
import Rank from './Rank.js';
import Suit from './Suit.js';

export default class Hand {
    constructor(){
        this.cards = [];        
    }

    setValue(){        
        const deck = new Deck(new Rank(), new Suit());
        deck.shuffle();
        const card = deck.pickCard();
        this.cards.push(card);
    }
    
    calculateSum(cardsOnHand){    
        let cardSum = null;        
        this.cards.forEach(card => {              
            cardsOnHand.push(`${card.rank} of ${card.suit}`);
        
            if(card.rank === 'Ace'){
                return cardSum += 11;
            }

            if(card.rank === 'Jack' || card.rank === 'Queen' || card.rank === 'King'){
                return cardSum += 10;
            }
                                    
            return cardSum += card.rank;
        });
        return cardSum;
    }

    getValue(){
        return this.cards;
    }
}