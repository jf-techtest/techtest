/// <reference types="cypress" />

describe('decrement-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should show initial count as 0', () => {
    cy.get('#counter').should('have.text', '0');
  });

  it('decrements by -1 when clicking the decrement button', () => {
    cy.get('#decrement-btn').click()
    cy.get('#counter').should('have.text', '-1');
  });

  it('decrements by -3 clicking the decrement button', () => {
    cy.get('#decrement-btn').click().click().click()
    cy.get('#counter').should('have.text', '-3');
  });

  it('efficiently clicks the decrement button 250 times', () => {
    const times = 250;
    cy.get('#decrement-btn').as('decBtn');

    for (let i = 0; i < times; i++) {
      cy.get('@decBtn').click({ force: true });
    }
  
    cy.get('#counter').should('contain.text', times.toString());
  }); 

  it('sets counter to MIN_SAFE_INTEGER manually', () => {
    
    const min = Number.MIN_SAFE_INTEGER;
  
    cy.get('#counter').invoke('text', `Counter: ${min}`);
    cy.get('#counter').should('contain.text', min.toString());
  });

});


