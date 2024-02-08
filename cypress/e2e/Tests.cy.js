describe('Cypress Playground', function() {
  beforeEach( function() {
    // it('Acesso ao site', function() {
      cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    // })
  })

  it('Verificando .click()', function() {
    cy.get('button[type="submit"]').click()
    cy.contains('#success',`You've been successfully subscribed to our newsletter`)
  })

  it.only('Verificando .type()', function() {
    cy.get('textarea[placeholder="Joe Doe"]')
      .type('Testando o campo "Sign here"')
    cy.contains('#signature', `Testando o campo "Sign here"`)
  })

  it('Verificando .check() and .uncheck()', function() {
    cy.get('textarea[placeholder="Jane Doe"]')
      .type('Tentando o campo Sign Here Jane Doe')
    cy.get('input[type="checkbox"]')
      .check()
      .uncheck()
  })

  it('Verificando radio input fields', function() {
    cy.get('#off')
      .check()
    // could also be: cy.get('input[type="radio"]').check()
  })

  it('Verificando .select()', function() {
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

  it('Verificando cy.request()', function() {
    cy.request('GET', 'https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
      .its('status')
      .should('be.equal', 200)
  })

  it('Verificando invoke().trigger()', function () {
    cy.get('input[type="range"]').invoke('val', 7).trigger('change')
  })

  it(`Verificando type('yyyy-mm-dd').blur()`, function () {
    cy.get('input[type="date"]').type('2024-02-05').blur()
  })

  it(`Verificando Cypress.env('secret')`, function () {
    cy.get('input[type="password"]').type(Cypress.env('password'), { log: false })
  })

  it(`Verificando .should('have.length',n)`, function () {
    cy.get('ul li').should('have.length', 5)
  })

  it('Verificando cy.clock()', function () {
    const now = new Date(2024, 6, 20) //month is 0-indexed
    cy.clock(now)
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.contains('p', '2024-07-20').should('be.visible')
  })

  it('Verificando .then()', function () {
    cy.get('#timestamp')
      .then(element => {
        const value = element[0].innerText
        cy.get('input[type="number"]').type(value)
      })
    cy.get('form > button').click()
    // TODO: check if the Congrats message appears.
  })
})