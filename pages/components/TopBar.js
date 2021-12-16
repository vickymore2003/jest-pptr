export default class TopBar {
  async isTopBardisplayed() {
    await page.waitForSelector(".brand");
    await page.waitForSelector("#signin_button");
  }

  async clickSignInbutton() {
    await page.click("signin_button");
  }
}
