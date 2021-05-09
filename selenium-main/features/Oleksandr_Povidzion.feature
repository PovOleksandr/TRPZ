Feature: EPAM website


  Scenario: Getting to HomePage
    Given I am on any page of https://www.epam.com/
    When I click "<epam>" sign
    Then I should get redirected to the main page

  Scenario: Changing site language
    Given I am on any page of https://www.epam.com/
    When I open Global("lan") list and click on chosen language
    Then webpage should get translated into chosen language

  Scenario:  Using search option
    Given I am on any page of https://www.epam.com/
    When I open search form and type in "Blockchain"
    Then I should get a list of results for "Blockchain"

  Scenario: Contacting global headquarters
    Given I am on https://www.epam.com/about/who-we-are/contact
    When I call the contact number
    Then I should be able to speak to EPAM workers

  Scenario: Asking a question
    Given I am on https://www.epam.com/about/who-we-are/contact
    When I fill "JUST ASK US ANYTHING" form and click "SUBMIT" button
    Then this form should be sent and reviewed

  Scenario: Searching for job
    Given I am on https://www.epam.com/careers/job-listings
    When I fill and submit a form
    Then I should get a list of suitable jobs

  Scenario: Attending an event
    Given I am on https://www.epam.com/about/who-we-are/events
    When I click "MEET US" button at chosen event
    Then I should get all the information needed to attend the event

  Scenario: Refering to EPAM in US
    Given I am on https://www.epam.com/careers/refer-to-epam#form
    When I fill the form and submit it refering a proper person
    Then I should get 2000 US dollars 