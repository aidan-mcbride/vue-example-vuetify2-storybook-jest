import TaskList from './TaskList.vue';

import { defaultTasksData, withPinnedTasksData } from './testData';
import { actionsData } from '@/components/Task/Task.stories';

const paddedList = () => {
  return {
    template:
      '<div style="padding: 3rem; background-color: #CFD8DC"><story/></div>'
  };
};

export default {
  title: 'TaskList',
  excludeStories: /.*Data$/,
  decorators: [paddedList]
};

// default TaskList state
export const Default = () => ({
  components: { TaskList },
  template: `<task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  props: {
    tasks: {
      default: () => defaultTasksData
    }
  },
  methods: actionsData
});

// TaskList with pinned tasks
export const WithPinnedTasks = () => ({
  components: { TaskList },
  template: `<task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  props: {
    tasks: {
      default: () => withPinnedTasksData
    }
  },
  methods: actionsData
});

// loading TaskList state
export const Loading = () => ({
  components: { TaskList },
  template: `<task-list loading @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  methods: actionsData
});

// empty TaskList state
export const Empty = () => ({
  components: { TaskList },
  template: `<task-list @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  methods: actionsData
});
