class HomePage {

    async openAboutYou() {
        await browser.url("https://www.aboutyou.ro/magazinul-tau");
        await browser.pause(3000);
      }

    async openGoogle() {
        await browser.url("https://www.google.co.uk/");
        await browser.pause(3000);
      }

    async clickButton() {
      const selector = "[id='onetrust-accept-btn-handler']";
        await $(selector).click();
        await browser.pause(3000);
      }
}

export default new HomePage();
