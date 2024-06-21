
const { Builder, Browser, By, actions, Key, until, Actions } = require("selenium-webdriver");
const assert = require("assert");

async function addProduct(product, expectedTitle) {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get("https://magento.softwaretestingboard.com/");

    await driver.wait(until.titleIs(expectedTitle), 5000);

    await driver.findElement(By.id("search")).sendKeys(product);
    await driver.findElement(By.id("search")).sendKeys(Key.ENTER);

    // Initial search results title
    const searchResult = `Search results for: '${product}'`;
    // console.log(searchResult);

    // Wait for results
    await driver.wait(until.titleIs(searchResult), 5000);
    console.log(product);
    
    // Click compliment of the product
    const size_M = await driver.wait(until.elementLocated(By.id("option-label-size-143-item-168")),15000);
    await size_M.click();
    console.log("error 1");
    const color_Blue = await driver.wait(until.elementLocated(By.id("option-label-color-93-item-50")),5000);
    await color_Blue.click();
    console.log("error 2");

    const actions = driver.actions();

    await actions.move({origin: size_M}).perform();
    console.log("error 3");

    // actmoveToElement(e).perform();
    const btn_AddToCart = await driver.wait(until.elementLocated(By.xpath("option-label-color-93-item-50")),5000);
    console.log("error 4");
    await actions.moveToElement(btn_AddToCart).perform();
    
    
    console.log("error 5");
    await btn_AddToCart.click();
    console.log("error 6");

    console.log(`passed - add product '${product}' passed successfully.`);
  } catch (error) {
    console.log(`failed - add product '${product}' failed`);
    console.error(error);
  } finally {
    await driver.quit();
  }
}

// Define different test cases with various credentials and expected results
addProduct("Radiant", "Home Page");
// addProduct();
