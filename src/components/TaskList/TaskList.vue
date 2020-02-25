<template>
  <div>
    <v-list v-if="loading">
      <v-skeleton-loader
        v-for="(n, index) in 5"
        :key="index"
        type="list-item-avatar"
      />
    </v-list>

    <v-alert v-if="noTasks && !this.loading" type="success" prominent>
      <div class="title">You have no tasks</div>
      <div>Sit back and relax</div>
    </v-alert>

    <v-list v-if="showTasks">
      <task
        v-for="(task, index) in tasksInOrder"
        :key="index"
        :task="task"
        @archiveTask="$emit('archiveTask', $event)"
        @pinTask="$emit('pinTask', $event)"
      />
    </v-list>
  </div>
</template>

<script>
import Task from '@/components/Task/Task';
export default {
  name: 'TaskList',
  components: {
    Task
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    tasks: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    noTasks() {
      return this.tasks.length === 0;
    },
    showTasks() {
      return !this.loading && !this.noTasks;
    },
    tasksInOrder() {
      return [
        ...this.tasks.filter(t => t.state === 'TASK_PINNED'),
        ...this.tasks.filter(t => t.state !== 'TASK_PINNED')
      ];
    }
  }
};
</script>

<style lang="scss" scoped></style>
