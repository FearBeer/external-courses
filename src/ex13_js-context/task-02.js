// eslint-disable-next-line no-unused-vars
class Hangman {
  constructor(word) {
    this.word = word;
    this.errors = 6;
    this.guessedString = '';
    this.wrongSymbols = [];
    this.guessedArray = [];
  }

  guess(letter) {
    const arrayFromWord = (this.word).toLowerCase().split('');

    if (this.guessedArray.length === 0) {
      for (let i = 0; i < (this.word).length; i++) {
        this.guessedArray.push('_');
      }
    }
    for (let i = 0; i < (this.word).length; i++) {
      if (arrayFromWord[i] === letter) {
        this.guessedArray[i] = letter;
      } else if (!this.word.includes(letter)) {
        this.errors--;
        this.wrongSymbols.push(letter);
        console.log(`wrong letter, errors left ${this.errors} | ${this.wrongSymbols}`);
        return this;
      }
    }

    if ((this.guessedArray).join('') === this.word) {
      console.log(`${(this.guessedArray).join('')} | You won!`);
    } else {
      console.log((this.guessedArray).join(''));
    }

    return this;
  }

  getGuessedString() {
    console.log((this.guessedArray).join(''));
    return this;
  }

  getErrorsLeft() {
    console.log(this.errors);
    return this;
  }

  getWrongSymbols() {
    console.log(this.wrongSymbols);
    return this;
  }

  getStatus() {
    console.log(`${(this.guessedArray).join('')} | errors left ${this.errors}`);
    return this;
  }

  startAgain(newWord) {
    this.word = newWord;
    this.errors = 6;
    this.guessedString = '';
    this.wrongSymbols = [];
    this.guessedArray = [];
    return this;
  }
}
