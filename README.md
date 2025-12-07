#  Simulação de API Assíncrona com JavaScript

Este projeto implementa uma API fictícia em JavaScript para demonstrar o domínio de conceitos fundamentais de programação assíncrona, Promises e execução simulada de backend.

## 📋 Sobre o Projeto

O objetivo é simular o comportamento de uma API real, onde as chamadas de rede levam um tempo para serem processadas. Utilizamos `setTimeout` para emular a latência de rede e `Promises` para o tratamento de fluxo assíncrono.

O projeto inclui um módulo de API (`api.js`) com operações de CRUD simuladas e uma aplicação principal (`app.js`) que consome esses serviços.

## 🛠️ Tecnologias Utilizadas

-   **JavaScript (ES6+)**
-   **Node.js** (Ambiente de execução)
-   **Async/Await** (Controle de fluxo)

##  Funcionalidades

A API simulada (`api.js`) oferece os seguintes métodos:

-   `getUsers()`: Retorna a lista de usuários (com atraso simulado).
-   `createUser(user)`: Cria um novo usuário e retorna o objeto criado.
-   `deleteUser(id)`: Remove um usuário pelo ID.

## Como Executar

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a Passo

1.  Clone este repositório:
    ```bash
    git clone https://github.com/matheussiqueirahub/fake-api-js-async.git
    ```

2.  Acesse a pasta do projeto:
    ```bash
    cd fake-api-js-async
    ```

3.  Instale as dependências (caso haja, embora este projeto utilize apenas JS nativo):
    ```bash
    npm install
    ```

4.  Execute a simulação:
    ```bash
    node app.js
    ```

## 🔍 Exemplo de Uso

Ao executar o comando `node app.js`, você verá uma saída no console semelhante a esta:

```text
--- Iniciando Simulação da API ---

1. Buscando usuários...
Usuários encontrados: [ ... ]

2. Criando novo usuário...
Usuário criado: { id: 4, name: 'Diana', email: 'diana@example.com' }

...

--- Fim da Simulação ---
```

## 📝 Estrutura do Projeto

-   `api.js`: Módulo contendo a lógica da API fake e o "banco de dados" em memória.
-   `app.js`: Script principal que consome a API e demonstra os fluxos de sucesso e erro.

## 👤 Autor

Desenvolvido por [Matheus Siqueira](https://github.com/matheussiqueirahub).

---
*Este projeto foi desenvolvido como parte de um exercício prático de JavaScript Avançado.*
