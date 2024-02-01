describe('Cypress Playground', function() {
  it('Acesso ao site', function() {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')

    cy.get('button').click()
  })
})