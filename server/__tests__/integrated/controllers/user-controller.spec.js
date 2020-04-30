const faker = require('faker');
const supertest = require('supertest');
const app = require('../../../src/app');
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
          errors: [{
            message: 'E-mail already exists',
            param: 'email',
            in: 'body',
          }],
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
      errors: [{
        message: 'Value is required',
        param: 'first_name',
        in: 'body',
      }, {
        message: 'Value is required',
        param: 'last_name',
        in: 'body',
      }, {
        message: 'E-mail must be valid',
        param: 'email',
        in: 'body',
      }, {
        message: 'Password must be at least 8 chars and less than 16 chars',
        param: 'password',
        in: 'body',
      }],
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
