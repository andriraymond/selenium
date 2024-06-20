const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
 
;(async function magento() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    await driver.get('https://magento.softwaretestingboard.com/customer/account/login')

    await driver.findElement(By.id('email')).sendKeys('blaisepascal@yopmail.com')
    await driver.findElement(By.id('pass')).sendKeys('Qatest123456')
    await driver.findElement(By.id('send2')).click()
    
    // Wait for the title to be 'My Account'
    await driver.wait(until.titleIs('My Account'), 1000);

    // Verify the title
    let title = await driver.getTitle();
    assert.strictEqual(title, 'My Account');

    console.log('Login test passed successfully.');

  } catch (error) {
    console.error('Login test failed:', error);
  } finally {
    await driver.quit()
  }
})();