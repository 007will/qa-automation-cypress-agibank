const { teste_agibank } = require('../dataTest/data_hml.js');

describe('Cenário de Testes Agibank', () => {

  it('Cadastrar Newsletters com sucesso', () => {
    cy.acessarSiteAgibank();
    cy.irParaNewsletters();
    cy.cadastroNewsletters(teste_agibank.emailSucesso);
    cy.wait(3000);
    cy.contains(teste_agibank.mensagemSucesso).should('be.visible');
  });

  it('Validar e-mail inválido', () => {
    cy.acessarSiteAgibank();
    cy.irParaNewsletters();
    cy.cadastroNewsletters(teste_agibank.emailInvalido);
    cy.contains(teste_agibank.mensagemErro).should('be.visible');
  });

  it('Pesquisar notícia', () => {
    cy.acessarSiteAgibank();
    cy.pesquisarNoticia(teste_agibank.tituloNoticia);
    cy.contains(teste_agibank.tituloNoticia).should('be.visible');
  });

});
