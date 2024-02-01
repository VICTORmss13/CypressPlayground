describe('Cypress Playground', function() {
  beforeEach( function() {
    it('Acesso ao site', function() {
      cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    })
  })

  it('Verificando .click()', function() {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('button[type="submit"]').click()
    // could be: cy.contains('button','Subscribe').click() 
  })

  it('Verificando .type()', function() {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('textarea[placeholder="Joe Doe"]')
      .type('Testando o campo "Sign here"')
  })

  it('Verificando .check() and .uncheck()', function() {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('textarea[placeholder="Jane Doe"]')
      .type('Tentando o campo Sign Here Jane Doe')
    cy.get('input[type="checkbox"]')
      .check()
      .uncheck()
  })

  it('Verificando radio input fields', function() {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('#off')
      .check()
    // could also be: cy.get('input[type="radio"]').check()
  })

  it.only('Verificando .select()', function() {
    cy.get('select')
      // .select('standard')
  })

})