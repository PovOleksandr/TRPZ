'use strict';

let BasePage = require('./../BasePage');


class IndexPage extends BasePage {
    constructor() {
        super();
        this.logo = element(by.class('header__logo-container'));
        this.language = element(by.buttonText('Global (EN)'));
        this.ukrainian = element.all(by.class('location-selector__link')).get(7);
        this.searchBut = element(by.class('header-search-ui header__control'));
        this.searchField = element(by.class('header-search__panel'));
        this.searchValue = element(by.class("search-results__input-holder")).value;
        this.searchSubmit = element(by.class("header-search__submit"));
        this.contactsButton = element(by.class("top-navigation__main-link"));
    }



}

module.exports = IndexPage;