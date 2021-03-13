export default class InMemoryRepository {
    constructor(){
        this.items = [];
    }

    add(item) {
        this.items[item.id] = item;
    }

    edit(item) {
        this.items[item.id] = item;
    }

    delete(id) {
        delete this.items[id];
    }

    get(id) {
        return this.items[id];
    }

    getAll() {
        return Object.values(this.items);
    }

}
