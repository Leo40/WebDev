import ScreenBase from './ScreenBase.js'
import Menu from '../menu/Menu.js'
import SeatClassSelectionScreen from './SeatClassSelectionScreen.js'
import SeatVerificationScreen from './SeatVerificationScreen.js'
import seatRepository from '../data/SeatRepository.js'

export default class MainScreen extends ScreenBase {
    constructor(){
        super(
            'Welcome to AirConsole',
            new Menu('Task Selection', 'Please enter the task you want to perform')
        )
        this.menu.addMenuItem('R', 'Reservation', new SeatClassSelectionScreen());
        this.menu.addMenuItem('S', 'Seat Verification', new SeatVerificationScreen(seatRepository));
        this.menu.addMenuItem('X', 'Exit the System', null);
    }
}
