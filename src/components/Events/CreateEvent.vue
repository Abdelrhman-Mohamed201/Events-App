<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md10 offset-md1>
        <v-container>
          <v-layout row mb-3>
            <v-flex xs12 sm11 md11 offset-md0 lg9 offset-lg2 pl-3>
              <div class="display-1 grey--text">Create a new Event</div>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <form @submit.prevent="onCreateEvent">
                <v-layout row>
                  <v-flex xs12 sm11 md11 offset-md0 lg9 offset-lg2 pl-3>
                    <v-text-field
                      name="title"
                      label="Title"
                      autofocus
                      id="title"
                      :error-messages="errors.collect('title')"
                      v-validate="'required|max:40'"
                      data-vv-name="title"
                      v-model="title"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm11 md11 offset-md0 lg9 offset-lg2 pl-3>
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
                  <v-flex xs12 sm11 md11 offset-md0 lg9 offset-lg2 pl-3>
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
                  <v-flex xs12 sm11 md11 offset-md0 lg9 offset-lg2 pl-3>
                    <img
                      v-if="imgUrl&&errors.collect('imgUrl')==''"
                      :src="imgUrl"
                      :alt="title+'-image'"
                      height="150px">
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm11 md11 offset-md0 lg9 offset-lg2 pl-3>
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
                <v-container class="hidden-sm-and-up">
                  <v-layout row mb-4>
                    <v-flex xs12 sm6 offset-sm3 md4>
                      <v-date-picker header-color="accent" color="accent" v-model="date"></v-date-picker>
                      <div v-if="!date && validate" class="error--text caption">Please select a date.</div>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12 sm6 offset-sm3 md4>
                      <v-time-picker header-color="accent" color="accent" v-model="time"></v-time-picker>
                      <div v-if="!time && validate" class="error--text caption">Please select a time.</div>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-container class="hidden-xs-only">
                  <v-layout row mb-4>
                    <v-flex xs12 sm6 lg4 offset-lg2>
                      <v-date-picker header-color="accent" color="accent" v-model="date"></v-date-picker>
                      <div v-if="!date && validate" class="error--text caption">Please select a date.</div>
                    </v-flex>
                    <v-flex xs12 sm6 offset-lg0 lg4 offset-lg1>
                      <v-time-picker header-color="accent" color="accent" v-model="time"></v-time-picker>
                      <div v-if="!time && validate" class="error--text caption">Please select a time.</div>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-layout row>
                  <v-flex xs12 md6 lg6 offset-lg2 class="text-sm-left text-xs-center">
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
        description: '',
        date: null,
        time: null,
        validate: false
      }
    },
    computed: {
      submitDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        }
        return date
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
        this.date = null
        this.time = null
        this.validate = false
        this.$validator.reset()
      },
      onCreateEvent () {
        this.$validator.validateAll().then(result => {
          if (result && (this.date !== null && this.time !== null)) {
            const eventData = {
              title: this.title,
              location: this.location,
              imgUrl: this.imgUrl,
              description: this.description,
              date: this.submitDateTime
            }
            this.$store.dispatch('createEvent', eventData)
            this.$router.push('/events')
          }
          this.validate = result
        })
      }
    }
  }
</script>
