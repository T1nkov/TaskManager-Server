const { createUserApiDB, getUserByEmailDB } = require('../repository/api.repository');
const bcrypt = require('bcrypt');

const saltround = 3;

async function createUserApi(name, surname, email, pwd) {
  const findEmail = await getUserByEmailDB(email);
  if (findEmail) throw new Error('USER IS ALREDY EXIST');
  const hashPwd = await bcrypt.hash(pwd, saltround);
  const data = await createUserApiDB(name, surname, email, hashPwd);
  if (!data.length) throw new Error('data is empty');
  return data;
}

module.exports = { createUserApi };
