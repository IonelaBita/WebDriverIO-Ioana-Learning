import Exercises from '../pageobjects/exercises.js';
class Generic {
  randomNumber() {
    let numberToBe = Math.floor(Math.random() * 17) - 3;

    if (numberToBe === -3 || numberToBe === 13) {
      return 'string';
    }

    return numberToBe;
  }

  async waitSetAmount(seconds) {
    await browser.pause(1000 * seconds);
  }
}

export default new Generic();
