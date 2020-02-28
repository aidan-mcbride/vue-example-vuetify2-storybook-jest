import Vuex from 'vuex';

// Components
import BaseInboxScreen from './BaseInboxScreen';
import Task from '@/components/Task';

// Utilities
import { mount, createLocalVue } from '@vue/test-utils';
import { defaultTasksData } from '../TaskList/testData';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [...defaultTasksData]
  }
});

describe('BaseInboxScreen', () => {
  describe('Default state', () => {
    it('Renders with tasks from store', () => {
      // arrange
      const wrapper = mount(BaseInboxScreen, {
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

  describe('Error state', () => {
    it('Renders correct markup', () => {
      // arrange
      const wrapper = mount(BaseInboxScreen, {
        propsData: {
          error: true
        }
      });
      // assert
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
