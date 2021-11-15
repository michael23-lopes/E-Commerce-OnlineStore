<h1 align="center">
    <img alt="LaunchStore" src=".git-images/logo.png" width="300px" />
</h1>

<h2 align="center">
  LaunchStore
  <p>Os melhores Anúncios você pode encontrar aqui.</p>
</h2>

<p align="center">
  <img alt="Project Status: complete" src="https://img.shields.io/badge/project%20status-complete-blue">
  <a href="" >
    <img alt="Website status" src="https://img.shields.io/website?url=https%3A%2F%2Fullyolima.github.io%2Flaunchbase-portfolio%2Findex.html">
  </a>
  <a href="./LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

<img align="right" src="https://image.flaticon.com/icons/png/512/34/34562.png" height="240">

## Tópicos 

[Sobre o LaunchStore](#sobre-o-foodfy)

[Funcionalidades](#funcionalidades)

[Tecnologias e Ferramentas](#tecnologias-e-ferramentas)

[Instalação e uso](#instalação-e-uso)

[Licença](#licença)



<br>

## Sobre o Foodfy

O Foodfy é uma aplicação web completa de gerenciamento de receitas, desenvolvida durante o bootcamp LaunchBase da [Rocketseat](https://rocketseat.com.br/).

<h3 align="center">Main</h3>
<p align="center">
  <img src=".github/" alt="página principal">
</p>

<br>

<h3 align="center">Admin</h3>
<p align="center">
  <img src=".github/" alt="página admin">
</p>

<br>

## Funcionalidades

- [X] Explore variados tipos de receitas.
- [X] Gerencie receitas, chefs e usuários.
- [X] Upload de imagems com Multer.
- [X] Pesquisar receitas.
- [X] Páginas dinâmicas com Nunjucks.
- [X] Banco de dados PostgreSQL.
- [X] Sistema de login e recuperação de senha.
- [X] Área administrativa.

<br>

## Tecnologias e Ferramentas

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
- [JavaScript](https://devdocs.io/javascript/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [NodeJS](https://nodejs.org/en/)
- [Nodemailer](https://nodemailer.com/about/)
- [Express](https://expressjs.com/)
- [Express Session](https://github.com/expressjs/session)
- [Multer](https://github.com/expressjs/multer)
- [PostgreSQL](https://www.postgresql.org/)
- [BcryptJS](https://github.com/dcodeIO/bcrypt.js)
- [Faker.js](https://github.com/Marak/Faker.js)

<br>

## Instalação e Uso

Para rodar a aplicação, você precisa instalar o [Node](https://nodejs.org/en/) e o banco de dados [Postgres](https://www.postgresql.org/).

Siga os passos abaixo:

```bash
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/michael23-lopes/foodfy.git
# ou use a opção de download.

# Entre na pasta com 
$ cd foodfy

# Instale as dependências
$ npm install

# Crie o banco de dados e as tabelas utilizando os comandos
# inclusos no arquivo "foodfy.sql".
    
# Conexão com o banco de dados:
# Abra e edite o arquivo "db.js" dentro da pasta "src/config"
# com o seu user e password do Postgres.

# Popule o banco de dados usando o aquivo "seed.js":
$ node seed.js

# Rode a aplicação
$ npm start
```

**Importante:** Não exclua ou altere as imagens de placeholder diretamente da pasta `plublic/images`, pois as receitas e chefs gerados pelo `seed.js` compartilham desses arquivos entre si. Porém, é seguro deletá-las pela área administrativa do site.

<br>

### Acessando a Área Administrativa

Selecione um email da tabela users, acesse a tela de login e entre utilizando o mesmo com a senha "rocket" (senha padrão).

Dica: usuários administradores possuem a badge "ADMIN" no header:
<p align="center">
  <img src=".github/admin_badge.png" alt="página admin">
</p>

<br>

### Criando Novos Usuários e Recupeção de Senha

Para usar estes recursos, edite o arquivo `mailer.js` dentro da pasta `scr/lib` com suas credenciais.

<br>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Michael W.Lopes](https://github.com/michael23-lopes)

[![Linkedin Badge](https://img.shields.io/badge/-Michael%20Lopes-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/michael-wellington-lopes/)](https://www.linkedin.com/in/michael-wellington-lopes/) 
[![Gmail Badge](https://img.shields.io/badge/-michael23.wellington@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:michael23.wellington@gmail.com)](mailto:michael23.wellington@gmail.com)