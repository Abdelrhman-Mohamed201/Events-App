<template>
  <v-container>
    <v-layout row wrap class="text-xs-center">
      <v-flex xs12 sm6 class="text-sm-right">
        <v-btn
          large
          class="error"
          to="/events">Explore Events
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left">
        <v-btn
          large
          class="error"
          to="/events/new">Organize Event
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="my-3">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="item in events"
            :src="item.imgUrl"
            :key="item.id"
            style="cursor: pointer"
            @click="showEvent(item.id)">
            <div class="title carousel-title">{{ item.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome events!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      events () {
        return this.$store.getters.featureEvents
      }
    },
    methods: {
      showEvent (id) {
        this.$router.push(`/events/${id}`)
      }
    }
  }
</script>

<style scoped>
  .carousel-title {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    padding-top: 10px;
    text-align: center;
    font-size: 2em;
    background-color: rgba(0, 0, 0, .5);
    color: white;
  }
</style>
