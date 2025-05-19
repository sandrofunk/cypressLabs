/// <reference types="cypress" />

// Início do bloco de testes relacionados aos cenários
describe('Cenários de testes', () => {

  // Teste: Verifica se é possível cadastrar uma nova tarefa
  it('Deve cadastrar uma nova tarefa', () => {

    const taskName = 'Ler um livro'

    cy.request({
      url: 'http://localhost:3333/helper/tasks',
      method: 'DELETE',
      body: {name: taskName}
    }).then(response => {
      expect(response.status).to.eq(204)
    })

    // Acessa a aplicação local na porta 3000
    cy.visit('http://localhost:3000/')

    // Encontra o campo de input com o placeholder "Add a new Task" e digita a tarefa "Ler um livro"
    cy.get('input[placeholder="Add a new Task"]')
        .type(taskName)

    cy.contains('button', 'Create').click()

    cy.contains('main', taskName)
      .should('be.visible')

  })

  it('Não deve cadastrar tarefa duplicada', ()=> {

    const task = {
      name: 'Ler um livro',
      is_done: false
    }

    // Dado que tenha uma tarefa duplicada
    cy.request({
      url: 'http://localhost:3333/helper/tasks',
      method: 'DELETE',
      body: { name: task.name }
    }).then(response => {
      expect(response.status).to.eq(204)
    })

    // Dado que tenha uma tarefa duplicada
    cy.request({
      url: 'http://localhost:3333/tasks',
      method: 'POST',
      body: task
    }).then(response => {
      expect(response.status).to.eq(201)
    })

    // Quando faço o cadastro dessa tarefa
    cy.visit('http://localhost:3000/')

    // Encontra o campo de input com o placeholder "Add a new Task" e digita a tarefa "Ler um livro"
    cy.get('input[placeholder="Add a new Task"]')
      .type('Ler um livro')

    cy.contains('button', 'Create').click()

    // Então vejo a mensagem de duplicidade

    cy.get('.swal2-html-container')
      .should('be.visible')
      .should('have.text', 'Task already exists!')
  })

})
