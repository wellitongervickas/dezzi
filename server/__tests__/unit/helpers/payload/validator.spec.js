const validator = require('../../../../src/helpers/payload/validator');

describe('Helpers Payload Validator', () => {
  it('should be defined', () => {
    expect(validator).toBeDefined();
  });

  it('should have errors with simple payload object', () => {
    const payload = {
      first_name: '',
      last_name: '',
      alias: 'developer guy'
    };

    const validations = {
      first_name: [{
        type: 'length',
        min: 3,
      }],
      last_name: [{
        type: 'blank',
      }],
      alias: [{
        type: 'length',
        max: 5,
      }]
    };

    expect(validator(payload, validations)).toEqual({
      first_name: {
        type: 'length',
        message: 'Deve ser maior que 3',
      },
      last_name: {
        type: 'blank',
        message: 'Não pode ficar em branco',
      },
      alias: {
        type: 'length',
        message: 'Deve ser menor que 5',
      },
    });
  });

  it('should have errors on complex payload object', () => {
    const payload = {
      user: {
        name: '',
        age: '',
        contacts: [],
        friends: [{
          first_name: '',
        }],
      },
      aliases: [],
      phones: [{
        number: '',
      }, {
        number: '45995853386',
      }],
    };

    const validations = {
      user: {
        name: [{
          type: 'blank',
        }],
        age: [{
          type: 'blank',
        }],
        contacts: [{
          type: 'blank',
        }],
        friends: [{
          childrens: {
            first_name: [{
              type: 'blank',
            }],
          },
        }],
      },
      aliases: [{
        type: 'blank',
      }],
      phones: [{
        type: 'blank',
        childrens: {
          number: [{
            type: 'blank'
          }],
        },
      }],
    };

    expect(validator(payload, validations)).toEqual({
      user: {
        name: {
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
        age: {
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
        contacts: {
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
        friends: [{
          first_name: {
            type: 'blank',
            message: 'Não pode ficar em branco',
          },
        }],
      },
      aliases: {
        type: 'blank',
        message: 'Não pode ficar em branco',
      },
      phones: [{
        number: {
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
      }, {}],
    });
  });
});
