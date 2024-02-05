describe('Cypress Playground', function() {
  beforeEach( function() {
    // it('Acesso ao site', function() {
      cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    // })
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

  it('Verificando .select()', function() {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    // cy.get('[id="selection-type"]')
    cy.get('#selection-type')
      .select('standard')
    cy.get('select[multiple]').select(['apple', 'cherry'])
  })

  it('Verificando .selectFile()', function() {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
  })

  it(`Verificando cy.intercept() .as('alias') cy.wait('alias')`, function() {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/todos/1').as('getTODO')
    cy.contains('button', 'Get TODO').click() // this would trigger the request above.
    // cy.get('#intercept > button')
    cy.wait('@getTODO')
  })

  it.only('Verificando cy.request()', function() {
    cy.request('GET', 'https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
      .its('status')
      .should('be.equal', 200)
  })

  it('invoke().trigger()', function () {
    
  })
})