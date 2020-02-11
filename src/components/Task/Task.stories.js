import { action } from '@storybook/addon-actions';
import Task from './Task';

import { taskData } from './testData';
export default {
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

const taskTemplate = `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`;

// default task state
export const Default = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => taskData
    }
  },
  methods: actionsData
});
// pinned task state
export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: 'TASK_PINNED'
      })
    }
  },
  methods: actionsData
});
// archived task state
export const Archived = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: {
        ...taskData,
        state: 'TASK_ARCHIVED'
      }
    }
  },
  methods: actionsData
});
