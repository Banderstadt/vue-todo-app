<template>
  <v-container>
{{todo}}
  </v-container>
</template>

<script>
export default {
  props: ['todo'],
  name: 'HelloWorld',
  data: () => ({
    msg: 'Note1'
  })
}
</script>

<style>
</style>
