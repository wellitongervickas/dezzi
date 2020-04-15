const jwt = require('jsonwebtoken');

const jwtDecode = token => jwt.decode(token, process.env.SERVER_TOKEN_SECRET, (err, decoded) => {
  return err ? null : decoded;
});

const jwtGenerator = params => jwt.sign(params, process.env.SERVER_TOKEN_SECRET, {
  expiresIn: process.env.SERVER_TOKEN_EXPIRES,
});

module.exports = {
  generator: jwtGenerator,
  decode: jwtDecode,
};
