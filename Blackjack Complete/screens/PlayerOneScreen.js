import BaseScreen from "./BaseScreen.js";
import PlayerTwoScreen from "./PlayerTwoScreen.js";
import Menu from "../menu/Menu.js";

export default class PlayerOneScreen extends BaseScreen{
    constructor(playerHand, dealerHand){
        super(
            'Player 1',                                
            new Menu('Would you like to: ', 'Please enter your desired action'), 
            playerHand, 
            dealerHand,            
        )
        this.menu.addMenuItem('H', 'Hit', this);
        this.menu.addMenuItem('S', 'Stay', new PlayerTwoScreen(this, playerHand, dealerHand));        
    }
}