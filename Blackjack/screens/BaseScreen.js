import Hand from '../Cards/cardDetails/Hand.js';
export default class BaseScreen{
    constructor(title, hand, menu){
        this.title = title;            
        this.hand = hand;        
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

    playerStatus(){
        const playerHand = this.hand.playerHand;
        const dealerHand = this.hand.dealerHand;        
        const currentHand = this.title === 'Player 1'? playerHand : dealerHand;
        let cardSum = null;
        let cardsOnHand = [];

        currentHand.forEach(card => {              
            cardsOnHand.push(card.rank + " of " + card.suit);
        
            if(card.rank === 'Ace'){
                return cardSum += 11                    
            }

            if(card.rank === 'Jack' || card.rank === 'Queen' || card.rank === 'King'){
                return cardSum += 10                    
            }
            
            return cardSum += card.rank;                               
        });
        
        const allCardsOnHand = `${cardsOnHand.slice(0, -1).join(', ')} and ${cardsOnHand.slice(-1)}`;              
        console.log(`${this.title} is currently at ${cardSum}. Cards in hand are: ${allCardsOnHand}`);        
    }

    execute() {
        this.drawTitle();
        this.playerStatus();
        return this.menu.execute();  
    }
}