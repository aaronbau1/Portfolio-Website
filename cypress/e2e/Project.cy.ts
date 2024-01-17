import "cypress-real-events";

describe('Project Navigation and Animation Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.scrollToSectionAndMakeActive('projects', 'Projects')
  })

  it('should get the current background color of an element', () => {
    cy.getDataTest('project0').then(($element) => {
      if ($element) {
        // Get the element and its computed styles before hover
        const element = $element[0];
        const computedStylesBeforeHover = window.getComputedStyle(element);
        const backgroundColorBeforeHover = computedStylesBeforeHover.getPropertyValue('background-color');
        expect(backgroundColorBeforeHover).to.equal('rgb(243, 244, 246)');
      }
    });
    cy.getDataTest('project0').realHover();
    cy.getDataTest('project0').then(($element) => {
      if ($element) {
        // Get the element and its computed styles before hover
        const element = $element[0];
        const computedStylesAfterHover = window.getComputedStyle(element);
        const backgroundColorAfterHover = computedStylesAfterHover.getPropertyValue('background-color');
        cy.log(`Background color: ${backgroundColorAfterHover}`)
        expect(backgroundColorAfterHover).to.equal('rgb(229, 231, 235)');
      }
    });
  });
});
