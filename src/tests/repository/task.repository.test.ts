import { createTaskDB, getTaskDB } from '../../repository/task.repository';

const client = {
  query: jest.fn(),
};

jest.mock('pg', function () {
  const pool = {
    connect: jest.fn(() => client),
  };

  return {
    Pool: jest.fn(() => pool),
  };
});

describe('createTaskDB', () => {
  test('correct', async () => {
    const value = [{ id: 1, task: 'js', user_id: 1 }];

    client.query.mockResolvedValue({ rows: value });

    const res = await createTaskDB('js', 1);
    expect(res).toEqual(value);
    expect(client.query).toHaveBeenCalled();
    expect(res).toHaveLength(1);
  });
});

describe('getTaskDB', () => {
  test('correct', async () => {
    const value = [{ id: 1, task: 'js', user_id: 1 }];

    client.query.mockResolvedValue({ rows: value });

    const res = await getTaskDB();

    expect(client.query).toHaveBeenCalled();
    expect(res).toEqual(value);
    expect(res).toHaveLength(1);
    
  });
});
