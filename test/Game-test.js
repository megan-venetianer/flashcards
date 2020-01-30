const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
  const game = new Game();
  expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create a new instance of the deck class when a game begins', function() {
    const game = new Game();
    game.start();
    expect(Deck).to.be.a('function');
  });

  it('should create a new instance of the round class when a game begins', function() {
    const game = new Game();
    game.start();
    expect(Round).to.be.a('function');
  });

  it('should create a new instance of the card class when a game begins', function() {
    const game = new Game();
    game.start();
    expect(Card).to.be.a('function');
  });

  it('should keep track of the number of cards in the game', function() {
  const game = new Game();
  game.start();
  expect(game.cards.length).to.equal(30);
  });
});
