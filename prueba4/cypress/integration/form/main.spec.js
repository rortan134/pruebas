// Agrega tipados estilo TypeScript
// https://docs.cypress.io/guides/tooling/IDE-integration#Triple-slash-directives
/// <reference types="cypress" />

describe("Comprobar funcionamiento del formulario", () => {
    it("Contiene elementos de input para correo, contraseña y repetición de contraseña", () => {
        cy.visit("http://127.0.0.1:5500/prueba4/index.html");
        // Referenciar a elementos de <label> conectados a los inputs con atributos de "for" y "id"
        cy.get("[for='email']").contains("Correo electrónico");
        cy.get("[for='password']").contains("Contraseña");
        cy.get("[for='repeat-password']").contains("Repita contraseña");
    });
});

describe("Inputs de contraseña deben funcionar correctamente", () => {
    it("Inputs de contraseña funcionan correctamente cuando las contraseñas coinciden", () => {
        cy.visit("http://127.0.0.1:5500/prueba4/index.html");

        cy.get("#email").type("ejemplo@gmail.com");
        cy.wait(1000);
        cy.get("#email").should("have.value", "ejemplo@gmail.com");

        cy.get("#password").type("123456789");
        cy.wait(1000);
        cy.get("#password").should("have.value", "123456789");

        cy.get("#repeat-password").type("123456789");
        cy.wait(1000);
        cy.get("#repeat-password").should("have.value", "123456789");

        // No hay ningun error
        cy.get("#password-message").should("not.be.visible");
    });

    it("Inputs de contraseña funcionan correctamente cuando las contraseñas no coinciden", () => {
        cy.visit("http://127.0.0.1:5500/prueba4/index.html");

        cy.get("#email").type("ejemplo@gmail.com");
        cy.wait(1000);
        cy.get("#email").should("have.value", "ejemplo@gmail.com");

        cy.get("#password").type("123456789");
        cy.wait(1000);
        cy.get("#password").should("have.value", "123456789");

        cy.get("#repeat-password").type("987654321");
        cy.wait(1000);
        cy.get("#repeat-password").should("have.value", "987654321");

        // Hay un error
        cy.get("#password-message").should("be.visible");
    });
});
