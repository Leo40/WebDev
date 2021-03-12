import fs from 'fs';
import path from 'path';

import InMemoryRepository from './InMemoryRepository.js';

export default class JsonFileRepository extends InMemoryRepository {
    constructor(filename){
        super();
        this.filename = filename;
        this.load();
    }

    add(item) {
        super.add(item);
        this.save();
    }

    edit(item) {
        super.add(item);
        this.save();
    }

    delete(id) {
        super.delete(item);
        this.save();
    }

    load() {
        const fullPath = path.resolve(this.filename);
        if (fs.existsSync(fullPath)) {
            const fileContents = fs.readFileSync(fullPath);
            const items = JSON.parse(fileContents.toString());
            items.forEach(item => {
                super.add(item);
            });
        }
    }

    save() {
        const fullPath = path.resolve(this.filename);
        const fileContents = JSON.stringify(this.getAll(), null, 2);
        console.log(this.getAll());
        console.log(fileContents);
        fs.writeFileSync(fullPath, fileContents);
    }
}
