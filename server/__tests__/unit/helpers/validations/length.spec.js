const length = require('../../../../src/helpers/validations/length');

describe('Helpers Validations Length', () => {
  it('should be defined', () => {
    expect(length).toBeDefined();
    expect(length.message).toBeDefined();
  });

  it('should have defaults validator messages', () => {
    expect(length.message(0, { max: 1 })).toBe('Deve ser menor que 1');
    expect(length.message(0, { max: 3 })).toBe('Deve ser menor que 3');

    expect(length.message(0, { max: 1, equals: true })).toBe('Deve ser menor ou igual a 1');
    expect(length.message(0, { max: 3, equals: true })).toBe('Deve ser menor ou igual a 3');

    expect(length.message(0, { min: 1 })).toBe('Deve ser maior que 1');
    expect(length.message(0, { min: 2 })).toBe('Deve ser maior que 2');

    expect(length.message(0, { min: 1, equals: true })).toBe('Deve ser maior ou igual a 1');
    expect(length.message(0, { min: 2, equals: true })).toBe('Deve ser maior ou igual a 2');

    expect(length.message(0, {
      min: 1,
      max: 4,
    })).toBe('Deve ser maior que 1 e menor que 4');

    expect(length.message(0, {
      min: 4,
      max: 7,
    })).toBe('Deve ser maior que 4 e menor que 7');

    expect(length.message(0, {
      equals: true,
      min: 2,
      max: 5,
    })).toBe('Deve ser maior ou igual a 2 e menor ou igual a 5');

    expect(length.message(0, {
      equals: true,
      min: 5,
      max: 61,
    })).toBe('Deve ser maior ou igual a 5 e menor ou igual a 61');

    expect(length.message(0)).toBe('Valores inválidos');
  });

  it('should return false on valid length values', () => {
    expect(length(4, { min: 3 })).toBe(false);
    expect(length(3, { min: 3, equals: true })).toBe(false);

    expect(length(2, { max: 3 })).toBe(false);
    expect(length(3, { max: 3, equals: true })).toBe(false);

    expect(length(4, { max: 5, min: 3 })).toBe(false);
    expect(length(5, { max: 5, min: 3, equals: true })).toBe(false);
  });

  it('should return true on wrong length values', () => {
    expect(length(2)).toBe(true);

    expect(length(3, { min: 3 })).toBe(true);
    expect(length(2, { min: 3, equals: true })).toBe(true);

    expect(length(4, { max: 3 })).toBe(true);
    expect(length(4, { max: 3, equals: true })).toBe(true);

    expect(length(6, { max: 5, min: 3 })).toBe(true);
    expect(length(2, { max: 5, min: 3, equals: true })).toBe(true);
  });

});
