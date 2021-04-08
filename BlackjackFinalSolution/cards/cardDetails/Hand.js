import promptSync from 'prompt-sync';
export default class Hand {
    constructor(){
        this.cards = [];        
        this.cardSum = null;
    }

    setValue(card){                                
        this.cards.push(card);
    }
    
    calculateSum(){            
        if(this.cards.length === 2){
            this.cards.forEach(card => {
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
                return;
            });
            return;
        }

        if(this.cards.length > 2){
            const lastCard = this.cards[this.cards.length-1];

            if(lastCard.rank === 'Ace' && (this.cardSum + 11) > 21){                
                this.cardSum += 1;
                return;
            }          
            
            if(lastCard.rank === 'Ace' && (this.cardSum + 11) < 21){
                this.cardSum += 11;
                return;
            }

            if(lastCard.rank === 'Jack' || lastCard.rank === 'Queen' || lastCard.rank === 'King'){
                this.cardSum += 10;
                return;
            }
                  
            this.cardSum += lastCard.rank; 
            return;           
        }                 
    }

    getValue(){
        return this.cards;
    }
}