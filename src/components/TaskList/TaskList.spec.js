// Components
import TaskList from './TaskList';
import Task from '@/components/Task/Task';

// Utilities
import { mount } from '@vue/test-utils';
import { defaultTasksData, withPinnedTasksData } from './testData';

describe('TaskList', () => {
  describe('Default State', () => {
    it('renders correct markup', () => {
      const wrapper = mount(TaskList, {
        propsData: { tasks: defaultTasksData }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('With Pinned Tasks', () => {
    it('renders correct markup', () => {
      const wrapper = mount(TaskList, {
        propsData: { tasks: withPinnedTasksData }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders pinned tasks at the start of the list', () => {
      const wrapper = mount(TaskList, {
        propsData: { tasks: withPinnedTasksData }
      });
      const firstTaskPinned = wrapper.find(Task);

      expect(firstTaskPinned.props().task.state).toBe('TASK_PINNED');
    });
  });

  describe('Loading State', () => {
    it('renders correct markup', () => {
      const wrapper = mount(TaskList, {
        propsData: { loading: true }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('Empty State', () => {
    it('renders correct markup', () => {
      const wrapper = mount(TaskList);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
