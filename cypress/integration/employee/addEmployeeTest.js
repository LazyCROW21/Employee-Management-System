/// <reference types="cypress" />

beforeEach(() => {
    cy.restoreLocalStorage();
});

afterEach(() => {
    cy.saveLocalStorage();
});

describe('Check Employee Module page', () => {
    it('Visit home url ', () => {
        cy.visit('http://localhost:8080/#/login');
        cy.url().should('include', 'http://localhost:8080/#/login');
    });

    it('should enter email', () => {
        cy.get('#floatingInput').type('hardik@gmail.com');
    });

    it('should enter password', () => {
        cy.get('#floatingPassword').type('admin');
    })

    it('should click on login', () => {
        cy.get('#loginBtn').click();
    });

    it('should click on menu btn', () => {
        cy.get('.sideNavBtn').click();
    });

    it('should contain employees tab in menu', () => {
        cy.contains('Employees').click();
    });

    it('should contain add employee sub tab in sub menu', () => {
        cy.contains('Add Employee').click();
    });

    it('should type first name', () => {
        cy.get('#firstNameInput').type('Malvik');
    })

    it('should type last name', () => {
        cy.get('#lastNameInput').type('Kardam');
    })

    it('should type phone', () => {
        cy.get('#phoneInput').type('9234567897');
    })

    it('should type email', () => {
        cy.get('#emailInput').type('hardik@gmail.com');
    })

    it('should select department',()=>{
        cy.get(':nth-child(5) .form-select').select(1);
    })

    it('should select designation',()=>{
        cy.get(':nth-child(6) .form-select').select(1)
    })

    it('should type salary',()=>{
        cy.get('#salaryInput').type('5000');
    });

    it('submit form',()=>{
        cy.get('#addEMPBtn').click();
    });
});