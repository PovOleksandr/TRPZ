'use strict';

let contactPageSteps = require('./../pageobjects/contactPage/contactPage.steps.js');

module.exports = function () {

    //5

    this.When(/^I click on Submit form $/, contactPageStepsPageSteps.clickSubmitForm());

    this.Then(/^I get success page$/, contactPageSteps.checkSuccess());



};