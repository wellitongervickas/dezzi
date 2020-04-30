const bcrypt = require('bcryptjs');
const validator = require('validator');

const User = require('../../../src/models/User');

describe('Models User', () => {
  it('should be defined', () => {
    expect(User).toBeDefined();
    expect(User.create).toBeDefined();
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
});
