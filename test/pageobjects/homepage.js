class HomePage {
  async openAboutYou() {
    await browser.url('https://www.google.com/');
    await browser.pause(3000);
  }

  async clickButton() {
    const selector = "[id='onetrust-accept-btn-handler']";
    console.log('i m ready');
    await $(selector).click();
    await browser.pause(3000);
  }
}

export default new HomePage();
