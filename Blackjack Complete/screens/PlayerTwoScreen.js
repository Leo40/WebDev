import BaseScreen from "./BaseScreen.js";
import Menu from "../menu/Menu.js"

export default class PlayerTwoScreen extends BaseScreen{
    constructor(playerOne, playerHand, dealerHand){
        super(
            'Player 2',            
            new Menu('Would you like to: ', 'Please enter your desired action'),
            playerHand,
            dealerHand,            
        )
        this.menu.addMenuItem('H', 'Hit', this);
        this.menu.addMenuItem('S', 'Stay', playerOne);
    }

    dealCards(action){
        if(action !== this && this.cardSum < 17){            
            console.log('You cannot stop hitting until your cards are worth 17.');            
            return this;
        }

        if(action !== this && this.cardSum > 17){                        
            return action;
        }        

        this.currentHand.setValue();        
        const cards = this.currentHand.getValue();
        const lastCard = cards.slice(-1)[0];
        console.log(`${this.title} draws: ${lastCard.rank} of ${lastCard.suit}`);
        return this;      
    }
}