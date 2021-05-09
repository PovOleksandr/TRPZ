let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario:  Using search option
    Given I am on any page of https://www.epam.com/
    When I open search form and type in "Blockchain"
    Then I should get a list of results for "Blockchain"
*/

Given(/^open the website "([^"]*)"$/, function (string) {
  browser.get(string);  
});

When('click on search button', function(){
  element(by.class('header-search-ui header__control')).click();
  return 'search button was clicked';
});

Then('open search field', function () {
  expect(element(by.class('header-search__panel')).isDisplayed().toBe(true));
  return 'search field is opened';
});

Then('typing in "Blockchain"', function(){
  expect(element(by.class("search-results__input-holder")).value ==="Blockchain")
  return 'Blockchain was typed in';
});

Then('Clicking on "search" button', function(){
  element(by.class("header-search__submit")).click();
  return '"Search" was clicked';
});

Then('open page with search results', function () {
  expect(browser.getCurrentUrl()==='https://careers.epam.ua/search?q=Blockchain');
});