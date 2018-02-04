<template>
  <v-alert
    :color="data.type"
    :icon="data.icon"
    dismissible
    @input="onClose"
    :value="true">
    {{ data.message }}
  </v-alert>
</template>

<script>
  export default {
    props: ['data'],
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>
