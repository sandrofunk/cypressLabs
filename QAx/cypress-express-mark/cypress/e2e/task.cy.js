/// <reference types="cypress" />

describe('tasks', ()=> {

    it('deve cadastrar uma nova tarefa', ()=> {
        cy.visit('http://127.0.0.1:3000')

        cy.get('input[placeholder="Add a new Task"]')
            .type("Ler um livro")

    })

})