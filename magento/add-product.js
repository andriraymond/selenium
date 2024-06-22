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

    // Get text from the search results
    let productText = await driver.wait(until.elementLocated(By.className("product name product-item-name")), 10000);
    let product_value = await productText.getText();

    // Wait for results
    await driver.wait(until.titleIs(searchResult), 5000);

    // Click compliment of the product
    const size_M = await driver.wait(until.elementLocated(By.id("option-label-size-143-item-168")), 15000);
    await size_M.click();
    const color_Blue = await driver.wait(until.elementLocated(By.id("option-label-color-93-item-50")), 5000);
    await color_Blue.click();
    
    // Hover the button so that the Ad to Cart button is visible
    const actions = driver.actions();
    await actions.move({ origin: size_M }).perform();

    await driver.findElement(By.className("action tocart primary")).click();
    await driver.sleep(5000);

    await driver.findElement(By.className("action showcart")).click();
    await driver.sleep(5000);

    // Scroll to cart button
    const checkoutButton = await driver.findElement(By.id("top-cart-btn-checkout"));
    await driver.executeScript("arguments[0].scrollIntoView(true);",checkoutButton);
    
    // Tunggu hingga elemen bisa diinteraksi
    await driver.wait(until.elementIsVisible(checkoutButton), 5000);
    await driver.wait(until.elementIsEnabled(checkoutButton), 5000);
    
    await checkoutButton.click();
    await driver.wait(until.titleIs('Checkout'), 50000);
    
    // Verify in checkout page containt product value 
    assert.strictEqual(product_value, "Radiant Tee", "Element does not have the expected value");
    await driver.sleep(5000);

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
