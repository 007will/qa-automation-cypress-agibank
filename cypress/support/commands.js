import '@shelex/cypress-allure-plugin';
require('cypress-xpath');

const Url = Cypress.config('baseUrl');

// Acessar Homepage
Cypress.Commands.add('acessarSiteAgibank', () => {
    cy.visit(Url);
    cy.contains('O Agibank').should('be.visible');
    cy.contains('Stories').should('be.visible');
    cy.contains('Últimas do Blog do Agi').should('be.visible');
    cy.contains('Tudo Sobre Empréstimo').should('be.visible');
    cy.wait(3000);
});

// Ir para Newsletters
Cypress.Commands.add('irParaNewsletters', () => {
    cy.contains('a.menu-link', 'O Agibank').trigger('mouseover');
    cy.contains('li a.menu-link', 'Notícias').click({ force: true });
    cy.contains('Se inscreva em nossa Newsletter').should('be.visible');    
});

// Preencher formulário Newsletter
Cypress.Commands.add('cadastroNewsletters', (email) => {
    cy.get('input[type="email"]').type(email);
    cy.get('button[type="submit"]').click();
    //cy.get('button[aria-label="Fechar"]').click();    
});

// Pesquisar notícias
Cypress.Commands.add('pesquisarNoticia', (titulo) => {
    cy.get('a.slide-search.astra-search-icon').click();
    cy.get('input[type="search"]').type(titulo + '{enter}');
});
