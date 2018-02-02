<template>
  <v-container>
    <v-layout row wrap v-for="item in events" :key="item.id">
      <v-flex xs12 sm10 md8 class="offset-sm1 offset-md2 mb-4">
        <v-card hover class="grey lighten-4">
          <v-container fluid>
            <v-layout row>
              <v-flex xs6 sm5 md4>
                <v-card-media
                  height="200px"
                  :src="item.imgUrl">
                </v-card-media>
              </v-flex>
              <v-flex xs6 sm7 md8>
                <v-card-title>
                  <div>
                    <div class="headline primary--text">{{ item.title }}</div>
                    <div class="subheading">{{ item.date | date }}</div>
                  </div>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat :to="'/events/'+item.id">
                    <v-icon left light>arrow_forward</v-icon>
                    View Event
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      events () {
        return this.$store.getters.loadedEvents
      }
    }
  }
</script>
