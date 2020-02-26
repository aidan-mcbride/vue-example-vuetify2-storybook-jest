<template>
  <v-list-item>
    <v-list-item-action>
      <v-btn
        class="task__archive-button"
        aria-label="archive task"
        text
        icon
        @click="$emit('archiveTask', task.id)"
      >
        <v-icon>{{ checkboxIcon }}</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ task.title }}</v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn
        v-if="!isChecked"
        class="task__pin-button"
        aria-label="pin task"
        text
        icon
        @click="$emit('pinTask', task.id)"
      >
        <v-icon v-if="isPinned" color="blue">mdi-star</v-icon>
        <v-icon v-else>mdi-star-outline</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        state: '',
        title: ''
      })
    }
  },
  computed: {
    isChecked() {
      return this.task.state === 'TASK_ARCHIVED';
    },
    isPinned() {
      return this.task.state === 'TASK_PINNED';
    },
    checkboxIcon() {
      return this.isChecked
        ? 'mdi-checkbox-marked-outline'
        : 'mdi-checkbox-blank-outline';
    }
  }
};
</script>
