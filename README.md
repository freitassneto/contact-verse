<div align="center">
    <h1>
    Contact Verse
    </h1>
    <p>A Contact Verse é uma API de simulação de agenda desenvolvida em ExpressJS, utilizando TypeORM e Bcrypt para criptografia de senha.</p>
</div>

<br>

<div align="center">
    <h2>
    Instalando as dependências
    </h2>
    <p>Para inciar este projeto, é necessário instalar as dependências. Portanto você deve acessar a pasta do front ou back e utilizar o comando abaixo para instalar as dependências:</p>
</div>

```bash
Exemplo backend:
# acessando a pasta do backend
cd back

# instalando as dependências
# caso use npm
npm run i

# caso use yarn
yarn
```

```bash
Exemplo frontend:
# acessando a pasta do frontend
cd front

# instalando as dependências
# caso use npm
npm run i

# caso use yarn
yarn
```

<br>

<div align="center">
    <h2>
    Aplicar as migrações e gerar tabelas
    </h2>
    <p>Para gerar as tabelas com o TypeORM, é necessário utilizar o comando abaixo:</p>
</div>

```bash
Na pasta do frontend:
# caso use npm
npm run typeorm migration:run -- -d ./src/data-source.ts

# caso use yarn
yarn typeorm migration:run -d ./src/data-source.ts
```

<div align="center">
    <h2>
    Rodando a aplicação localmente
    </h2>
    <p>Para rodar a aplicação localmente, também se faz necessário acessar a pasta de cada uma e utilizar o comando abaixo:</p>
</div>


```bash
Exemplo backend:
# acessando a pasta do backend
cd back

## rodando a aplicação localmente
# caso use npm
npm run dev

# caso use yarn
yarn dev
```

```bash
Exemplo frontend:
# acessando a pasta do frontend
cd front

## rodando a aplicação localmente
# caso use npm
npm run dev

# caso use yarn
yarn dev
```

<div align="center">
    <h2>
    Rodando e visualizando a documentação do projeto
    </h2>
    <p>Para visualizar a documentação, acesse a pasta /documentation através do seu terminal e digite o comando</p>
</div>

```bash
# acessando a pasta da documentação
cd documentation

# rode o comando abaixo e acesse o endpoint para visualizar a documentação
npx serve
```