<template>
  <div>
    <v-list v-if="showTasks">
      <task
        v-for="(task, index) in tasks"
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
    }
  }
};
</script>

<style lang="scss" scoped></style>
