# Projeto de QE - Testes Automatizados - Cypress Desafio AgiBank

Este repositório contém uma suíte de testes automatizados utilizando **Cypress** e JavaScript, organizada para testes do site AgiBank.

## 📁 Estrutura do Projeto

```bash
cypress/
├── dataTest/
│   └── data_hml.js        # Massa dinâmica usando Faker
├── e2e/
│   └── agibank.cy.js      # Cenários E2E
├── fixtures/
│   └── example.json
├── support/
│   ├── commands.js
│   └── e2e.js
cypress.config.js
package.json

Estrutura do Projeto refatorado

qa-automation-cypress-agibank/
├── cypress/
│   ├── e2e/
│   │   ├── ui/
│   │   │   ├── newsletter.cy.js
│   │   └── api/
│   │       └── newsletter-api.cy.js
│   ├── pages/
│   │   └── NewsletterPage.js
│   ├── utils/
│   │   └── dataFactory.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .github/workflows/
│   └── cypress.yml
├── cypress.config.js
├── package.json
└── README.md


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

# 🚀 Cypress Automated Testing Project — AgiBank Challenge

![Cypress](https://img.shields.io/badge/Cypress-Automation-green?logo=cypress)
![QA](https://img.shields.io/badge/Quality-Assurance-blue)
![Allure](https://img.shields.io/badge/Allure-Reports-orange)
![CI/CD](https://img.shields.io/badge/CI%2FCD-Pipelines-brightgreen)

This repository contains an automated test suite built with **Cypress**, focused on end-to-end testing of the **AgiBank Blog**.

---

<details open>
<summary>🇧🇷 <strong>Português</strong></summary>

## 📌 Visão Geral

Projeto de testes automatizados utilizando **Cypress**, com foco em qualidade, reutilização de código, testes de API/UI e geração de relatórios.

## 📁 Estrutura do Projeto

```
cypress/
├── dataTest/
│   └── data_hml.js
├── e2e/
│   └── agibank.cy.js
├── fixtures/
│   └── example.json
├── support/
│   ├── commands.js
│   └── e2e.js
cypress.config.js
package.json
```

## 🚀 Pré-requisitos

- Node.js (LTS)
- npm ou yarn

## ⚙️ Configuração do Cypress

- Viewport: 1920x1080
- BaseUrl: https://blog.agibank.com.br
- Plugins via setupNodeEvents

## 📦 Instalação

```bash
npm install
```

### Dependências adicionais

```bash
npm install --save-dev cypress-xpath
npm install --save-dev @shelex/cypress-allure-plugin
npm install --save-dev @faker-js/faker
```

## ▶️ Execução dos Testes

```bash
npx cypress open
```
```bash
npx cypress run
```

## 🧪 Cenários Automatizados

- Cadastro de newsletter com sucesso
- Validação de e-mail inválido
- Validação de e-mail já existente
- Pesquisa de notícias

## 🛠️ Comandos Customizados

- acessarSiteAgibank()
- irParaNewsletters()
- cadastroNewsletters(email)
- pesquisarNoticia(titulo)

## 📄 Massa de Dados

data_hml.js:
emailSucesso, emailInvalido, emailExistente, mensagemSucesso, mensagemErro, tituloNoticia

👤 Autor: José Willams  
🔗 https://github.com/007will/AgiBank

</details>

---

<details>
<summary>🇺🇸 <strong>English</strong></summary>

## 📌 Overview

Automated testing project using **Cypress**, focused on quality, scalability and reporting.

## 📁 Project Structure

```
cypress/
├── dataTest/
│   └── data_hml.js
├── e2e/
│   └── agibank.cy.js
├── fixtures/
│   └── example.json
├── support/
│   ├── commands.js
│   └── e2e.js
cypress.config.js
package.json
```

## 🚀 Prerequisites

- Node.js (LTS)
- npm or yarn

## ⚙️ Cypress Configuration

- Viewport: 1920x1080
- Base URL: https://blog.agibank.com.br

## 📦 Installation

```bash
npm install
```

## ▶️ Running Tests

```bash
npx cypress open
```
```bash
npx cypress run
```

## 🧪 Automated Scenarios

- Successful newsletter subscription
- Invalid email validation
- Existing email validation
- Blog search

👤 Author: José Willams  
🔗 https://github.com/007will/AgiBank

</details>
