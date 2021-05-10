'use strict';

let BasePage = require('./../BasePage');


class ContactPage extends BasePage {
    constructor() {
        super();
        this.appNameHeader += "/about/who-we-are/contact";
        this.submit = element(by.class('button-ui'));
        this.formSuccess = element(by.class("form-component__success"));

    }



}

module.exports = ContactPage;