let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Getting to HomePage
    Given I am on any page of https://www.epam.com/
    When I click "<epam>" sign
    Then I should get redirected to the main page
*/

Given(/^open the website "([^"]*)"$/, function (string) {  
  browser.get(string);  
});

When('click on <epam>', function(){
  element(by.class('header__logo-container')).click();
  return '<epam> clicked';
});

Then('redirect to main page', function () {
  expect(browser.getCurrentUrl()==='https://www.epam.com');
});
