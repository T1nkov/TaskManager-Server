const { createUserApiDB, getUserByEmailDB } = require('../repository/api.repository');
const bcrypt = require('bcrypt');

const saltround = 3;

async function createUserApi(name, surname, email, pwd) {
  const findEmail = await getUserByEmailDB(email);
  if (findEmail.length) throw new Error('USER IS ALREDY EXIST');
  const hashPwd = await bcrypt.hash(pwd, saltround);
  const user = await createUserApiDB(name, surname, email, hashPwd);
  if (!user.length) throw new Error('data is empty');
  return user;
}

async function authUserApi(email, pwd) {
  const findEmail = await getUserByEmailDB(email);
  if (!findEmail.length) throw new Error('WRONG PASSWORD OR EMAIL');
  const comparePwd = await bcrypt.compare(pwd, findEmail[0].pwd);
  if (!comparePwd) throw new Error('WRONG PASSWORD OR EMAIL');
  return findEmail;
}
module.exports = { createUserApi, authUserApi };
