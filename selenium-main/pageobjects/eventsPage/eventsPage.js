'use strict';

let BasePage = require('./../BasePage');

class EventsPage extends BasePage {
    constructor() {
        super();
        this.appNameHeader += "/about/who-we-are/events";
        this.learnButton = element(by.class('button-ui bg-color-light-blue'));

    }
}

module.exports =EventsPage;