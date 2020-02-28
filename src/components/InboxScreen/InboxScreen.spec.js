import Vuex from 'vuex';

// Components
import InboxScreen from './InboxScreen';
import Task from '@/components/Task';

// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
import { defaultTasksData } from '../TaskList/testData';

const localVue = createLocalVue();
localVue.use(Vuex);

const createStore = state => {
  return new Vuex.Store({ state });
};

const build = store => {
  const wrapper = mount(InboxScreen, { store, localVue });
  return { wrapper };
};

describe('InboxScreen', () => {
  it('Renders with tasks from store', () => {
    // arrange
    const store = createStore({
      tasks: [...defaultTasksData],
      error: false
    });
    const { wrapper } = build(store);
    const task = wrapper.find(Task);
    const firstTaskTitle = defaultTasksData[0].title;
    // assert
    expect(wrapper.html()).toMatchSnapshot();
    expect(task.text()).toContain(firstTaskTitle);
  });

  it('Renders with error state from store', () => {
    // arrange
    const store = createStore({
      tasks: [...defaultTasksData],
      error: true
    });
    const { wrapper } = build(store);
    const error = wrapper.find('.v-alert');
    // assert
    expect(wrapper.html()).toMatchSnapshot();
    expect(error.exists()).toBe(true);
  });
});
