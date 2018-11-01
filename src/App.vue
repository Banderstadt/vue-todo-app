<template>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">To do:</h3>
          </div>
        </v-card-title>
          <v-card-text>
            <HelloWorld
            v-for="(todo, index) in todos"
            :key="index"
            :todo="todo">
            </HelloWorld>
              <v-form>
                <v-text-field v-model="newItem" label="What do you need to do?"></v-text-field>
              </v-form>
            </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="addTodo">Save Item</v-btn>
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
      newItem: ''
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
    },
   methods: {
    addTodo (e) {
      console.log(this.newItem);
      this.$store.dispatch('addTodo', this.newItem)
    }
  }
}
</script>
