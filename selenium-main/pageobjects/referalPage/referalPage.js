'use strict';

let BasePage = require('./../BasePage');

class ReferalPage extends BasePage {
    constructor() {
        super();
        this.appNameHeader += "/careers/refer-to-epam#form";
        this.submitFormButtom = element(by.class('button-ui-wrapper right-button button-submit'));
        this.successField = element(by.class("form-constructor-ui form-component form-component--standalone              has-error show-success"));

    }
}

module.exports =ReferalPage;