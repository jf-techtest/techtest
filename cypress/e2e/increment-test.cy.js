/// <reference types="cypress" />

describe('increment-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should show initial count as 0', () => {
    cy.get('#counter').should('have.text', '0');
  });

  it('increments by 1 when clicking the increment button once', () => {
    cy.get('#increment-btn').click()
    cy.get('#counter').should('have.text', '1');
  });

  it('increments by 3 when clicking the increment button three times', () => {
    cy.get('#increment-btn').click().click().click()
    cy.get('#counter').should('have.text', '3');
  });

  it('efficiently clicks the increment button 250 times', () => {
  
    const times = 250;
  
    cy.get('#increment-btn').as('incBtn');
  
    for (let i = 0; i < times; i++) {
      cy.get('@incBtn').click({ force: true });
    }
  
    cy.get('#counter').should('contain.text', times.toString());
  }); 

  it('sets counter to MAX_SAFE_INTEGER manually', () => {
    const max = Number.MAX_SAFE_INTEGER;
  
    cy.get('#counter').invoke('text', `Counter: ${max}`);
    cy.get('#counter').should('contain.text', max.toString());
  });

});


