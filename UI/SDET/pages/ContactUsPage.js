// module.exports = {
//     url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
//     elements: {
//       subjectHeadingDropdown: '#id_contact',
//       emailInput: '#email',
//       orderReferenceInput: '#id_order',
//       attachFileInput: '#fileUpload',
//       messageTextarea: '#message',
//       submitButton: '#submitMessage',
//       successMessage: '.alert-success' 
//     }
//   };
  module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
    elements: {
      subjectHeadingDropdown: '#id_contact',
      emailInput: '#email',
      orderReferenceInput: '#id_order',
      attachFileInput: '#fileUpload',
      messageTextarea: '#message',
     
      submitButton: '#submitMessage',
      successMessage: '.alert.alert-success',
      errorMessage: '.alert.alert-danger'
    },
  
    commands: [{
      fillFormAndSubmit(subjectHeading,email, message) {
        const contactUs = this;
        contactUs.click('@subjectHeadingDropdown')
        .waitForElementVisible('option[value="1"]', 2000) 
        .click('option[value="1"]')
        .setValue('@emailInput', email)
        .setValue('@messageTextarea', message)
        .click('@submitButton');

      return contactUs;
},
  

  fillFormAndSubmitWithAllFields( subjectHeading,email,orderReference,filePath,message) {
    const contactUs = this;
  
     contactUs.click('@subjectHeadingDropdown')
    .waitForElementVisible('option[value="1"]', 2000) 
    .click('option[value="1"]')
    .setValue('@emailInput', email)
    .setValue('@orderReferenceInput', orderReference)
    .setValue('@messageTextarea', message)
    .setValue('@attachFileInput', require('path').resolve(__dirname, '..', 'files', 'test.txt'))
    .click('@submitButton');

    return contactUs;
      }
    }]
  };
  
  