
  module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php',

    elements: {
        searchInput: '#search_query_top',
        searchButton: 'button[name="submit_search"]',
      searchResults: '#product_list', // Selector for the search results container
      // Other page elements...
    },
    
    commands: [{
      verifySearchResultsContainDress: function() {
        const searchResults = this.elements.searchResults;
        
        // Verify if the search results container exists
        this.waitForElementVisible('@searchResults', 10000, function() {
          console.log('Search results container is visible.');
        });
  
        // Verify each item in the search results container contains the word "dress"
        this.elements('css selector', '@searchResults .ajax_block_product', function(items) {
          items.value.forEach(function(item) {
            this.elementIdText(item.ELEMENT, function(result) {
              const itemText = result.value.toLowerCase();
              if (itemText.includes('dress')) {
                console.log('Item contains the word "dress".');
              } else {
                console.error('Item does not contain the word "dress".');
              }
            });
          });
        });
  
        return this;
      }
    }]
  };
  