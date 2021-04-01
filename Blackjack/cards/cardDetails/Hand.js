export default class Hand {
    constructor(){
        this.playerHand = [];
        this.dealerHand = [];
    }

    setHand(playerCard, dealerCard){
        this.playerHand.push(playerCard);
        this.dealerHand.push(dealerCard);
    }


    getPlayerHand(){
        return this.playerHand;
    }

    getDealerHand(){
        return this.dealerHand;
    }
}