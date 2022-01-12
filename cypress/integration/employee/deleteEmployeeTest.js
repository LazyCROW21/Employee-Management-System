/* ==== Test Created with Cypress Studio ==== */
it('DeleteEmployee', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('localhost:8080/#');
  cy.get('#floatingInput').clear();
  cy.get('#floatingInput').type('hardik@gmail.com');
  cy.get('#floatingPassword').clear();
  cy.get('#floatingPassword').type('admin{enter}');
  cy.get('#loginBtn').click();
  cy.get('.fa-solid').click();
  cy.get(':nth-child(5) > .itemBtn > .ms-2').click();
  cy.get('#sn-emp > .text-dark > :nth-child(1) > a').click();
  cy.get(':nth-child(1) > :nth-child(6) > .btn-group > .btn-danger > .fas').click();
  cy.get('.modal-footer > .btn-danger').click();
  /* ==== End Cypress Studio ==== */
});