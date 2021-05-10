let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Searching for job
    Given I am on https://www.epam.com/careers/job-listings
    When I fill and submit a form("Design" keyword in test)
    Then I should get a list of suitable jobsfill "keyword" form'
*/
Given(/^open the website "([^"]*)"$/, function (string) {  
  browser.get(string);  
});

When('fill "keyword" form', function(){
  expect(element(by.class("recruiting-search__input js-autocomplete")).value ==="Design")
  return '"Design" was typed in the form';
});

Then('click "Find" button', function () {
  element(by.class("recruiting-search__submit")).click();
  return '"Find" was clicked';
});

Then('displaying suitable jobs', function () {
  expect(element(by.class("search-result__list")).isDisplayed().toBe(true));
});