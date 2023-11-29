describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:1337')
  })
})

describe('Product interaction test', () => {
  it('Clicks on a product and checks the product info page', () => {
    // Visit the page
    cy.visit('http://localhost:1337');

    // Wait for products to load
    cy.get('.product-list').should('not.be.empty');

    // Click on the first product
    cy.get('.product-item').first().click();

    // Wait for the product info page to be visible
    cy.get('.product-info').should('be.visible');
  });
});