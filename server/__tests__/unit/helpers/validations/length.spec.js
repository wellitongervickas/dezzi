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
    expect(length("jellow", { min: 3 })).toBe(false);
    expect(length("wow", { min: 3, equals: true })).toBe(false);

    expect(length("hi", { max: 3 })).toBe(false);
    expect(length("die", { max: 3, equals: true })).toBe(false);

    expect(length("samy", { max: 5, min: 3 })).toBe(false);
    expect(length("bulle", { max: 5, min: 3, equals: true })).toBe(false);

    expect(length("wow", { max: 3, min: 3, equals: true })).toBe(false);
  });

  it('should return true on wrong length values', () => {
    expect(length()).toBe(true);
    expect(length([])).toBe(true);
    expect(length(null)).toBe(true);
    expect(length(undefined)).toBe(true);
    expect(length(0, {})).toBe(true);
    expect(length({})).toBe(true);


    expect(length(2)).toBe(true);

    expect(length(3, { min: 3 })).toBe(true);
    expect(length("hi", { min: 3, equals: true })).toBe(true);

    expect(length("play game", { max: 3 })).toBe(true);
    expect(length("enjoy", { max: 3, equals: true })).toBe(true);

    expect(length("hi", { max: 5, min: 3 })).toBe(true);
    expect(length("hello my dear", { max: 5, min: 3, equals: true })).toBe(true);
  });

});
