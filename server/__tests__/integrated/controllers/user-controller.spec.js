const supertest = require('supertest');
const app = require('../../../src/app');
const faker = require('faker');
const conn = require('../../../src/database/conn');

const request = supertest(app);

describe('Controller User', () => {
  beforeAll(async() => {
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });

  afterAll(async() => {
    await conn.destroy();
  });

  it('should', () => {
    expect(true).toBe(true);
  });

  it('should create a new user without errors', async done => {
    const user = {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      password: faker.internet.password(8),
      email: faker.internet.email(),
    }

    await request.post('/users')
      .send(user)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.token).not.toBeNull();
      });

    done();
  });

  it('should create a new user with user exists', async done => {
    const user = {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      password: faker.internet.password(8),
      email: faker.internet.email(),
    }

    await request.post('/users')
      .send(user)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.token).not.toBeNull();
      });

    await request.post('/users')
      .send(user)
      .then((res) => {
        expect(res.status).toBe(422);
        expect(res.body).toEqual({
          errors: {
            type: 'exists',
            message: 'Usuário já existe',
          },
        });
      });

    done();
  });

  it('should have errors when try to create new user with empty payload values', async done => {
    const user = {
      first_name: '',
      last_name: '',
      password: '',
      email: '',
    }

    const expectedBody = {
      errors: {
        first_name: {
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
        last_name: {
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
        password: {
          type: 'length',
          message: 'Deve ser maior que 8 e menor que 16',
        },
        email: {
          type: 'email',
          message: 'Não é um e-mail válido',
        },
      },
    };

    await request.post('/users')
      .send(user)
      .then((res) => {
        expect(res.status).toBe(422);
        expect(res.body).toEqual(expectedBody);
      });

    await request.post('/users')
      .send()
      .then((res) => {
        expect(res.status).toBe(422);
        expect(res.body).toEqual(expectedBody);
      });

    done();
  });
});
