import PlayerOneScreen from './PlayerOneScreen.js';
import BaseScreen from './BaseScreen.js';
import Hand from '../Cards/cardDetails/Hand.js';

export default class MainScreen extends BaseScreen {
    constructor(){        
        super(
            'Blackjack',
            null,
            new Hand(),
            new Hand(),            
        )
    }

    dealCards(){       
        super.drawTitle();
        console.log('Deal!\n');                          
                
        for(let i = 0; i < 2; i++){
            this.playerHand.setValue();
            this.dealerHand.setValue();

            const playerCard = this.playerHand.getValue();
            const dealerCard = this.dealerHand.getValue();


            console.log(`Player 1 gets ${playerCard[i].rank} of ${playerCard[i].suit}`);
            console.log(`Player 2 gets ${dealerCard[i].rank} of ${dealerCard[i].suit}`);
        }
        console.log();
    }

    execute(){        
        this.dealCards();
        return new PlayerOneScreen(this.playerHand, this.dealerHand);
    }
}