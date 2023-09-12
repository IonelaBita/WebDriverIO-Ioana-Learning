class HomePage {
  async openAboutYou() {
    await browser.url("https://www.aboutyou.ro/magazinul-tau")
    await browser.pause(3000)
  }

  async clickButton() {
    const selector = "[id='onetrust-accept-btn-handler']"
    console.log("i m ready")
    await $(selector).click()
    await browser.pause(3000)
  }
}

export default new HomePage()
