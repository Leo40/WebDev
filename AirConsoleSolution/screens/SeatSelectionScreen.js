import promptSync from 'prompt-sync';

import ScreenBase from './ScreenBase.js';
import MainScreen from './MainScreen.js'
import Seat from '../models/Seat.js'
import Passenger from '../models/Passenger.js'

export default class SeatSelectionScreen extends ScreenBase {
    constructor(seatClass, startRow, endRow, seatRepository){
        super(
            seatClass
        )
        this.seatClass = seatClass;
        this.startRow = startRow;
        this.endRow = endRow;
        this.seatLetters = ['A', 'B', 'C', 'D', 'E'];
        this.seatRepository = seatRepository;
        this.promptSync = promptSync();

        for (let rowNumber = this.startRow; rowNumber <= this.endRow; rowNumber++) {
            this.seatLetters.forEach(seatLetter => {
                const seat = new Seat(`${rowNumber}${seatLetter}`);
                if (!this.seatRepository.get(seat.id)) {
                    this.seatRepository.add(seat);
                }
            });
        }
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

            if (!this.seatRepository.isAvailable(seatId)) {
                console.log('Seat is taken. Please try again');
                console.log();
                continue;
            }

            seat = this.seatRepository.get(seatId);
        } while(seat === null);

        console.log();
        return seat;
    }

    execute() {
        super.drawTitle();

        const heading = this.seatLetters.reduce((accu, s) => `${accu} ${s} `, '   ');
        console.log(heading);

        const getSeatStatus = (seatId) => {
            return this.seatRepository.isAvailable(seatId) ? '  ' : ' X';
        }
        for (let rowNumber = this.startRow; rowNumber <= this.endRow; rowNumber++) {
            const row = this.seatLetters.reduce((accu, seatLetter) => {
                const seatId = `${rowNumber}${seatLetter}`;
                return `${accu} ${getSeatStatus(seatId)}`;
            }, ` ${rowNumber}`);
            console.log(row);
        }
        console.log();

        const seat = this.seatPrompt();
        seat.passenger = new Passenger();
        seat.passenger.firstname = this.promptSync('Please enter your firstname: ');
        seat.passenger.lastname = this.promptSync('Please enter your lastname: ');
        seat.passenger.passport = this.promptSync('Please enter your passport: ');
        this.seatRepository.edit(seat);

        return new MainScreen();
    }
}
