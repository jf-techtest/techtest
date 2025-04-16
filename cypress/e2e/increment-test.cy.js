/// <reference types="cypress" />

describe('increment-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('increments when clicking the increment button', () => {
    cy.get('#increment-btn').click()

    cy.get('#counter').should('have.text', '1');
  });
});
