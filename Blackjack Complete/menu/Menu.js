import promptSync from 'prompt-sync';

export default class Menu {
    constructor(title, prompt){
        this.title = title;
        this.prompt = prompt;
        this.menuItems = [];
        this.promptSync = promptSync();
    }

    addMenuItem(shortcut, label, action) {
        this.menuItems.push({
            shortcut: shortcut,
            label: label,
            action: action
        });
    }

    execute(){        
        console.log(`${this.title}`);
        this.menuItems.forEach(menuItem => {
            console.log(`${menuItem.shortcut}: ${menuItem.label}`);
        });
        console.log(); 

        let selectedMenuItem = null;
        do {
            const input = this.promptSync(`${this.prompt}: `).toUpperCase();
            selectedMenuItem = this.menuItems.find(menuItem => menuItem.shortcut === input);
            if (!selectedMenuItem) {
                console.log('Invalid Entry! Please try again.')
            }
        } while(selectedMenuItem === null);

        return selectedMenuItem?.action;
    }
}