import promptSync from 'prompt-sync';

import ScreenBase from './ScreenBase.js';
import MainScreen from './MainScreen.js'

export default class SeatSelectionScreen extends ScreenBase {
    constructor(seatRepository){
        super(
            'Seat Verification'
        )
        this.seatRepository = seatRepository;
        this.promptSync = promptSync();
    }

    seatPrompt() {
        let seat = null;
        do {
            const rowNumber = this.promptSync('Please enter the row number: ');
            const seatLetter = this.promptSync('Please enter the seatLetter: ').toUpperCase();

            const seatId = `${rowNumber}${seatLetter}`;
            if (!this.seatRepository.get(seatId)) {
                console.log('That seat is not available. Please try again.');
                console.log();
                continue;
            }

            if (this.seatRepository.isAvailable(seatId)) {
                console.log('Seat is not assigned yet.');
                console.log();
                break;
            }

            seat = this.seatRepository.get(seatId);
        } while(seat === null);

        console.log();
        return seat;
    }

    execute() {
        super.drawTitle();

        const seat = this.seatPrompt();

        if (seat?.passenger) {
            this.drawBanner('Passenger Details');
            console.log(`Firstname: ${seat.passenger.firstname}`);
            console.log(`Lastname: ${seat.passenger.lastname}`);
            console.log(`Passport: ${seat.passenger.passport}`);
            console.log();
        }

        return new MainScreen();
    }
}
