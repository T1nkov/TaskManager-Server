import { createUserApiDB, getUserByEmailDB } from '../repository/api.repository';
import bcrypt from 'bcrypt';

const saltround = 3;

async function createUserApi(name: string, surname: string, email: string, pwd: string) {
  const findEmail = await getUserByEmailDB(email);
  if (findEmail.length) throw new Error('USER IS ALREDY EXIST');
  const hashPwd = await bcrypt.hash(pwd, saltround);
  const user = await createUserApiDB(name, surname, email, hashPwd);
  if (!user.length) throw new Error('data is empty');
  return user;
}

async function authUserApi(email: string, pwd: string) {
  const findEmail = await getUserByEmailDB(email);
  if (!findEmail.length) throw new Error('WRONG PASSWORD OR EMAIL');
  const comparePwd = await bcrypt.compare(pwd, findEmail[0].pwd);
  if (!comparePwd) throw new Error('WRONG PASSWORD OR EMAIL');
  return findEmail;
}
export { createUserApi, authUserApi };
