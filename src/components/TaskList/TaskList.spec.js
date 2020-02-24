// Components
import TaskList from './TaskList';

// Utilities
import { mount } from '@vue/test-utils';
import { defaultTasksData } from './testData';

describe('TaskList', () => {
  describe('Default State', () => {
    it('renders correct markup', () => {
      const wrapper = mount(TaskList, {
        propsData: {
          tasks: {
            default: () => defaultTasksData
          }
        }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
