# Dezzi server (node + express + knex)

## Environment Variables

| Variable | Description | Default Value |
|--|--|--|
| SERVER_HOST | | `localhost` |
| SERVER_PORT | | `3000` |
| SERVER_TOKEN_SECRET | hash to encrypt token  | `` |
| SERVER_TOKEN_EXPIRES | time to expire | `86400000` |

## Npm Scripts

* npm install
* npm run dev
* npm start

## Knex

* npx knex migrate:latest

## Test Scripts

* npm test
* npm run test:watch
