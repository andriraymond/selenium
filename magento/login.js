const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const assert = require("assert");

async function loginTest(email, password, expectedTitle) {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get(
      "https://magento.softwaretestingboard.com/customer/account/login"
    );

    await driver.findElement(By.id("email")).sendKeys(email);
    await driver.findElement(By.id("pass")).sendKeys(password);
    await driver.findElement(By.id("send2")).click();

    // Wait for the title to be 'My Account'
    await driver.wait(until.titleIs(expectedTitle), 5000);

    // Verify the title
    let title = await driver.getTitle();
    assert.strictEqual(title, expectedTitle);
    console.log(`passed - login test with email '${email}' and password '${password}' passed successfully.`);

  } catch (error) {
    console.log(
      `failed - login test with email '${email}' and password '${password}' failed`);
  } finally {
    await driver.quit();
  }
}

// Define different test cases with various credentials and expected results
loginTest("blaisepascal@yopmail.com", "Qatest1234", "My Account");
loginTest("blaise@yopmail.com", "Qatest123456", "My Account");
loginTest("blaisepascal@yopmail.com", "Qatest123456", "My Account");