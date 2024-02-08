# SDET
Automation test for MyStore website and API testing.
## UI TEST (My Store NightwatchJS Test)
# 1. Contact Us Page Tests
Different test cases were done on the Contact Us functionality.
 # Test 1:
 - Verify Required Fields Validation.
  Objective:
 - Ensure that the required fields in the Contact Us form are validated properly.
 # Test 2: Verify Optional Fields Submission
  Objective:
 - Confirm that the Contact Us form can be submitted with optional fields filled.
# Test 3: Verify Submission without one of the required fields 
  Objective:
 - Confirm that the Contact Us form can not be submitted without any of the required fields filled
# 2. Homepage Tests
 # Test 1: Verify Search for "Dress".
  Objective:
 - Ensure that the search functionality on the homepage retrieves accurate results for the keyword "dress".

# To Run The UI Tests
## Intro

`nvm` allows you to quickly install and use different versions of node via the command line.

**Example:**
```sh
$ nvm use 11
Now using node v11 
  - run:
          name: Install dependencies
          command: npm install
      - run:
          name: Run contact us UI tests
          command: npx nightwatch test/contactUsPageTests.js

      - run:
          name: Run search UI tests
          command: npx nightwatch test/homePageTests.js
```
