describe('Prueba de apertura de google',()=>{
    it('Abre la pagina de google correctasmente',()=>{
        cy.visit('https://www.google.com');
        cy.title().should('eq','Google')
    })
});
