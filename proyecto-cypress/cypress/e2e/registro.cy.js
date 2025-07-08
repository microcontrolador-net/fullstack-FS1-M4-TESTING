describe("Registro de usuario", () => {
    beforeEach(() => {
//        cy.visit("http://127.0.0.1:5500/index.html"); // Asegúrate de usar tu ruta local
        cy.visit("http://127.0.0.1:5500/cypress/e2e/index.html"); // Asegúrate de usar tu ruta local
  });

    it("Debe registrar correctamente si todos los datos son correctos", () => {
        cy.get("#email").type("test@example.com");
        cy.get("#password").type("123456");
        cy.get("#confirmPassword").type("123456");
        cy.get("button").click();
        cy.get("#mensaje").should("have.text", "Registro exitoso.");
    });
});
