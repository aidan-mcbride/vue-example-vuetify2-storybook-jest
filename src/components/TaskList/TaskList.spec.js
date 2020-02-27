import Vuex from 'vuex';

// Components
import TaskList from './TaskList';
import { Task } from '@/components/Task';

// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
import { defaultTasksData } from './testData';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [...defaultTasksData]
  }
});

describe('TaskList', () => {
  it('Renders task from store', () => {
    // arrange
    const wrapper = mount(TaskList, {
      store,
      localVue
    });
    const task = wrapper.find(Task);
    const firstTaskTitle = defaultTasksData[0].title;
    // assert
    expect(wrapper.html()).toMatchSnapshot();
    expect(task.text()).toContain(firstTaskTitle);
  });
});
