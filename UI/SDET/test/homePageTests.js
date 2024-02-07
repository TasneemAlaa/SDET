const HomePage = require('../pages/HomePage.js');

module.exports = {
  '@tags': ['homepage'],

  'Search for "dress" and verify search results': function (browser) {
    const homePage = browser.page.HomePage();

    // homePage.navigate()
    //   .waitForElementVisible('@searchInput', 10000)
    //   .setValue('@searchInput', 'dress')
    //   .click('@searchButton')
    //   .waitForElementVisible('@searchResults', 10000)
    //   .assert.containsText('@searchResults', 'dress');

    homePage.navigate()
    .waitForElementVisible('@searchInput', 10000)
    .setValue('@searchInput', 'dress')
    .click('@searchButton')
    .waitForElementVisible('@searchResults', 10000);

  // Use execute() method to interact with elements and perform assertions
  browser.elements('css selector', '#product_list > li', function(result) {
    browser.assert.ok(result.value.length > 0, 'Search results contain products');

    result.value.forEach(function(element) {
      browser.elementIdText(element.ELEMENT, function(textResult) {
        browser.assert.ok(textResult.value.includes('Blouse'), 'Search result contains expected product');
        // You can add additional assertions for other product details as needed
      });
    });
  });


    browser.end();
  }
};
