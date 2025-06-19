# S206
Repositório da matéria S206 - Qualidade de Software

# Testes da Prova

Este repositório contém os testes necessários para a prova, organizados em duas partes: **Testes Cypress** e **Testes Postman**. Siga as instruções abaixo para configurar e rodar os testes.

## Índice

- [Testes Cypress](#testes-cypress)
- [Testes Postman](#testes-postman)

---
Tenham um pouco de paciência com os testes, as vezes o cypress ou o postman bugam o teste por causa do Site ou do Tempo de Requisição da API.
Antes de rodar os testes, certifique-se de que o **Node.js** esteja instalado em sua máquina. Caso não tenha o Node.js, você pode baixá-lo [aqui](https://nodejs.org/).

## Testes Cypress


1. **Instalar dependências do projeto:**

```bash
npm install
```

2. **Instalar relatórios:**

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator cypress-mochawesome-reporter
```

3. **Rodar os testes**

```bash
npx cypress run
```

## Testes Postman

1. **Instalar dependências do projeto:**

```bash
npm install
```

2. **Instalar relatórios:**

```bash
npm install -g newman-reporter-htmlextra
```

3. **Rodar os testes**

```bash
newman run Prova.postman_collection.json -r htmlextra --delay-request 2000
```
