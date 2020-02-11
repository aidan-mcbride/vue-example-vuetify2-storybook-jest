// Components
import Task from './Task';

// Utilities
import { mount } from '@vue/test-utils';

// Test Data
import { taskData } from './testData';

describe('Task', () => {
  describe('Default State', () => {
    it('renders correct markup', () => {
      const wrapper = mount(Task, {
        propsData: {
          task: taskData
        }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders bound task title', () => {
      // arrange
      const wrapper = mount(Task, {
        propsData: {
          task: taskData
        }
      });
      const title = wrapper.find('.v-list-item__title');

      // assert
      expect(title.text()).toBe(taskData.title);
    });

    it('emits archive event with task ID when archive button is clicked', () => {
      // arrange
      const wrapper = mount(Task, { propsData: { task: taskData } });
      const archiveButton = wrapper.find('.task__archive-button');

      // act
      archiveButton.trigger('click');

      // assert
      const actualValue = wrapper.emitted().archiveTask[0][0];
      const expectedValue = taskData.id;
      expect(actualValue).toBe(expectedValue);
    });

    it('emits pin task event with task ID when pin task button is clicked', () => {
      // arrange
      const wrapper = mount(Task, { propsData: { task: taskData } });
      const pinButton = wrapper.find('.task__pin-button');

      // act
      pinButton.trigger('click');

      // assert
      const actualValue = wrapper.emitted().pinTask[0][0];
      const expectedValue = taskData.id;
      expect(actualValue).toBe(expectedValue);
    });
  });

  describe('Pinned State', () => {
    it('renders correct markup', () => {
      const wrapper = mount(Task, {
        propsData: { task: { ...taskData, state: 'TASK_PINNED' } }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('Archived State', () => {
    it('renders correct markup', () => {
      const wrapper = mount(Task, {
        propsData: { task: { ...taskData, state: 'TASK_ARCHIVED' } }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
