let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Contacting global headquarters
    Given I am on any page of https://www.epam.com/
    When I click "Contacts"
    Then I should be able to get contact info page
*/
Given(/^open the website "([^"]*)"$/, function (string) {  
  browser.get(string);  
});

When('click on "Контакти" button', function(){
  element(by.class("top-navigation__main-link")).click();
  return '"Контакти" was clicked';
});

Then('open contacts page', function () {
  expect(browser.getCurrentUrl()==='https://careers.epam.ua/company/contact');
});