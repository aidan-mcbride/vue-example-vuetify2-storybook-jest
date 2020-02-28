import Vuex from 'vuex';

// Components
import InboxScreen from './InboxScreen';
import Task from '@/components/Task';

// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
import { defaultTasksData } from '../TaskList/testData';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [...defaultTasksData],
    error: false
  }
});

const errorStore = new Vuex.Store({
  state: {
    tasks: [...defaultTasksData],
    error: true
  }
});

describe('InboxScreen', () => {
  it('Renders with tasks from store', () => {
    // arrange
    const wrapper = mount(InboxScreen, {
      store,
      localVue
    });
    const task = wrapper.find(Task);
    const firstTaskTitle = defaultTasksData[0].title;
    // assert
    expect(wrapper.html()).toMatchSnapshot();
    expect(task.text()).toContain(firstTaskTitle);
  });

  it('Renders with error state from store', () => {
    // arrange
    const wrapper = mount(InboxScreen, {
      store: errorStore,
      localVue
    });
    const error = wrapper.find('.v-alert');
    // assert
    expect(wrapper.html()).toMatchSnapshot();
    expect(error.exists()).toBe(true);
  });
});
