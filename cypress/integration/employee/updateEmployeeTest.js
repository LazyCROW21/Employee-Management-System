/* ==== Test Created with Cypress Studio ==== */
it('UpdateEmployee', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('localhost:8080/#/');
  cy.get('#floatingInput').clear();
  cy.get('#floatingInput').type('hardik@gmail.com');
  cy.get('#floatingPassword').clear();
  cy.get('#floatingPassword').type('admin');
  cy.get('#loginBtn').click();
  cy.get('.sideNavBtn').click();
  cy.get(':nth-child(5) > .itemBtn > .ms-2').click();
  cy.get('#sn-emp > .text-dark > :nth-child(1)').click();
  cy.get('#sn-emp > .text-dark > :nth-child(1) > a').click();
  cy.get(':nth-child(1) > :nth-child(6) > .btn-group > .btn-info > .fas').click();
  cy.get(':nth-child(2) > :nth-child(2) > .form-control').click();
  cy.get(':nth-child(2) > :nth-child(2) > .form-control').clear();
  cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('OpticalFIBER');
  cy.get('.btn-success').click();
  cy.get('.btn-success').click();
  cy.get('#editEMPModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
  /* ==== End Cypress Studio ==== */
});