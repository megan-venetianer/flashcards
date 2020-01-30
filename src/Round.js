const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.deck.cards[this.turns]);
    if (turn.evaluateGuess() === true) {
      this.correctGuesses.push(turn.card.id);
    } else {
      this.incorrectGuesses.push(turn.card.id);
    }
    let result = turn.giveFeedback();
    this.turns++;
    return result;
  }
  calculatePercentCorrect() {
    let percentCorrect = (this.correctGuesses.length / (this.correctGuesses.length + this.incorrectGuesses.length))*100;
    return percentCorrect;
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the answers correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the answers correctly!`;
  }
};

module.exports = Round;
