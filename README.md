# 🚀 QE / QA Automation — Cypress Challenge | AgiBank

![Cypress](https://img.shields.io/badge/Cypress-Automation-green?logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Allure](https://img.shields.io/badge/Allure-Reports-orange)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue)
![QA](https://img.shields.io/badge/Quality-Assurance-informational)

Automated testing project built with **Cypress**, focused on **UI and API End-to-End testing** of the **AgiBank Blog**, following QA Automation best practices and portfolio-ready structure.

---

<details open>
<summary>🇧🇷 <strong>Português</strong></summary>

## 📌 Visão Geral

Projeto de **Testes Automatizados (QE / QA Automation)** desenvolvido para demonstrar:

- Automação de testes **UI e API**
- Estrutura escalável de projeto
- Uso de **Page Object Model**
- Massa de dados dinâmica
- Comandos customizados Cypress
- Preparação para **CI/CD**

Este repositório faz parte do meu **portfólio técnico em Quality Engineering**.

---

## 📁 Estrutura do Projeto (Refatorada)

```bash
qa-automation-cypress-agibank/
├── cypress/
│   ├── e2e/
│   │   ├── ui/
│   │   │   └── newsletter.cy.js
│   │   └── api/
│   │       └── newsletter-api.cy.js
│   ├── pages/
│   │   └── NewsletterPage.js
│   ├── utils/
│   │   └── dataFactory.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🚀 Pré-requisitos

- **Node.js** (versão LTS recomendada)
- **npm** ou **yarn**

---

## ⚙️ Configuração do Cypress

Arquivo `cypress.config.js`:

- **Viewport:** 1920x1080  
- **baseUrl:** https://blog.agibank.com.br  
- **Plugins:** configurados via `setupNodeEvents`

---

## 📦 Instalação

```bash
npm install
# ou
yarn install
```

### Dependências adicionais

```bash
npm install --save-dev cypress-xpath
npm install --save-dev @shelex/cypress-allure-plugin
npm install --save-dev @faker-js/faker
```

---

## ▶️ Execução dos Testes

```bash
npx cypress open
```

```bash
npx cypress run
```

---

## 🧪 Cenários Automatizados

- Cadastro de newsletter com sucesso
- Validação de e-mail inválido
- Validação de e-mail já cadastrado
- Pesquisa de notícias no blog

---

👤 **Autor:** José Willams  
🔗 **GitHub:** https://github.com/007will/AgiBank  

</details>

---

<details>
<summary>🇺🇸 <strong>English</strong></summary>

## 📌 Overview

Automated testing project built with **Cypress**, focused on **UI and API End-to-End testing**, scalability and CI/CD readiness.

---

## 🚀 Prerequisites

- **Node.js** (LTS recommended)
- **npm** or **yarn**

---

## ▶️ Running Tests

```bash
npx cypress open
```

```bash
npx cypress run
```

---

👤 **Author:** José Willams  
🔗 **GitHub:** https://github.com/007will/AgiBank  

</details>
