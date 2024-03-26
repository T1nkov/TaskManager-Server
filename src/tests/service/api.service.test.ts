import { createUserApi } from '../../service/api.service';
import bcrypt from 'bcrypt';
import * as repository from '../../repository/api.repository';

describe('createUserApi', () => {
  test('correct', async () => {
    const mock1 = jest.spyOn(repository, 'createUserApiDB');
    const mock2 = jest.spyOn(repository, 'getUserByEmailDB');
    const mock3 = jest.spyOn(bcrypt, 'hash');

    mock1.mockResolvedValue([{ id: 1, name: 'Dmitry', surname: 'Davyd', email: 'asdf@gmail.com', pwd: 'asdfasdf45q23fasd34tfs4' }]);
    mock2.mockResolvedValue([]);
    mock3.mockResolvedValue('asdfasdf45q23fasd34tfs4');

    const res = await createUserApi('Dmitry', 'Davyd', 'asdf@gmail.com', 'asdASDa');

    expect(mock2).toHaveBeenCalled();
    expect(mock1).toHaveBeenCalled();
    expect(mock3).toHaveBeenCalled();

    expect(res).toHaveLength(1);
    expect(res).toEqual([{ id: 1, name: 'Dmitry', surname: 'Davyd', email: 'asdf@gmail.com', pwd: 'asdfasdf45q23fasd34tfs4' }]);
  });
});
