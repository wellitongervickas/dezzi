const length = require('../../../../src/helpers/validations/length');

describe('Helpers Validations Length', () => {
  it('should be defined', () => {
    expect(length).toBeDefined();
    expect(length.message).toBeDefined();
  });

  it('should have defaults validator messages', () => {
    expect(length.message(2, { max: 1 })).toBe('Deve ser menor que 1');
    expect(length.message(2, { max: 3 })).toBe('Deve ser menor ou igual a 3');

    expect(length.message(1, { min: 1 })).toBe('Deve ser maior que 1');
    expect(length.message(1, { min: 2 })).toBe('Deve ser maior ou igual a 2');

    expect(length.message(1, {
      min: 2,
      max: 5,
    })).toBe('Deve ser maior que 2 e menor que 5');

    expect(length.message(1, {
      min: 2,
      max: 5,
      equals: true,
    })).toBe('Deve ser maior ou igual a 2 e menor ou igual a 5');
  });
});
