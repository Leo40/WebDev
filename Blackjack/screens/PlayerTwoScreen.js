import BaseScreen from "./BaseScreen.js";
import Menu from "../menu/Menu.js"


export default class PlayerTwoScreen extends BaseScreen{
    constructor(playerOne, hand){
        super(
            'Player 2',
            hand,
            new Menu('Would you like to: ', 'Please enter your desired action: ')            
        )
        this.menu.addMenuItem('H', 'Hit', this);
        this.menu.addMenuItem('S', 'Stay', playerOne);
    }
}