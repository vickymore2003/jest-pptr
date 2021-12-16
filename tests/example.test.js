import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
import Feedbackpage from "../pages/Feedbackpage";

describe("Example test", () => {
  let homepage;
  let topbar;
  let loginpage;
  let feedbackpage;

  beforeAll(async () => {
    jest.setTimeout(100000);
    topbar = new TopBar();
    homepage = new HomePage();
    loginpage = new LoginPage();
    feedbackpage = new Feedbackpage();
  });

  it("Homepage works", async () => {
    await homepage.visit();
  });

  it("Navigation bar displayed", async () => {
    await homepage.isNavbarDisplayed();
  });

  it("navBar should be displayed", async () => {
    await homepage.isNavbarDisplayed();
    await topbar.isTopBardisplayed();
  });

  it("try to Login", async () => {
    await loginpage.visit();
    await loginpage.isLoginFormDisplayed();
    await loginpage.login("username", "password");
    //await loginpage.wait(5000);
  });

  it("enter Feedback", async () => {
    await feedbackpage.visit();
    await feedbackpage.isFeedbackformDisplayed();
    await feedbackpage.submitfeedback(
      "Sunny",
      "abc@xyz.com",
      "This is feedback for 001",
      "This comment for above mentioned subject"
    );
 //   await feedbackpage.waitFor(5000);
    await page.waitForSelector('#feedback-title')
  });
});
