<template>
    <v-container>
      <v-layout row wrap class="text-xs-center">
        <v-flex xs12 sm6 class="text-sm-right">
          <v-btn
            large
            class="error"
            router
            to="/events">Explore Events</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-sm-left">
          <v-btn
            large
            class="error"
            router
            to="/events/new">Organize Event</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="my-3">
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="item in events"
              :src="item.src"
              :key="item.id">
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
    data () {
      return {
        events: [
          { src: 'https://scontent.faly1-1.fna.fbcdn.net/v/t1.0-9/21105928_905768726258173_7881901537592093120_n.jpg?oh=e18fe13e30d59d47977cc919241d2c31&oe=5B251F08', id: '123', title: 'Techne Summit' },
          { src: 'https://blog.instabug.com/wp-content/uploads/2017/04/instabug-hack-week.jpg', id: '456', title: 'Hack Week' },
          { src: 'http://siliconcanals.nl/wp-content/uploads/2017/01/16142367_1049961291816934_4175770859061645062_n.jpg', id: '789', title: 'Web Summit' }
        ]
      }
    }
  }
</script>

<style scoped>
  .carousel-title{
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    padding-top: 10px;
    text-align: center;
    font-size: 2em;
    background-color: rgba(0,0,0,.5);
    color: white;
  }
</style>
