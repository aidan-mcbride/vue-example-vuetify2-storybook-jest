// Components
import Task from './Task';

// Utilities
import { mount } from '@vue/test-utils';

// Test Data
import { taskData } from './testData';

describe('Task', () => {
  const build = propsData => {
    const wrapper = mount(Task, { propsData });

    return {
      wrapper,
      title: wrapper.find('.v-list-item__title'),
      archiveButton: wrapper.find('.task__archive-button'),
      pinButton: wrapper.find('.task__pin-button')
    };
  };

  describe('Default State', () => {
    it('renders correct markup', () => {
      const { wrapper } = build({ task: taskData });
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders bound task title', () => {
      // arrange
      const { title } = build({ task: taskData });

      // assert
      expect(title.text()).toBe(taskData.title);
    });

    it('emits archive event with task ID when archive button is clicked', () => {
      // arrange
      const { wrapper, archiveButton } = build({ task: taskData });

      // act
      archiveButton.trigger('click');

      // assert
      const actualValue = wrapper.emitted().archiveTask[0][0];
      const expectedValue = taskData.id;
      expect(actualValue).toBe(expectedValue);
    });

    it('emits pin task event with task ID when pin task button is clicked', () => {
      // arrange
      const { wrapper, pinButton } = build({ task: taskData });

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
      const { wrapper } = build({
        task: { ...taskData, state: 'TASK_PINNED' }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('Archived State', () => {
    it('renders correct markup', () => {
      const { wrapper } = build({
        task: { ...taskData, state: 'TASK_ARCHIVED' }
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
