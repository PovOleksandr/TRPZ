'use strict';

let ContactPage = require('./ContactPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let contactPageObject = new ContactPage();

let contactPageSteps = {

    clickSubmitForm: () => contactPageObject.clickButton(contactPageObject.submit),

    checkWebPage: (url) => expect(browser.getCurrentUrl()===url).to.eventually.be.true,

    checkSuccess: () => expect(contactPage.formSuccess).to.eventually.be.true
};

module.exports = contactPageSteps;