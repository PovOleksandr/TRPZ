'use strict';

let indexPageSteps = require('./../pageobjects/indexPage/indexPage.steps.js');

module.exports = function () {

    //1

    this.When(/^I click on <epam> logo $/, indexPageSteps.clickEpamLogo());

    this.Then(/^I get redirected to main page$/, indexPageSteps.checkWebPage('https://www.epam.com'));

   //2

    this.When(/^I click on 'Global(En)' button $/, indexPageSteps.clickGlobalLan());

    this.Then(/^List of languages opens and i click Ukrainian$/, indexPageSteps.clickUkrainianOption());

    this.Then(/^I get Ukrainian version of the website$/, indexPageSteps.checkWebPage('https://careers.epam.ua/'));

    //3

    this.When(/^I click on 'Search' button $/, indexPageSteps.clickSearchButton());

    this.Then(/^Search field opens$/, indexPageSteps.checkSearchField());

    this.Then(/^I type in request$/, indexPageSteps.checkSearchValue("Blockchain"));

    this.Then(/^I click search submit button$/, indexPageSteps.clickSearchSubmitButton());

    this.Then(/^I get requested information$/, indexPageSteps.checkWebPage("https://www.epam.com/search?q=Blockchain"));

    //4

    this.When(/^I click on 'Contacts' button $/, indexPageSteps.clickContactsButton());

    this.Then(/^I get redirected to Contacts page$/, indexPageSteps.checkWebPage('https://www.epam.com/company/contact'));

};