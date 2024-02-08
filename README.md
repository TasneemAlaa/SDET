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

## Mock User Auth API Test Suite
# Overview
This test suite validates all the API routes provided by the mock-user-auth module. It employs supertest for making HTTP requests.
- Some of the test cases

## Test Cases
# 1. Route: /register
# Test 1: Valid Registration
- Objective:
  Test registration with valid user data.
# Test 2: Invalid Registration (Existing User)
- Objective:
   Test registration with already existing user credentials.

# To Run The API Tests

```sh
    # Install ts-node as a development dependency
      - run:
          name: Install ts-node
          command: npm install --save-dev ts-node

      # Install mock-user-auth and supertest as regular dependencies
      - run:
          name: Install mock-user-auth and supertest
          command: npm install mock-user-auth supertest

      # Install jest as a development dependency
      - run:
          name: Install jest
          command: npm install --save-dev jest

      # Install jest-html-reporters as a development dependency
      - run:
          name: Install jest-html-reporters
          command: npm install --save-dev jest-html-reporters

      # Run your tests
      - run:
          name: Run API tests
          command: npm test
```
