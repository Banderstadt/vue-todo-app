<template>
  <div class="todo-item" style="display: flex; justify-content: space-between">
    <v-text-field ref = 'text' v-model = 'title'
                  :value="todo.title"
                  v-bind:class="[todo.done ? 'is-done' : '']"
                  @blur="editTodo({todo, title})"
                  @keyup.enter="editTodo({todo, title})">
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
  data() {
    return {
      title: this.todo.title
    };
  },
  methods: {
    ...mapActions([
      'editTodo',
      'toggleTodo',
      'deleteTodo'
    ]),
  }
}
</script>

<style>
  .is-done {
    text-decoration: line-through;
  }
</style>
