const ErrorModel = require('../../../src/models/Error');

const blankMessage = 'Não pode ficar em branco';
const type = 'blank';

describe('Models Error', () => {
  it('should be defined', () => {
    expect(ErrorModel).toBeDefined();
    expect(ErrorModel.create).toBeDefined();
    expect(ErrorModel.createList).toBeDefined();
  });

  it('should create a single Error Model', () => {
    const error = {
      key: 'first_name',
      message: blankMessage,
      type,
    };

    expect(ErrorModel.create(error)).toMatchObject(error);
  });

  it('should create a list of errors without levels', () => {
    const error = [{
      first_name: {
        key: 'first_name',
        message: blankMessage,
        type,
      },
      last_name: {
        key: 'last_name',
        message: blankMessage,
        type,
      },
    }];

    expect(ErrorModel.createList(error)).toEqual({
      first_name: {
        key: 'first_name',
        message: blankMessage,
        type,
      },
      last_name: {
        key: 'last_name',
        message: blankMessage,
        type,
      },
    });
  });

  it('should create a list of errors with levels', () => {
    const errors = [{
      phones: [{
        number: {
          key: 'number',
          message: blankMessage,
          type,
        },
      }],
      references: [{
        person: {
          first_name: {
            key: 'first_name',
            message: blankMessage,
            type,
          },
          last_name: {
            key: 'last_name',
            message: blankMessage,
            type,
          },
        },
      }, {
        contact: {
          first_name: {
            key: 'first_name',
            message: blankMessage,
            type,
          },
        },
      }, {
        job: {
          key: 'job',
          message: blankMessage,
          type,
        }
      }],
      person: {
        first_name: {
          key: 'first_name',
          message: blankMessage,
          type,
        },
        last_name: {
          key: 'last_name',
          message: blankMessage,
          type,
        },
      }
    }];

    expect(ErrorModel.createList(errors)).toEqual({
      phones: [{
        number: {
          key: 'number',
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
      }],
      references: [{
        person: {
          first_name: {
            key: 'first_name',
            type: 'blank',
            message: 'Não pode ficar em branco',
          },
          last_name: {
            key: 'last_name',
            type: 'blank',
            message: 'Não pode ficar em branco',
          },
        },
        contact: {
          first_name: {
            key: 'first_name',
            type: 'blank',
            message: 'Não pode ficar em branco',
          },
        },
        job: {
          key: 'job',
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
      }],
      person: {
        first_name: {
          key: 'first_name',
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
        last_name: {
          key: 'last_name',
          type: 'blank',
          message: 'Não pode ficar em branco',
        },
      },
    });
  });
});
