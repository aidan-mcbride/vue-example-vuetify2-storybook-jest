import { mutations } from '@/store/index';
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
