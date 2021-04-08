import MainScreen from './screens/MainScreen.js'

let currentScreen = new MainScreen;
do {
    currentScreen = currentScreen.execute();
} while(currentScreen);


const deck = new Deck(new Rank(), new Suit());
const pickedCard = deck.pickCard();

console.log(pickedCard);