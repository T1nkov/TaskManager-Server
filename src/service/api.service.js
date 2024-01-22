const { createUserApiDB, getUserByEmailDB } = require('../repository/api.repository');
const bcrypt = require('bcrypt');

const saltround = 3;

async function createUserApi(name, surname, email, pwd) {
  const findEmail = await getUserByEmailDB(email);
  if (findEmail.length) throw new Error('USER IS ALREDY EXIST');
  const hashPwd = await bcrypt.hash(pwd, saltround);
  const [user] = await createUserApiDB(name, surname, email, hashPwd);
  if (!user) throw new Error('data is empty');
  delete user.pwd;
  return { ...user, pwd: undefined };
}

async function authUserApi(email, pwd) {
  const findEmail = await getUserByEmailDB(email);
  if (!findEmail.length) throw new Error('WRONG PASSWORD OR EMAIL');
  const data = findEmail[0];
  const comparePwd = await bcrypt.compare(pwd, data.pwd);
  if (!comparePwd) throw new Error('WRONG PASSWORD OR EMAIL');
  return findEmail;
}
module.exports = { createUserApi, authUserApi };
