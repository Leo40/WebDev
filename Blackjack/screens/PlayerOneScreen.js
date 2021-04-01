import BaseScreen from "./BaseScreen.js";
import PlayerTwoScreen from "./PlayerTwoScreen.js";
import Menu from "../menu/Menu.js"

export default class PlayerOneScreen extends BaseScreen{
    constructor(hand){
        super(
            'Player 1',                        
            hand,
            new Menu('Would you like to: ', 'Please enter your desired action: ')
        )
        this.menu.addMenuItem('H', 'Hit', this);
        this.menu.addMenuItem('S', 'Stay', new PlayerTwoScreen(this, hand));
    }
}