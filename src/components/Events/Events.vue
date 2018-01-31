<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 class="offset-sm1 offset-md2 mb-4">
        <v-card hover class="grey lighten-4">
          <v-container fluid>
            <v-layout row>
              <v-flex xs6 sm5 md4>
                <v-card-media
                  height="200px"
                  src="https://scontent.faly1-1.fna.fbcdn.net/v/t1.0-9/21105928_905768726258173_7881901537592093120_n.jpg?oh=e18fe13e30d59d47977cc919241d2c31&oe=5B251F08">
                </v-card-media>
              </v-flex>
              <v-flex xs6 sm7 md8>
                <v-card-title>
                  <div>
                    <div class="headline primary--text">Techne Summit</div>
                    <div class="subheading">17th July 2018</div>
                  </div>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat to="/events/1">
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

