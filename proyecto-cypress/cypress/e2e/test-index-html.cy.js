describe("test_TDD_test_driven_development", () => {
    it('Busca titulo de la página en index.html',()=>{
        cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html'); // sino utiliza la de cypress
        cy.title().should('eq','Registro de Usuario');
//        cy.url().should('include','"password');
    })
});
