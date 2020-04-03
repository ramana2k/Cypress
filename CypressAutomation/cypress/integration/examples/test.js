/// <reference types="Cypress" />
describe('Ramana First Test Suite', function () {
  it('Ramana first test case', function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 4)
    cy.get('.products').find('.product').should('have.length', 4)
    //click based on the index
    cy.get('.products').find('.product').eq(3).contains('ADD').click()
    //click based on the product using the name not on index

    cy.get('.products').find('.product').each(
      ($e1, index, $list) => {
        const vegName = $e1.find('h4.product-name').text()
        if (vegName.includes('Capsicum') ) {
          $e1.find('button').click()
  
        }
      })
    


  }) 
}) 
