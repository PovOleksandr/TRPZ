'use strict';

let ReferalPage = require('./ReferalPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


let referalPageObject = new ReferalPage();

let referalPageSteps = {

    clickSubmit: () => referalPageObject.clickButton(referalPageObject.submitFormButtom),

    checkSuccess: () => expect(referalPageObject.isElementVisible(referalPageObject.successField)).to.eventually.be.true

};

module.exports = referalPageSteps;