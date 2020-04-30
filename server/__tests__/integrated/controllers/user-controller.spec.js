const faker = require('faker');
const supertest = require('supertest');
const app = require('../../../src/app');
const conn = require('../../../src/database/conn');

const {
  USER_INVALID,
  EMAIL_ALREADY_EXISTS,
  VALUE_REQUIRED,
  EMAIL_VALID,
  PASSWORD_LENGTH,
} = require('../../../src/config/constants/errors');

const replaceText = require('../../../src/helpers/text/replace-text');

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
        expect(res.body.token).toBeDefined();
      });

    await request.post('/users')
      .send(user)
      .then((res) => {
        expect(res.status).toBe(422);
        expect(res.body).toEqual({
          errors: [{
            message: EMAIL_ALREADY_EXISTS,
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
        message: VALUE_REQUIRED,
        param: 'first_name',
        in: 'body',
      }, {
        message: VALUE_REQUIRED,
        param: 'last_name',
        in: 'body',
      }, {
        message: EMAIL_VALID,
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

  it('should authenticate user without erros', async done => {
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
        expect(res.body.token).toBeDefined();
      });

    await request.get('/users/auth')
      .send({
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.token).toBeDefined();
      });

    done();
  });

  it('should have erros with invalid authentication values', async done => {
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
        expect(res.body.token).toBeDefined();
      });

    await request.get('/users/auth')
      .send()
      .then((res) => {
        expect(res.status).toBe(422);
        expect(res.body).toEqual({
          errors: [{
            message: EMAIL_VALID,
            param: 'email',
            in: 'body',
          }, {
            message: replaceText(PASSWORD_LENGTH, { min: 8, max: 16}),
            param: 'password',
            in: 'body',
          }],
        });
      });

    await request.get('/users/auth')
      .send({
        password: faker.internet.password(8),
        email: faker.internet.email(),
      })
      .then((res) => {
        expect(res.status).toBe(404);
        expect(res.body.token).not.toBeDefined();
        expect(res.body).toEqual({
          errors: [{
            message: USER_INVALID,
          }],
        });
      });

    await request.get('/users/auth')
      .send({
        password: user.password,
        email: faker.internet.email(),
      })
      .then((res) => {
        expect(res.status).toBe(404);
        expect(res.body.token).not.toBeDefined();
        expect(res.body).toEqual({
          errors: [{
            message: USER_INVALID,
          }],
        });
      });

    await request.get('/users/auth')
      .send({
        password: faker.internet.password(15),
        email: user.email,
      })
      .then((res) => {
        expect(res.status).toBe(404);
        expect(res.body.token).not.toBeDefined();
        expect(res.body).toEqual({
          errors: [{
            message: USER_INVALID,
          }],
        });
      });

    done();
  });
});
