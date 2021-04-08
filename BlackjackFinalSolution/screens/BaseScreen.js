import MainScreen from "./MainScreen.js";

export default class BaseScreen{
    constructor(title, menu, playerHand, dealerHand, deck){
        this.title = title;
        this.menu = menu;
        this.playerHand = playerHand;
        this.dealerHand = dealerHand;
        this.deck = deck;
        this.currentHand = null;
        this.cardSum = 0;
        this.nextPlayer = null;
        //console.log(this.playerHand);        
    }

    drawBanner(banner){
        
        console.log('*'.repeat(this.title.length + 8));
        console.log(`**  ${banner}  **`);
        console.log('*'.repeat(this.title.length + 8));
        console.log();        
        //console.log(this.playerHand);
    }

    drawTitle() {
        return this.drawBanner(this.title);                
    }

    playerStatus(){
        let cardsOnHand = [];      
        this.currentHand = this.title === 'Player 1'? this.playerHand: this.dealerHand;
        
        this.currentHand.cards.forEach(card => {
            cardsOnHand.push(`${card.rank} of ${card.suit}`)
        });
                
        this.currentHand.calculateSum(cardsOnHand);        

        const initialCards = cardsOnHand.slice(0, -1);
        const finalCard = cardsOnHand.slice(-1);
        
        const listCardsOnHand = `${initialCards.join(', ')} and ${finalCard}`;        
        console.log(`${this.title} is currently at ${this.currentHand.cardSum}. Cards in hand are: ${listCardsOnHand}`);
        console.log();
        
        if(this.currentHand.cardSum === 21){
            console.log(`${this.title} wins by Blackjack!`);
            process.exit();
        }

        if(this.currentHand.cardSum > 21){
            console.log(`${this.title} goes bust!`);
            process.exit();
            // this.nextPlayer = new MainScreen();
            // return;
        }
    }

    dealCards(){
        const action = this.menu.getAction();
        // if(this.nextPlayer = MainScreen){
        //     console.log(this.nextPlayer);
        //     return;
        // }
        if(action !== this){
            this.nextPlayer = action;
            return;
        }
        
        const card = this.deck.pickCard();
        this.currentHand.setValue(card);
        const cards = this.currentHand.getValue();
        const lastCard = cards.slice(-1)[0];
        console.log(`${this.title} draws: ${lastCard.rank} of ${lastCard.suit} \n`);
        this.nextPlayer = this;
    }

    execute() {
        this.drawTitle();
        this.playerStatus();        
        this.menu.execute();
        this.dealCards();
        return this.nextPlayer;
    }
}