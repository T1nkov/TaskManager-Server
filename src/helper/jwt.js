const jwt = require('jsonwebtoken');

function createToken(data) {
  const secret = 'banan';

  return jwt.sign(data[0], secret);
}

module.exports = { createToken };
