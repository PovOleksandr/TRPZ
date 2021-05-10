const { Then } = require('@cucumber/cucumber');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Asking a question
    Given I am on https://www.epam.com/about/who-we-are/contact
    When I fill "JUST ASK US ANYTHING" form and click "SUBMIT" button
    Then this form should be sent and reviewed
*/
Given(/^open the website "([^"]*)"$/, function (string) {  
  browser.get(string);  
});

When('clicking submit button', function(){
  element(by.class('button-ui')).click();
  return '"Submit" was clicked';
});


Then('open info about choosen country', function () {
  expect(element(by.class("form-component__success")).isDisplayed().toBe(true));
});