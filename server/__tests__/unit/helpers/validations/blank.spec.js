const blank = require('../../../../src/helpers/validations/blank');

describe('Helpers Validations Blank', () => {
  it('should be defined', () => {
    expect(blank).toBeDefined();
    expect(blank.message).toBeDefined();
  });

  it('should have default validator message', () => {
    expect(blank.message()).toBe('Não pode ficar em branco');
  });

  it('should return true on blank values', () => {
    expect(blank()).toEqual(true);
    expect(blank('')).toEqual(true);
    expect(blank([])).toEqual(true);
    expect(blank(null)).toEqual(true);
    expect(blank(undefined)).toEqual(true);
    expect(blank({})).toEqual(true);
  });

  it('should return false on valid values', () => {
    expect(blank(0)).toEqual(false);
    expect(blank('blank')).toEqual(false);
    expect(blank([''])).toEqual(false);
    expect(blank(true)).toEqual(false);
    expect(blank(false)).toEqual(false);
    expect(blank({ ok: true })).toEqual(false);
  });
});
