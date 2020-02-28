<template>
  <v-app>
    <v-content class="secondary">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card>
              <inbox-screen />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import InboxScreen from '@/components/InboxScreen';

export default {
  name: 'App',

  components: {
    InboxScreen
  },

  data: () => ({
    //
  })
};
</script>
