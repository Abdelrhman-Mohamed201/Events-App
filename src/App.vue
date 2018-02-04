<template>
  <v-app>
    <v-navigation-drawer
      v-if="!loading"
      temporary
      fixed
      v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Logout
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      v-if="!loading"
      class="primary"
      dark>
      <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Events</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items
        v-if="userIsAuthenticated"
        class="hidden-xs-only">
        <v-btn flat @click="onLogout">
            <v-icon left>exit_to_app</v-icon>
            Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-progress-linear class="white mt-0" :indeterminate="loading"></v-progress-linear>
    <main v-if="!loading">
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'event', title: 'View Events', link: '/events'},
            {icon: 'room', title: 'Organize Event', link: '/events/new'},
            {icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    },
    name: 'App'
  }
</script>

