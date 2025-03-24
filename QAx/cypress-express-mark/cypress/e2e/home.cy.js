/// <reference types="cypress" />

describe('home', () => {
  it('web app deve estar online', () => {
    cy.visit('http://127.0.0.1:3000')

    cy.title().should('eql', 'Gerencie suas tarefas com Mark L')
  })
})
