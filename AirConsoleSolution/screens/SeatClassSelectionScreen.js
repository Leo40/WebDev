import ScreenBase from './ScreenBase.js';
import Menu from '../menu/Menu.js';
import SeatSelectionScreen from './SeatSelectionScreen.js'
import seatRepository from '../data/SeatRepository.js'

export default class SeatClassSelectionScreen extends ScreenBase {
    constructor(){
        super(
            'Seat Class',
            new Menu('Seat Class Selection', 'Please enter the seat class you want to reserve')
        )

        this.menu.addMenuItem('B', 'Business Class', new SeatSelectionScreen('Business Class', 1, 5, seatRepository));
        this.menu.addMenuItem('E', 'Economy Class', new SeatSelectionScreen('Economy Class', 6, 8, seatRepository));
    }
}
