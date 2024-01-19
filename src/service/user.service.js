const {
  createUserDB,
  getAllUserDB,
  updateUserByIdDB,
  getUserByEmailDB,
  getUserByIdDB,
  deleteUserByIdDB,
  updateUserPathDB,
} = require('../repository/user.repository');

async function createUser(name, surname, email, pwd) {
  const foundUser = await getUserByEmailDB(email);
  if (foundUser.length) throw new Error('user already exist');
  const data = await createUserDB(name, surname, email, pwd);
  if (!data.length) throw new Error('data does not create');
  return data;
}

async function getAllUser() {
  const data = await getAllUserDB();
  return data;
}
async function updateUserById(id, name, surname, email, pwd) {
  const data = await updateUserByIdDB(id, name, surname, email, pwd);
  return data;
}

async function getUserByEmail(email) {
  const data = await getUserByEmailDB(email);
  return data;
}
async function getUserById(id) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error('data does not create');
  if (id < 0) throw new Error('id is not valid');
  return data;
}

async function deleteUserById(id) {
  const data = await deleteUserByIdDB(id);
  if (id < 0) throw new Error('id is not valid');
  if (!data.length) throw new Error('data does not create');
  return data;
}

async function updateUserPath(id, body) {
  const data = await updateUserPathDB(id, body);
  if (id < 0) throw new Error('id is not valid');
  if (!data.length) throw new Error('data does not create');
  return data;
}
module.exports = { createUser, getAllUser, updateUserById, getUserByEmail, getUserById, deleteUserById, updateUserPath };
