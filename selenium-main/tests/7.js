let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
/*
    Scenario: Attending an event
    Given I am on https://www.epam.com/about/who-we-are/events
    When I click "Learn more" button at chosen event(Richmond Financial Industry Forum)
    Then I should get all the information needed to attend the event
*/
Given(/^open the website "([^"]*)"$/, function (string) {  
  browser.get(string);  
});

When('click on "learn more" button by chosen event', function(){
  expect(element(by.class('button-ui bg-color-light-blue')).href ==="https://www.epam.com/about/who-we-are/events/2020/richmond-financial-industry-forum");
  return '"learn more" was clicked';
});

Then('open page about event', function () {
  expect(browser.getCurrentUrl()==='https://www.epam.com/about/who-we-are/events/2020/richmond-financial-industry-forum');
});