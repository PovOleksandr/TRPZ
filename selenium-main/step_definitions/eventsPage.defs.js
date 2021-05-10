'use strict';

let eventsPageSteps = require('./../pageobjects/eventsPage/eventsPage.steps.js');

module.exports = function () {

    //7

    this.When(/^I click learn button on chosen event $/, eventsPageSteps.clickLearnButton("https://www.epam.com/about/who-we-are/events/2020/richmond-financial-industry-forum"));

    this.Then(/^I redirect to thats events page$/, eventsPageSteps.checkWebPage("https://www.epam.com/about/who-we-are/events/2020/richmond-financial-industry-forum"));

};
