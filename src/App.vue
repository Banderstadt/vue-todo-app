<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class = "card">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">To do:</h3>
          </div>
        </v-card-title>
          <v-card-text>
            <TodoItem
            v-for="(todo, index) in todos"
            :key="index"
            :todo="todo">
            </TodoItem>
            <InputField ref = "inputFeild"></InputField>
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
import TodoItem from './components/TodoItem'
import InputField from './components/InputField'

export default {
  name: 'App',
  components: {
    TodoItem,
    InputField
  },
  data () {
    return {
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  },
  methods: {
    addTodo () {
      this.$refs.inputFeild.addTodo()
    }
  }
}
</script>
