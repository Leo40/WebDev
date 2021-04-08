import Deck from '../Cards/cardDetails/Deck.js';
import Rank from '../Cards/cardDetails/Rank.js';
import Suit from '../Cards/cardDetails/Suit.js';
import PlayerOneScreen from './PlayerOneScreen.js';
import BaseScreen from './BaseScreen.js';
import Hand from '../Cards/cardDetails/Hand.js';

export default class MainScreen extends BaseScreen {
    constructor(){        
        super(
            'Blackjack',
            null,
            new Hand(),
            new Hand()
        )
        this.deck = new Deck(new Rank(), new Suit());
        this.deck.shuffle();
    }

    dealCards(){
        super.drawTitle();
        console.log('Deal!\n');
                
        for(let i = 0; i < 2; i++){
            const playerCard = this.deck.pickCard();
            const dealerCard = this.deck.pickCard();
        
            this.playerHand.setValue(playerCard);            
            this.dealerHand.setValue(dealerCard);           
            
            console.log(`Player 1 gets ${playerCard.rank} of ${playerCard.suit}`);
            console.log(`Player 2 gets ${dealerCard.rank} of ${dealerCard.suit}`);
        }
        console.log();
        //console.log(this.playerHand);
    }

    execute(){        
        this.dealCards();        
        return new PlayerOneScreen(this.playerHand, this.dealerHand, this.deck);
    }
}