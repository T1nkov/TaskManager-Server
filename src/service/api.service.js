const { createUserApiDB, getUserByEmailDB } = require('../repository/api.repository');

async function createUserApi(name, surname, email, pwd) {
  const findEmail = await getUserByEmailDB(email);
  if (findEmail) throw new Error('USER IS ALREDY EXIST');
  const data = await createUserApiDB(name, surname, email, pwd);
  if (!data.length) throw new Error('data is empty');
  return data;
}

module.exports = { createUserApi };
