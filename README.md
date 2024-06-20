
# Selenium JS Automation Project

This project contains simple Selenium automation scripts using JavaScript, focused on improving skills and utilizing free time with meaningful learning.

## Prerequisites

- Ensure you have Node.js installed. If not, download and install it from [Node.js official website](https://nodejs.org/).
- Install Selenium WebDriver by running the following command:
  ```bash
  npm install --save selenium-webdriver
  ```

## Getting Started

1. **Clone the Repository**

   First, create a folder where the project will be cloned. Then open Git Bash (or any terminal), and run the command below:

   ```bash
   git clone https://github.com/andriraymond/selenium.git
   ```

2. **Navigate to the Project Folder**

   Open the project folder by running:

   ```bash
   cd selenium
   ```

3. **Open the Project in Visual Studio Code**

   Open the project folder in Visual Studio Code:

   ```bash
   code .
   ```

4. **Install Selenium WebDriver**

   Install the Selenium WebDriver package in this project by running the command below:

   ```bash
   npm install selenium-webdriver
   ```

## Project Structure

The project contains various test cases implemented in JavaScript files. Each file is named according to the functionality it tests.

## Running Test Cases

To run a specific test case, use the `node` command followed by the name of the test case file. For example, to run the login test case, execute:

```bash
node login.js
```

## Example Test Case: Login

Here's a brief overview of what a typical test case might look like. Below is a simplified example of a login test case:

```javascript
const { Builder, By, until } = require('selenium-webdriver');

(async function loginTest() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://magento.softwaretestingboard.com/customer/account/login')
        
        await driver.findElement(By.id('email')).sendKeys('blaisepascal@yopmail.com')await driver.findElement(By.id('pass')).sendKeys('Qatest123456')
        await driver.findElement(By.id('send2')).click()
        await driver.wait(until.titleIs('My Account'), 1000);
    } finally {
        await driver.quit();
    }
})();
```

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name (`git checkout -b feature-description`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-description`).
6. Create a new Pull Request.

## Additional Resources

- [Selenium WebDriver Documentation](https://www.selenium.dev/documentation/en/webdriver/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
