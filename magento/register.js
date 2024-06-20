const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
 
;(async function magento() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    await driver.get('https://magento.softwaretestingboard.com/customer/account/create/')

    await driver.findElement(By.id('firstname')).sendKeys('Blaise')
    await driver.findElement(By.id('lastname')).sendKeys('Pascal')
    await driver.findElement(By.id('email_address')).sendKeys('blaisepascal@yopmail.com')
    await driver.findElement(By.id('password')).sendKeys('Qatest123456')
    await driver.findElement(By.id('password-confirmation')).sendKeys('Qatest123456')
    await driver.findElement(By.className('submit')).click()

  } finally {
    await driver.quit()
  }
})()