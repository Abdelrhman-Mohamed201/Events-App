<template>
  <v-container>
    <v-layout row v-if="alert">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :data="alert"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      type="email"
                      v-model="email"
                      :error-messages="errors.collect('email')"
                      v-validate="'required'"
                      data-vv-name="email"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      type="password"
                      v-model="password"
                      :append-icon="e1 ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (e1 = !e1)"
                      :type="e1 ? 'password' : 'text'"
                      :error-messages="errors.collect('password')"
                      v-validate="'required|min:8|max:36'"
                      data-vv-name="password"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 class="text-sm-left text-xs-center">
                    <v-btn
                      primary
                      :loading="submitLoading"
                      :disabled="submitLoading"
                      type="submit"
                      @click="submit">
                      Sign in
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    $validates: true,
    data () {
      return {
        email: '',
        password: '',
        e1: true
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      alert () {
        return this.$store.getters.alert
      },
      submitLoading () {
        return this.$store.getters.submitLoading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) this.$router.push('/')
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signIn', {email: this.email, password: this.password})
      },
      submit () {
        this.$validator.validateAll()
      },
      onDismissed () {
        this.$store.dispatch('clearAlert')
      }
    }
  }
</script>
