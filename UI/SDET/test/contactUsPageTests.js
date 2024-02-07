// const ContactUsPage = require('../pages/ContactUsPage.js');

// module.exports = {
//   '@tags': ['contactus'],

//   'Contact Us Form Submission Test': function (browser) {
//     const contactUs = browser.page.ContactUsPage();

//     contactUs.navigate()
//     .waitForElementVisible('body', 10000) 

//     contactUs.click('@subjectHeadingDropdown')
//     .waitForElementVisible('option[value="1"]', 2000) 
//     .click('option[value="1"]')
//       .setValue('@emailInput', 'test@example.com')
//       .setValue('@orderReferenceInput', '12345')
//       .setValue('@messageTextarea', 'This is a test message')
//       .setValue('@attachFileInput', require('path').resolve(__dirname, '..', 'files', 'test.txt'))
//       .click('@submitButton')
// .end();
//   }
// };
const ContactUsPage = require('../pages/ContactUsPage.js');
const testData = require('../testdata/contactUsTestData.js');

module.exports = {
  '@tags': ['contactus'],

  'Contact Us Form Submission Test': function (browser) {
    const contactUs = browser.page.ContactUsPage();

    contactUs.navigate();


  // Test entering only subject heading
   contactUs.fillFormAndSubmit(
    testData.validData.subjectHeading,
     '',
     ''
    );
        // Test entering only email
    contactUs.fillFormAndSubmit(
      '',
      testData.validData.email,
      ''
    );

     // Test entering only message
     contactUs.fillFormAndSubmit(
      '',
      
      '',
      testData.validData.message
    );

       // Test submission with all fields filled out
    contactUs.fillFormAndSubmitWithAllFields(
      testData.validData.subjectHeading,
      testData.validData.email,
      testData.validData.orderReference,
      testData.validData.message,
      testData.validData.filePath
      
    );
    contactUs.navigate();
    // Test valid submission with required fields only
    contactUs.fillFormAndSubmit(
      testData.validData.subjectHeading,
      testData.validData.email,
      testData.validData.message
    );

   


    // Test submission with optional fields filled out
    // contactUs.fillFormAndSubmit(
    //   // testData.validData.subjectHeading,
    //   testData.validData.email,
    //   testData.validData.message,
    //   testData.validData.filePath
    // );

 

    browser.end();
  }
};

