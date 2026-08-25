#  World Explorer

##  Sobre o projeto

O **World Explorer** é uma aplicação web desenvolvida para a Sprint de Consumo de API.

A aplicação permite pesquisar países e visualizar informações como:

*  Nome do país
*  Bandeira
*  Capital
*  População
*  Região

Os dados são obtidos através de uma API e apresentados dinamicamente na página.

---

##  Objetivo

O objetivo do projeto é desenvolver uma aplicação web capaz de consumir dados de uma API utilizando programação assíncrona em JavaScript.

As informações recebidas da API são processadas e exibidas dinamicamente na página.

---

##  API utilizada

Foi utilizada a **Countries.dev** para obter informações sobre países.

Endpoint utilizado:

```text
https://countries.dev/countries
```

A API fornece os dados dos países em formato JSON. Esses dados são recebidos pelo JavaScript, processados e apresentados na interface da aplicação.

---

##  Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* API REST
* JSON
* Git
* GitHub
* Vercel

---

##  Estrutura do projeto

```text
world-explorer/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Responsável pela estrutura da página, incluindo o título, campo de pesquisa, botão e área onde os resultados são exibidos.

### `style.css`

Responsável pela estilização da aplicação, incluindo cores, organização dos elementos, cards, botões e responsividade.

### `script.js`

Responsável pelo consumo da API, pesquisa dos países, processamento dos dados e exibição das informações na página.

---

##  Como funciona

O usuário digita o nome de um país no campo de pesquisa e clica no botão **Pesquisar**.

O JavaScript realiza uma requisição para a API utilizando `fetch()`.

A resposta da API é recebida em formato JSON e processada pelo JavaScript.

Depois disso, as informações do país são exibidas dinamicamente na página.

### Fluxo da aplicação

```text
Usuário
   ↓
Pesquisa um país
   ↓
JavaScript
   ↓
fetch()
   ↓
API Countries.dev
   ↓
Resposta JSON
   ↓
Processamento dos dados
   ↓
Resultado exibido na tela
```

---

##  Tratamento de erros

A aplicação possui tratamento de erros utilizando `try...catch`.

Caso aconteça algum problema na requisição ou o país pesquisado não seja encontrado, uma mensagem informativa será apresentada ao usuário.

Exemplo:

```text
 País não encontrado.
```

Também existe uma verificação para impedir que a pesquisa seja realizada quando o campo estiver vazio.

---

##  Responsividade

A aplicação foi desenvolvida para se adaptar a diferentes tamanhos de tela.

O layout pode ser utilizado em:

*  Computadores
*  Celulares
*  Tablets

---

##  Interface

A interface foi desenvolvida utilizando uma paleta de cores em tons de:

*  Laranja
*  Verde
*  Amarelo
*  Verde claro

O objetivo é criar uma interface simples, organizada e agradável para a consulta das informações dos países.
