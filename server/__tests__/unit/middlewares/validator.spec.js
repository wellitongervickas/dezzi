const middlewareValidator = require('../../../src/middlewares/validator');

describe('Helpers Middlewares Validator', () => {
  const mockRequest = {}

  const mockResponse = {
    send: function(r) {
      return r
    },
    status: function() {
      return this;
    }
  };

  it('should be defined', () => {
    expect(middlewareValidator).toBeDefined();
  });

  it('should dont call next function with wrong body payload', () => {
    const next = jest.fn();

    const payload = {
      first_name: '',
    };

    const validations = {
      first_name: [{
        type: 'blank',
      }],
    };

    const segment = 'body';

    mockRequest[segment] = payload;

    middlewareValidator({
      [segment]: validations,
    })(mockRequest, mockResponse, next);

    expect(next).toBeCalledTimes(0);
  });

  it('should call next function with valid body payload', () => {
    const next = jest.fn();

    const payload = {
      first_name: 'welliton gervickas',
    };

    const validations = {
      first_name: [{
        type: 'blank',
      }],
    };

    const segment = 'body';

    mockRequest[segment] = payload;

    middlewareValidator({
      [segment]: validations,
    })(mockRequest, mockResponse, next);

    expect(next).toBeCalledTimes(1);
  });

  it('should call next function with more than one segment', () => {
    const next = jest.fn();

    const payloads = {
      body: {
        first_name: 'welliton gervickas',
      },
      header: {
        authorization: 'Bearer mycustomertoken',
      }
    };

    const validations = {
      body: {
        first_name: [{
          type: 'blank',
        }],
      },
      header: {
        authorization: [{
          type: 'blank',
        }],
      },
    };

    const segments = {
      body: 'body',
      header: 'header',
    };

    mockRequest[segments.body] = payloads.body;
    mockRequest[segments.header] = payloads.header;

    middlewareValidator({
      [segments.body]: validations.body,
      [segments.header]: validations.header,
    })(mockRequest, mockResponse, next);

    expect(next).toBeCalledTimes(2);
  });
});
