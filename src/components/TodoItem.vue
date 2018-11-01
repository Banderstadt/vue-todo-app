<template>
  <div class="todo-item" style="display: flex; justify-content: space-between">
    <v-text-field
                  :value="todo.title"
                  v-bind:class="[todo.done ? 'is-done' : '']"
                  @keyup="editTodo">
    </v-text-field>
      <v-btn icon @click="toggleTodo(todo)">
        <v-icon>done</v-icon>
      </v-btn>
      <v-btn icon @click="deleteTodo(todo)">
        <v-icon>delete_forever</v-icon>
      </v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoItem',
  props: ['todo'],
  data: () => ({
  }),
  methods: {
    ...mapActions([
      // 'editTodo',
      'toggleTodo',
      'deleteTodo'
    ]),
    editTodo () {
      console.log(this.todo)
    }
  }
}
</script>

<style>
  .is-done {
    text-decoration: line-through;
  }
</style>
