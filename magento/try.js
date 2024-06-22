const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

async function addProduct(product, expectedTitle) {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get("https://magento.softwaretestingboard.com/");

    // Wait for the page to load (optional)
    await driver.wait(until.titleIs(expectedTitle), 5000);

    // Find the search input by ID (assuming it has an ID of "search")
    const searchInput = await driver.findElement(By.id("search"));

    // Send keys to the search input
    await searchInput.sendKeys(product);
    await searchInput.sendKeys(Key.ENTER);

    console.log(`passed - add product '${product}' passed successfully.`);
  } catch (error) {
    console.log(`failed - add product '${product}' failed`);
  } finally {
    await driver.quit();
  }
}

// Define different test cases with various products
addProduct("Radiant", "Home Page");
addProduct("Another Product", "Search Results");
