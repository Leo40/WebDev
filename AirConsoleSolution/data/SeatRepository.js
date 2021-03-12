import JsonFileRepository from './JsonFileRepository.js'

class SeatRepository extends JsonFileRepository {
    constructor() {
        super('flight-manifest.json');
    }

    isAvailable(seatId) {
        const item = super.get(seatId);
        if (item?.passenger === null) {
            return true;
        }
        return false;
    }
}
const SeatRepositoryInstance = new SeatRepository();
export default SeatRepositoryInstance;
