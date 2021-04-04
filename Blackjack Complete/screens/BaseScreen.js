export default class BaseScreen{
    constructor(title, menu, playerHand, dealerHand){
        this.title = title;    
        this.menu = menu; 
        this.playerHand = playerHand;
        this.dealerHand = dealerHand;         
        this.currentHand = null;
        this.cardSum = null;         
    }

    drawBanner(banner){
        
        console.log('*'.repeat(this.title.length + 8));
        console.log(`**  ${banner}  **`);
        console.log('*'.repeat(this.title.length + 8));
        console.log();
    }

    drawTitle() {
        return this.drawBanner(this.title);        
    }

    playerStatus(){
        let cardsOnHand = [];
        this.currentHand = this.title === 'Player 1'? this.playerHand: this.dealerHand;        
        this.cardSum = this.currentHand.calculateSum(cardsOnHand);

        const listCardsOnHand = `${cardsOnHand.slice(0, -1).join(', ')} and ${cardsOnHand.slice(-1)}`;              
        console.log(`${this.title} is currently at ${this.cardSum}. Cards in hand are: ${listCardsOnHand}`);
        console.log();
        
        if(this.cardSum === 21){            
            console.log(`${this.title} wins by Blackjack!`);
            process.exit();
        }

        if(this.cardSum > 21){            
            console.log(`${this.title} goes bust!`);
            process.exit();
        }
    }

    dealCards(action){
        if(action !== this){
            return action;
        }                
        this.currentHand.setValue();
        const cards = this.currentHand.getValue();
        const lastCard = cards.slice(-1)[0];
        console.log(`${this.title} draws: ${lastCard.rank} of ${lastCard.suit} \n`);        
        return this;           
    }

    execute() {
        this.drawTitle();
        this.playerStatus();        
        const action = this.menu.execute();
        const nextPlayer = this.dealCards(action);
        return nextPlayer;
    }
}