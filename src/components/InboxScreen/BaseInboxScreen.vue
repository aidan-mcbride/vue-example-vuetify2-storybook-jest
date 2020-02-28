<template>
  <v-container fluid>
    <v-alert v-if="error" type="error" prominent>
      <div class="title">Oh No!</div>
      <div>Something went wrong</div>
    </v-alert>

    <div v-else>
      <nav>
        <h1 class="title primary--text">Taskbox</h1>
      </nav>

      <task-list />
    </div>
  </v-container>
</template>

<script>
import TaskList from '@/components/TaskList';

export default {
  name: 'PureInboxScreen',
  components: {
    TaskList
  },
  props: {
    error: {
      type: Boolean,
      default: false
    }
  }
};
</script>
