describe('Prueba de apertura de wikipedia',()=>{
    it('Abre la pagina de google correctasmente',()=>{
        cy.visit('https://www.wikipedia.com');
        cy.title().should('eq','Wikipedia')
    })
});
