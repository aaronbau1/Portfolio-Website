describe('Header Navigation Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it('should scroll to the correct sections when links are clicked', () => {
    cy.clickNavLinkAndAssertHref('Contact', '#contact');
    cy.scrollToSectionAndMakeActive('contact', 'Contact')

    cy.clickNavLinkAndAssertHref('Home', '#home');
    cy.scrollToSectionAndMakeActive('home', 'Home')

    cy.clickNavLinkAndAssertHref('About', '#about');
    cy.scrollToSectionAndMakeActive('about', 'About')

    cy.clickNavLinkAndAssertHref('Projects', '#projects');
    cy.scrollToSectionAndMakeActive('projects', 'Projects')

    cy.clickNavLinkAndAssertHref('Skills', '#skills');
    cy.scrollToSectionAndMakeActive('skills', 'Skills')

    cy.clickNavLinkAndAssertHref('Experience', '#experience');
    cy.scrollToSectionAndMakeActive('experience', 'Experience')
  })
})