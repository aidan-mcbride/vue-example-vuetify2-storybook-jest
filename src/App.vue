<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card>
              <task-list />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TaskList from '@/components/TaskList';

export default {
  name: 'App',

  components: {
    TaskList
  },

  data: () => ({
    //
  })
};
</script>
