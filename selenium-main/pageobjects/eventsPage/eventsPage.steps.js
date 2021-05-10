'use strict';

let EventsPage = require('./EventsPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


let eventsPageObject = new EventsPage();

let eventsPageSteps = {

    clickLearnButton: (href) => eventsPageObject.clickButton(eventsPageObject.learnButton.href=href),

    checkWebPage: (url) => expect(browser.getCurrentUrl()===url).to.eventually.be.true
};

module.exports = eventsPageSteps;