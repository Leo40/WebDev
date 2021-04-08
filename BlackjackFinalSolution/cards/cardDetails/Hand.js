export default class Hand {
    constructor(){
        this.cards = [];        
        this.cardSum = null;
    }

    setValue(card){                                
        this.cards.push(card);
    }
    
    calculateSum(){        
        const evaluateCard = (card) => {
            if(card.rank === 'Ace' && (this.cardSum + 11) > 21){                
                this.cardSum += 1;
                return;
            }                      
            if(card.rank === 'Ace' && (this.cardSum + 11) < 21){
                this.cardSum += 11;
                return;
            }
            if(card.rank === 'Jack' || card.rank === 'Queen' || card.rank === 'King'){
                this.cardSum += 10;
                return;
            }                  
            this.cardSum += card.rank;                                  
        }

        if(this.cards.length === 2){
            this.cards.forEach(card => {
                evaluateCard(card);
            });            
        }

        if(this.cards.length > 2){
            const lastCard = this.cards[this.cards.length-1];
            evaluateCard(lastCard);
        }                
    }

    getValue(){
        return this.cards;
    }
}
