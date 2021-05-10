'use strict';

let referalPageSteps = require('./../pageobjects/referalPage/referalPage.steps.js');

module.exports = function () {

    //8

    this.When(/^I click on submit form $/, referalPageSteps.clickSubmit());

    this.Then(/^I get success field$/, referalPageSteps.checkSuccess());

};
