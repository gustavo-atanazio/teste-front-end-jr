# Teste Front-End Junior

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas no seu sistema:

- [Node.js](https://nodejs.org/en)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

Você pode instalar o Yarn globalmente usando o npm após instalar o Node.js com o comando:

```bash
npm install --global yarn
```

## Baixando o Projeto

Clique no botão "Code" acima e selecione "Download ZIP". Após o download, descompacte o arquivo em uma pasta no seu computador.

## Rodando o Projeto (ambiente de desenvolvimento)

1. **Instale as dependências:**

   Abra o terminal na pasta do projeto descompactado e execute:

   ```bash
   yarn
   ```

2. **Inicie o servidor:**

   Após a instalação das dependências, inicie o servidor de desenvolvimento com o comando:

   ```bash
   yarn dev
   ```

   Você verá uma mensagem no terminal informando o endereço local onde o projeto está rodando, como por exemplo `http://localhost:3000`.

## Compilando o Projeto (build)

Para criar uma versão de produção do projeto, siga os passos abaixo:

1. **Compile o projeto:**

   Execute o comando:

   ```bash
   yarn build
   ```

   Isso gerará uma pasta `dist` na raiz do diretório do projeto com os arquivos compilados.

2. **Visualize o projeto compilado:**

   Para visualizar o projeto compilado, use o comando:

   ```bash
   yarn preview
   ```

   Este comando irá iniciar um servidor que serve os arquivos da pasta `dist`.

**Nota:** O projeto compilado não irá obter os dados da API. Mais detalhes estão no arquivo `vite.config.ts`.