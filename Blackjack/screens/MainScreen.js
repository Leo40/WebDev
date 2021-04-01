import PlayerOneScreen from './PlayerOneScreen.js';
import BaseScreen from './BaseScreen.js';
import Deck from '../Cards/cardDetails/Deck.js'
import Rank from '../Cards/cardDetails/Rank.js'
import Suit from '../Cards/cardDetails/Suit.js'
import Hand from '../Cards/cardDetails/Hand.js';

export default class MainScreen extends BaseScreen {
    constructor(){        
        super(
            'Blackjack',
            new Hand()              
        )        
        this.deck = new Deck(new Rank(), new Suit());
    }

    dealCards(){                
        super.drawTitle();
        console.log('Deal!\n');        
        this.deck.shuffle();       
        const playerHand = this.hand.playerHand;
        const dealerHand = this.hand.dealerHand;
        

        for(let i = 0; i < 2; i++){
            this.hand.setHand(this.deck.pickCard(), this.deck.pickCard());
            console.log(`Player 1 gets ${playerHand[i].rank} of ${playerHand[i].suit}`);
            console.log(`Player 2 gets ${dealerHand[i].rank} of ${dealerHand[i].suit}`);
        }
    }

    execute(){        
        this.dealCards();
        return new PlayerOneScreen(this.hand);
    }
}