describe('My first test', () => {
  it('Does not do much!', () => {
   expect(true).to.equal(true);
  })
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })

  it('check the content Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})
