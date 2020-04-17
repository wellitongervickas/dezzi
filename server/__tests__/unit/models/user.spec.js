const bcrypt = require('bcryptjs');
const validator = require('validator');

const User = require('../../../src/models/User');

describe('Models User', () => {
  it('should be defined', () => {
    expect(User).toBeDefined();
    expect(User.create).toBeDefined();
    expect(User.validations).toBeDefined();
  });

  it('should create User model', async () => {
    const user = {
      first_name: 'Welliton',
      last_name: 'Gervickas',
      email: 'wellitogervickas@gmail.com',
    };

    const password = '123456';

    const createdUser = await User.create({
      ...user,
      password,
    });

    expect(createdUser).toMatchObject(user);

    expect(validator.isUUID(createdUser.uuid)).toBe(true);

    const matchedPass = await bcrypt.compare(password, createdUser.password);
    expect(matchedPass).toBe(true);
  });

  it('should have user validations', () => {
    expect(User.validations).toMatchObject({
      last_name: [{
        type: 'blank',
      }],
      first_name: [{
        type: 'blank',
      }],
      email: [{
        type: 'blank',
      }, {
        type: 'email',
      }],
      password: [{
        type: 'blank',
      }, {
        type: 'length',
        equals: true,
        min: 8,
        max: 16,
      }],
    });
  });
});
