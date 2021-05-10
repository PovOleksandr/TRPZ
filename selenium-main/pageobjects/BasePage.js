'use strict';

class BasePage {
    constructor() {
        this.appNameHeader = $('.fill>a');
    }

    isElementVisible(element) {
        return element.isDisplayed();
    }

    clickButton(buttonName) {
        buttonName.click();
    }

}

module.exports = BasePage;