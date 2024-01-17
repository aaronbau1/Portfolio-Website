/// <reference types="cypress" />
// ***********************************************

declare namespace Cypress {
  interface Chainable<Subject = any> {
    scrollToSectionAndMakeActive(sectionId: string, linkText: string): Chainable<Subject>;
    clickNavLinkAndAssertHref(linkText: string, expectedHref: string):Chainable<Subject>;
    getDataTest(dataTestSelector: string):Chainable<Subject>;
  }
}

Cypress.Commands.add('scrollToSectionAndMakeActive', (sectionId: string, linkText: string) => {
  //test that page scrolls to correct section
  cy.get(`#${sectionId}`).scrollIntoView().should('be.visible');

  //test active section css changes
  cy.get('nav').contains(linkText).find('span.bg-gray-100').should('exist');
  cy.get('nav').contains(linkText).should('have.class', 'text-gray-950').should('not.have.class', 'text-gray-500'); 
});

Cypress.Commands.add('clickNavLinkAndAssertHref', (linkText: string, expectedHref: string) => {
  cy.window().scrollTo('top')
  cy.get('nav').contains(linkText).click().should('have.attr', 'href', expectedHref);
});

Cypress.Commands.add('getDataTest', (dataTestSelector) => {
  return cy.get(`[data-test="${dataTestSelector}"]`)
})
