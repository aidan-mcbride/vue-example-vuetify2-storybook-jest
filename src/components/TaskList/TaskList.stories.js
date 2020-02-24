import TaskList from './TaskList.vue';

import { defaultTasksData } from './testData';
import { actionsData } from '@/components/Task/Task.stories';

const paddedList = () => {
  return {
    template: '<div style="padding: 3rem;"><story/></div>'
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
