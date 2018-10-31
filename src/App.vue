<template>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">To do</h3>
          </div>
        </v-card-title>

          <HelloWorld></HelloWorld>
          <HelloWorld></HelloWorld>
          <HelloWorld></HelloWorld>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="orange" right>Save Item</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
