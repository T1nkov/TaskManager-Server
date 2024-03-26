import {
  createUserDB,
  getAllUserDB,
  updateUserByIdDB,
  getUserByEmailDB,
  getUserByIdDB,
  deleteUserByIdDB,
  updateUserPathDB,
} from '../repository/user.repository';

async function createUser(name: string, surname: string, email: string, pwd: string) {
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
async function updateUserById(id: number, name: string, surname: string, email: string, pwd) {
  const data = await updateUserByIdDB(id, name, surname, email, pwd);
  return data;
}

async function getUserByEmail(email: string) {
  const data = await getUserByEmailDB(email);
  return data;
}
async function getUserById(id: number) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error('data does not create');
  if (id < 0) throw new Error('id is not valid');
  return data;
}

async function deleteUserById(id: number) {
  const data = await deleteUserByIdDB(id);
  if (id < 0) throw new Error('id is not valid');
  if (!data.length) throw new Error('data does not create');
  return data;
}

async function updateUserPath(id: number, body: any) {
  const data = await updateUserPathDB(id, body);
  if (id < 0) throw new Error('id is not valid');
  if (!data.length) throw new Error('data does not create');
  return data;
}
export { createUser, getAllUser, updateUserById, getUserByEmail, getUserById, deleteUserById, updateUserPath };
