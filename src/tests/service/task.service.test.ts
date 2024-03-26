import { createTask, getTask } from '../../service/task.service';
import * as repository from '../../repository/task.repository';

describe('createTask', () => {
  test('correct', async () => {
    const mock = jest.spyOn(repository, 'createTaskDB');

    mock.mockResolvedValue([{ id: 1, task: 'adf', user_id: 1 }]);
    const res = await createTask('asf', 1);

    expect(res).toEqual([{ id: 1, task: 'adf', user_id: 1 }]);
    expect(res).toHaveLength(1);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith('asf', 1);
  });
});

describe('getTask', () => {
  test('correct', async () => {
    const mock = jest.spyOn(repository, 'getTaskDB');
    mock.mockResolvedValue([
      { id: 1, task: 'adf', user_id: 1 },
      { id: 2, task: 'dima', user_id: 2 },
    ]);
    const res = await getTask();

    expect(res).toEqual([
      { id: 1, task: 'adf', user_id: 1 },
      { id: 2, task: 'dima', user_id: 2 },
    ]);
    expect(res).toHaveLength(2);
    expect(mock).toHaveBeenCalled();
    expect(res.length).toBe(2);
  });
});
