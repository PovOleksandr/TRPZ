let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Changing site language
    Given I am on any page of https://www.epam.com/
    When I open Global("lan") list and click on chosen language
    Then webpage should get translated into chosen language
*/
Given(/^open the website "([^"]*)"$/, function (string) {
  browser.get(string);
});

When('click on "Global("lan")"', function(){
  element(by.buttonText('Global (EN)')).click();
  return '"Global" button was clicked';
});

Then('open language list', function () {
  element.all(by.class('location-selector__link')).get(7).click();
  return 'Ukranian language selected';
});

Then('get website in Ukrainian', function(){
  expect(browser.getCurrentUrl()==='https://careers.epam.ua/');
});