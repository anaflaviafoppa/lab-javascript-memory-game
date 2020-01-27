class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // Add the rest of the properties here

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    function shuffle(cards) {
      var m = cards.length,
        t,
        i;

      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
      }

      //return array;
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += 1;
      this.pairsClicked += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      this.pairsGuessed += 0;
      return false;
    }
  }

  isFinished() {
    if (this.pairsClicked <= 0) {
      return false;
    } else if (this.pairsGuessed < this.cards.length / 2 && this.pairsClicked > 0) {
      return false;
    } else if (this.pairsGuessed >= this.cards.length / 2) {
      return true;
    }
  }
}
