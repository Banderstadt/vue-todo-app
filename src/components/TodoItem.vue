<template>
  <div class="todo-item" style="display: flex; justify-content: space-between">
    <v-text-field v-model="todo" v-bind:class="[done ? 'is-done' : '']" @keyup="editTodo"></v-text-field>
      <v-btn icon @click="toggleTodo">
        <v-icon>done</v-icon>
      </v-btn>
      <v-btn icon @click="deleteTodo">
        <v-icon>delete_forever</v-icon>
      </v-btn>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data: () => ({
    todo: "New todo",
    done: false
  }),
  methods: {
    deleteTodo () {
      this.todo = '';
    },
    toggleTodo () {
      this.done = !this.done;
    },
    editTodo () {
      console.log(this.todo);
    },
  }
}
</script>

<style>
  .is-done {
    text-decoration: line-through;
  }
</style>
