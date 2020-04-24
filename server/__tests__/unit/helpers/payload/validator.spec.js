const validator = require('../../../../src/helpers/payload/validator');

describe('Helpers Payload Validator', () => {
  it('should be defined', () => {
    expect(validator).toBeDefined();
  });

  it('it should have empty errors object', () => {
    expect(validator({}, {})).toEqual({});
    expect(validator({})).toEqual({});
    expect(validator()).toEqual({});
  });

  it('should validate self payload', () => {
    const payload = {};

    const validations = {
      _self: [{
        type: 'blank',
      }],
    };

    expect(validator(payload, validations)).toEqual({
      type: 'blank',
      message: 'Não pode ficar em branco',
    });
  });

  it('should validate one level payload properties', () => {

    const payload = {
      first_name: '',
      last_name: '',
      job: {},
      contacts: [],
    };

    const validations = {
      first_name: [{
        type: 'blank',
      }],
      job: {
        _self: [{
          type: 'blank',
        }],
      },
      contacts: {
        _self: [{
          type: 'blank',
        }],
      },
    };

    const expected = {
      first_name: {
        type: 'blank',
        message: 'Não pode ficar em branco',
      },
      job: {
        type: 'blank',
        message: 'Não pode ficar em branco',
      },
      contacts: {
        type: 'blank',
        message: 'Não pode ficar em branco',
      },
    }

    expect(validator(payload, validations)).toEqual(expected);
    expect(validator({}, validations)).toEqual(expected);
  });

  it('should validate items from array of object without self', () => {
    const payload = {
      phones: [{
        number: '',
      }, {
        number: '12345',
      }],
    };

    const validations = {
      phones: {
        items: {
          number: [{
            type: 'blank',
          }, {
            type: 'length',
            min: 9,
            max: 11,
            equals: true,
          }],
        },
      },
    };

    expect(validator(payload, validations)).toEqual({
      phones: [{
        number: {
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
      }, {
        number: {
          type: 'blank',
          message: 'Deve ser maior ou igual a 9 e menor ou igual a 11',
        },
      }],
    });
  });

  it('should validate high level payload object with self validation and ignore skipped validations', () => {
    const payload = {
      job: {
        description: '',
        phones: [],
        skills: [{
          name: '',
        }],
      },
    };

    const validations = {
      job: {
        items: {
          description: [{
            type: 'blank',
          }],
          skills: {
            _self: [{
              type: 'blank',
            }],
            items: {
              name: [{
                type: 'blank',
              }],
            },
          },
          phones: {
            _self: [{
              type: 'blank',
            }],
            items: {
              number: [{
                type: 'blank',
              }],
            },
          },
        },
      },
      address: {
        items: {
          zip_code: [{
            type: 'blank',
          }],
        },
      },
    };


    expect(validator(payload, validations)).toEqual({
      job: {
        description: {
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
        phones: {
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
        skills: [{
          name: {
            type: 'blank',
            message: 'Não pode ficar em branco',
          },
        }],
      },
    });
  });
});
