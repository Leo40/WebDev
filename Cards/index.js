import Deck from './cardDetails/Deck.js';
import Suit from './cardDetails/Suit.js';
import Rank from './cardDetails/Rank.js';

const deck = new Deck(new Rank(), new Suit());
deck.pickCard();