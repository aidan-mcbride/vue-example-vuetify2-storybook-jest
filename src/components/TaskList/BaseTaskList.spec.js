// Components
import BaseTaskList from './BaseTaskList';
import { Task } from '@/components/Task';

// Utilities
import { mount } from '@vue/test-utils';
import { defaultTasksData, withPinnedTasksData } from './testData';

describe('BaseTaskList', () => {
  const build = propsData => {
    const wrapper = mount(BaseTaskList, { propsData });

    return {
      wrapper
    };
  };

  describe('Default State', () => {
    it('renders correct markup', () => {
      const { wrapper } = build({ tasks: defaultTasksData });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('With Pinned Tasks', () => {
    it('renders correct markup', () => {
      const { wrapper } = build({ tasks: withPinnedTasksData });
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders pinned tasks at the start of the list', () => {
      const { wrapper } = build({ tasks: withPinnedTasksData });
      const firstTaskPinned = wrapper.find(Task);

      expect(firstTaskPinned.props().task.state).toBe('TASK_PINNED');
    });
  });

  describe('Loading State', () => {
    it('renders correct markup', () => {
      const { wrapper } = build({ loading: true });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('Empty State', () => {
    it('renders correct markup', () => {
      const { wrapper } = build();
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
