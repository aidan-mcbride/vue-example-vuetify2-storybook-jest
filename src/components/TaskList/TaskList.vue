<template>
  <pure-task-list
    :tasks="tasks"
    @archiveTask="archiveTask"
    @pinTask="pinTask"
  />
</template>

<script>
import PureTaskList from './PureTaskList';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TaskList',
  components: {
    PureTaskList
  },
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    ...mapActions(['archiveTask', 'pinTask'])
  }
};
</script>
