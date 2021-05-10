'use strict';

let IndexPage = require('./IndexPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let indexPageObject = new IndexPage();

let indexPageSteps = {

    clickEpamLogo: () => indexPageObject.clickButton(indexPageObject.logo),

    clickGlobalLan: () => indexPageObject.clickButton(indexPageObject.language),

    clickUkrainianOption: () => indexPageObject.clickButton(indexPageObject.ukrainian),

    clickSearchButton: () => indexPageObject.clickButton(indexPageObject.searchBut),

    checkSearchField: () => expect(indexPageObject.isElementVisible(indexPageObject.searchField)).to.eventually.be.true,

    checkSearchValue: (searchReq) => expect(indexPageObject.searchValue===searchReq).to.eventually.be.true,

    clickSearchSubmitButton: () => indexPageObject.clickButton(indexPageObject.searchSubmit),

    checkWebPage: (url) => expect(browser.getCurrentUrl()===url).to.eventually.be.true,

    clickContactsButton: () => indexPageObject.clickButton(indexPageObject.contactsButton)


};

module.exports = indexPageSteps;