/// <reference types="cypress" />
// ***********************************************

declare namespace Cypress {
  interface Chainable<Subject = any> {
    scrollToSectionAndMakeActive(sectionId: string, linkText: string): Chainable<Subject>;
    clickNavLinkAndAssertHref(linkText: string, expectedHref: string):Chainable<Subject>;
  }
}

Cypress.Commands.add('scrollToSectionAndMakeActive', (sectionId: string, linkText: string) => {
  cy.get(`#${sectionId}`).scrollIntoView().should('be.visible');
  cy.get('nav').contains(linkText).find('span.bg-gray-100').should('exist');
});

Cypress.Commands.add('clickNavLinkAndAssertHref', (linkText: string, expectedHref: string) => {
  cy.window().scrollTo('top')
  cy.get('nav').contains(linkText).click().should('have.attr', 'href', expectedHref);
});