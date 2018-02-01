<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md10 offset-md1>
        <v-container>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <div class="display-1 grey--text">Create a new Event</div>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <form @submit.prevent="onCreateEvent">
                <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-text-field
                      name="title"
                      label="Title"
                      id="title"
                      :error-messages="errors.collect('title')"
                      v-validate="'required|max:40'"
                      data-vv-name="title"
                      v-model="title"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-text-field
                      name="location"
                      label="Location"
                      id="location"
                      :error-messages="errors.collect('location')"
                      v-validate="'required|max:20'"
                      data-vv-name="location"
                      v-model="location"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-text-field
                      name="imgUrl"
                      label="Image URL"
                      id="image-url"
                      :error-messages="errors.collect('imgUrl')"
                      v-validate="'required|url'"
                      data-vv-name="imgUrl"
                      data-vv-as="image URL"
                      v-model="imgUrl"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <img
                      v-if="imgUrl&&errors.collect('imgUrl')==''"
                      :src="imgUrl"
                      :alt="title+'-image'"
                      height="150px">
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-text-field
                      name="description"
                      label="Description"
                      id="description"
                      multi-line
                      :error-messages="errors.collect('description')"
                      v-validate="'required|max:250'"
                      data-vv-name="description"
                      :counter="250"
                      v-model="description"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-btn
                      primary
                      flat
                      type="submit"
                      @click="submit">
                      Create Event
                    </v-btn>
                    <v-btn
                      flat
                      @click="clear">
                      Clear
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    $validates: true,
    data () {
      return {
        title: '',
        location: '',
        imgUrl: '',
        description: ''
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.title = ''
        this.location = ''
        this.imgUrl = ''
        this.description = ''
        this.$validator.reset()
      },
      onCreateEvent () {
        this.$validator.validateAll().then(result => {
          if (result) {
            const eventData = {
              title: this.title,
              location: this.location,
              imgUrl: this.imgUrl,
              description: this.description,
              date: new Date()
            }
            this.$store.dispatch('createEvent', eventData)
            this.$router.push('/events')
          }
        })
      }
    }
  }
</script>
