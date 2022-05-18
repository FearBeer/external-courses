class Hangman {
  constructor(word) {
    this.word = word;
    this.errors = 6;
    this.guessedString = '';
    this.wrongSymbols = [];
    this.rightSymbols = [];
  }

  guess(letter) {
    if (this.guessedString.includes(letter) || this.word.includes(letter)) {
      const regexp = new RegExp(`[^${letter}]`, 'g');
      this.guessedString += letter;
      this.rightSymbols.push(letter);
      const newWord = this.word.replace(regexp, '_');
      console.log(newWord);
      return this;
    }
    this.errors--;
    this.wrongSymbols.push(letter);
    console.log(`wrong letter, errors left ${this.errors} | ${this.wrongSymbols}`);
    return this;
  }

  getGuessedString() {
    console.log(this.guessedString);
    return this;
  }

  getErrorsLeft() {
    console.log(this.errors);
  }

  getWrongSymbols() {
    console.log(this.wrongSymbols);
  }

  getStatus() {
    console.log(this.guessedString);
  }
}

const hangman = new Hangman('webpurple');

hangman.guess('w'); // "w________"
hangman.guess('e'); // "we______e"
hangman.guess('a'); // "wrong letter, errors left 5 | a"
hangman.guess('p'); // "we_p__p_e"
hangman.guess('k'); // "wrong letter, errors left 4 | a,k"
