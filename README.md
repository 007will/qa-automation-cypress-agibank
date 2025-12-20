# Projeto de Testes Automatizados - Cypress Desafio AgiBank

Este repositório contém uma suíte de testes automatizados utilizando **Cypress**, organizada para testes do site AgiBank.

## 📁 Estrutura do Projeto

```
cypress/
├── dataTest/
│   └── data_hml.js        # Massa dinâmica usando Faker para gerar e-mails e mensagens
├── e2e/
│   └── agibank.cy.js      # Cenários de testes E2E do blog Agibank
├── fixtures/
│   └── example.json       # Exemplo de fixture padrão
├── support/
│   ├── commands.js        # Comandos customizados (acesso, newsletter, busca)
│   └── e2e.js             # Configuração global
cypress.config.js           # Configuração: viewport, baseUrl, plugins
package.json                # Dependências e scripts
```

cypress/
├── dataTest/
│   └── data_hml.js        # Massa de dados utilizada nos testes
├── e2e/
│   └── agibank.cy.js      # Cenários de testes E2E
├── fixtures/
│   └── example.json       # Exemplo padrão do Cypress
├── support/
│   ├── commands.js        # Comandos customizados Cypress
│   └── e2e.js             # Configurações globais dos testes
cypress.config.js          # Configurações do Cypress
package.json               # Dependências do projeto

````

## 🚀 Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (versão LTS recomendada)
- **npm** ou **yarn**

## ⚙️ Configuração do Cypress
O arquivo `cypress.config.js` contém:
- **Viewport:** 1920x1080
- **baseUrl:** https://blog.agibank.com.br
- **Plugins:** integração via `setupNodeEvents`

## 📦 Instalação

### 📥 Dependências necessárias
Para que o ambiente funcione sem erros, é necessário instalar as dependências utilizadas pelos testes:

```bash
npm install --save-dev @shelex/cypress-allure-plugin
npm install --save-dev cypress-xpath
npm install @faker-js/faker --save-dev
````

Essas bibliotecas são usadas respectivamente para:

* **Allure Reports** → geração de relatórios avançados de testes
* **XPath** → suporte a seletores XPath
* **Faker** → geração automática de e-mails e dados dinâmicos

### 🛠️ Correção de erros da instalação do Cypress

Caso encontre erros (normalmente exibidos em vermelho no terminal), foi necessário limpar o cache e reinstalar o Cypress:

```bash
npx cypress cache clear
npx cypress install
```

A reinstalação configura o Cypress corretamente (ex.: versão *15.7.0*) e elimina erros comuns relacionados a cache corrompido ou instalações incompletas.

Depois disso, os erros desaparecem e os testes executam normalmente.

Instale as dependências do projeto:

```bash
npm install
# ou
yarn install
```

## ▶️ Como executar os testes

### Modo interativo (Cypress UI)

```bash
npx cypress open
```

Escolha o teste `agibank.cy.js` para executar.

### Modo headless (terminal)

```bash
npx cypress run
```

## 🧪 Cenários cobertos

O arquivo `agibank.cy.js` contém os seguintes testes:

* **Cadastrar newsletter com sucesso**
* **Validar e-mail inválido**
* **Validar e-mail já existente**
* **Pesquisar notícia**

Cada cenário utiliza dados fornecidos em `data_hml.js`.

## 🛠️ Arquivos de Suporte

O arquivo `support/e2e.js` é carregado automaticamente antes da execução dos testes e contém configurações globais importantes:

### 📌 O que ele faz

* Importa `./commands`, garantindo que todos os comandos customizados estejam disponíveis em qualquer teste.
* Carrega novamente `cypress-xpath`, assegurando suporte total a seletores XPath durante toda a suíte.

```javascript
import './commands';
require('cypress-xpath');
```

Essa configuração garante que **todos os testes já iniciem com comandos, plugins e comportamentos globais disponíveis**, sem necessidade de importações adicionais.

## 🛠️ Comandos Customizados

O projeto utiliza comandos personalizados para manter os testes limpos e reutilizáveis. Esses comandos estão definidos em `support/commands.js`:

### 🔹 acessarSiteAgibank()

Acessa o site base (`baseUrl`) e valida elementos principais da home.

### 🔹 irParaNewsletters()

Abre o menu "O Agibank", acessa "Notícias" e valida a página de newsletter.

### 🔹 cadastroNewsletters(email)

Preenche o campo de e-mail e submete o formulário de inscrição.

### 🔹 pesquisarNoticia(titulo)

Abre a busca do blog e realiza pesquisa por título.

Além disso, o projeto usa:

* **cypress-xpath** para seletores avançados
* **cypress-allure-plugin** para geração de relatórios Allure

## 📄 Massa de Dados Massa de Dados

O arquivo `data_hml.js` inclui variáveis como:

* `emailSucesso`
* `emailInvalido`
* `emailExistente`
* `mensagemSucesso`
* `mensagemErro`
* `tituloNoticia`

Essas informações alimentam os cenários de teste.

Author: José Willams
🔗 https://github.com/007will/AgiBank

---

<details> <summary>🇺🇸 <strong>English</strong></summary>
📁 Project Structure
cypress/
├── dataTest/
│   └── data_hml.js        # Dynamic test data (Faker)
├── e2e/
│   └── agibank.cy.js      # End-to-End test scenarios
├── fixtures/
│   └── example.json       # Default fixture
├── support/
│   ├── commands.js        # Custom Cypress commands
│   └── e2e.js             # Global configuration
cypress.config.js           # Viewport, baseUrl and plugins
package.json                # Dependencies and scripts

🚀 Prerequisites

Node.js (LTS recommended)

npm or yarn

⚙️ Cypress Configuration

Configured in cypress.config.js:

Viewport: 1920x1080

Base URL: https://blog.agibank.com.br

Plugins: configured via setupNodeEvents

📦 Installation
npm install
# or
yarn install

Additional dependencies
npm install --save-dev cypress-xpath
npm install --save-dev @shelex/cypress-allure-plugin
npm install --save-dev @faker-js/faker

▶️ Running Tests
Interactive mode
npx cypress open

Headless mode (CI/CD)
npx cypress run

🧪 Automated Scenarios

Successful newsletter subscription

Invalid email validation

Existing email validation

Blog news search

🛠️ Custom Commands

Designed to improve maintainability and scalability:

acessarSiteAgibank()

irParaNewsletters()

cadastroNewsletters(email)

pesquisarNoticia(titulo)

Author: José Willams
🔗 https://github.com/007will/AgiBank

</details> ```
