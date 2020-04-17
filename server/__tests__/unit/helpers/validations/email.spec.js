const email = require('../../../../src/helpers/validations/email');

describe('Helpers Validations Email', () => {
  it('should be defined', () => {
    expect(email).toBeDefined();
    expect(email.message).toBeDefined();
  })

  it('should have default validator message', () => {
    expect(email.message()).toBe('Não é um e-mail válido');
  });

  it('should return true on wrong email values', () => {
    expect(email()).toEqual(true);
    expect(email('')).toEqual(true);
    expect(email('welliton')).toEqual(true);
    expect(email('welliton@')).toEqual(true);
    expect(email('welliton@123')).toEqual(true);
    expect(email('welliton.com.br')).toEqual(true);
    expect(email([])).toEqual(true);
    expect(email(null)).toEqual(true);
    expect(email(undefined)).toEqual(true);
    expect(email(true)).toEqual(true);
    expect(email(false)).toEqual(true);
    expect(email(0)).toEqual(true);
  });

  it('should return false on valid email values', () => {
    expect(email('welliton@gervickas.com')).toEqual(false);
    expect(email('naruto@jinchuriki.com')).toEqual(false);
  });
});
