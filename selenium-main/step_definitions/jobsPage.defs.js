'use strict';

let jobsPageSteps = require('./../pageobjects/jobsPage/jobsPage.steps.js');

module.exports = function () {

    //6

    this.When(/^I fill in 'keyword' form $/, jobsPageSteps.checkForm("Design"));

    this.Then(/^I click Find button$/, jobsPageSteps.clickFindButton());

    this.Then(/^Suitable jobs are displayed$/, jobsPageSteps.checkResultsDisplayed());



};