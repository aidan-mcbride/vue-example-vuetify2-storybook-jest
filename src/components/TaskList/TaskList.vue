<template>
  <base-task-list
    :tasks="tasks"
    @archiveTask="archiveTask"
    @pinTask="pinTask"
  />
</template>

<script>
import BaseTaskList from './BaseTaskList';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TaskList',
  components: {
    BaseTaskList
  },
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    ...mapActions(['archiveTask', 'pinTask'])
  }
};
</script>
