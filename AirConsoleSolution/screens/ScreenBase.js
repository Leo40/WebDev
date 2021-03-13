export default class ScreenBase {

    constructor(title, menu){
        this.title = title;
        this.menu = menu;
    }

    drawBanner(banner) {
        console.log('*'.repeat(this.title.length + 8));
        console.log(`**  ${banner}  **`);
        console.log('*'.repeat(this.title.length + 8));
        console.log();
    }

    drawTitle() {
        return this.drawBanner(this.title);
    }

    execute() {
        this.drawTitle();
        return this.menu.execute();
    }
}
