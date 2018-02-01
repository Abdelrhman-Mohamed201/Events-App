<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm10 md8 class="offset-sm1 offset-md2">
        <v-card>
          <v-card-media
            height="200px"
            :src="event.imgUrl">
          </v-card-media>
          <v-card-title>
              <div class="headline primary--text">{{ event.title }}
                <span class="caption primary--text">{{ event.location }}</span>
                <span class="caption grey--text">{{ event.date }}</span>
              </div>
          </v-card-title>
          <v-card-text class="pt-0">
            {{ event.description }}
          </v-card-text>
          <v-card-actions class="primary">
            <v-btn flat dark>Share</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat dark>Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      event (id) {
        return this.$store.getters.loadedEvent(this.id)
      }
    }
  }
</script>
