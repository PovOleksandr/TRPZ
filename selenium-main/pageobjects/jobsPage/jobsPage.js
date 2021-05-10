'use strict';

let BasePage = require('./../BasePage');


class JobsPage extends BasePage {
    constructor() {
        super();
        this.appNameHeader += "/careers/job-listings";
        this.jobSearchReqValue = element(by.class("recruiting-search__input js-autocomplete")).value;
        this.findButton = element(by.class("recruiting-search__submit"));
        this.results = element(by.class("search-result__list"));

    }



}

module.exports =JobsPage;