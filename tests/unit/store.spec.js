import { actions, mutations } from '@/store/index';
import { state as initialState } from '../fixtures/store';

describe('mutations', () => {
  let state;

  beforeEach(() => {
    state = { ...initialState };
  });

  it('archives a given task', () => {
    // arrange
    const task = { ...state.tasks[0] };
    // act
    mutations.ARCHIVE_TASK(state, task.id);
    // assert
    expect(state.tasks[0].state).toBe('TASK_ARCHIVED');
  });

  it('pins a given task', () => {
    // arrange
    const task = { ...state.tasks[0] };
    // act
    mutations.PIN_TASK(state, task.id);
    // assert
    expect(state.tasks[0].state).toBe('TASK_PINNED');
  });
});

describe('actions', () => {
  let state;
  let commit;

  beforeEach(() => {
    state = { ...initialState };
    commit = jest.fn();
  });

  it('archives a task', () => {
    // arrange
    const task = { ...state.tasks[0] };
    // act
    actions.archiveTask({ commit }, task.id);
    // assert
    expect(commit).toHaveBeenCalledWith('ARCHIVE_TASK', task.id);
  });

  it('pins a task', () => {
    // arrange
    const task = { ...state.tasks[0] };
    // act
    actions.pinTask({ commit }, task.id);
    // assert
    expect(commit).toHaveBeenCalledWith('PIN_TASK', task.id);
  });
});
