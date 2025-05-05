describe("Testes de criação, registro e login", () => {
  it("Teste criação de usuario com sucesso", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Iury")
    cy.get('#Text1').type("Teixeira")
    cy.get('#username').type("iurai")
    cy.get('#password').type("12345678")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("have.text", "Registration successful")
  })
  it("Teste criação de usuario com Falha", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Iury")
    cy.get('#Text1').type("Teixeira")
    cy.get('#username').type("iurai")
    cy.get('.btn-primary').should("be.disabled")
  })
  it("Teste login com sucesso", () => {
    let infos = criarUser()
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("have.text", "Hi " + infos[0]+ "!")
  })
  it("Teste de login após deletar o usuario", () => {
    let infos = criarUser()
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("have.text", "Hi " + infos[0]+ "!")
    cy.wait(1000)
    cy.get('.ng-binding > a').click()
    cy.wait(1000)
    cy.get('.btn').click()
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("have.text", "Username or password is incorrect")
  })
})

function criarUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()
  let ID = hora + minuto + segundo + "ID"
  let senha = hora + minuto + segundo + "SENHA"
  let infos = [ID, senha]

  cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
  cy.get('.btn-link').click()
  cy.get('#firstName').type(ID)
  cy.get('#Text1').type(ID)
  cy.get('#username').type(ID)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("have.text", "Registration successful")

  return infos
}

