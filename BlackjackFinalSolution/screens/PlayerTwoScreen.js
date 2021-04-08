import BaseScreen from "./BaseScreen.js";
import Menu from "../menu/Menu.js"

export default class PlayerTwoScreen extends BaseScreen{
    constructor(playerOne, playerHand, dealerHand, deck){
        super(
            'Player 2',            
            new Menu('Would you like to: ', 'Please enter your desired action'),
            playerHand,
            dealerHand,  
            deck          
        )
        this.menu.addMenuItem('H', 'Hit', this);
        this.menu.addMenuItem('S', 'Stay', playerOne);
    }

    dealCards(){
        const action = this.menu.getAction();
        if(action !== this && this.cardSum < 17){            
            console.log('You cannot stop hitting until your cards are worth 17.');            
            this.nextPlayer = this;                        
            return;
        }

        if(this.nextPlayer !== this && this.cardSum > 17){                        
            this.nextPlayer = action;
            return;
        }
        
        const card = this.deck.pickCard();
        this.currentHand.setValue(card);

        const cards = this.currentHand.getValue();
        const lastCard = cards.slice(-1)[0];
        console.log(`${this.title} draws: ${lastCard.rank} of ${lastCard.suit}`);
        this.nextPlayer = this;
    }
}