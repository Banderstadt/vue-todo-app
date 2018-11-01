<template>
  <v-layout sm6 align-start justify-space-between row sm10>
     <v-flex align-center xs12>
    <v-textarea   :value = "title"
                  v-bind:class = "[todo.done ? 'is-done' : '']"
                  @blur = "editingCompleted"
                  @keydown.enter.prevent = "editingCompleted"
                  @dblclick= "edit"
                  :readonly = "isReadOnly"
                  solo
                  :rows = "1"
                  auto-grow>
    </v-textarea>
     </v-flex>
    <v-layout row>
      <v-btn icon @click="toggleTodo(todo)">
        <v-icon>done</v-icon>
      </v-btn>
      <v-btn icon @click="deleteTodo(todo)">
        <v-icon>delete_forever</v-icon>
      </v-btn>

    </v-layout>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      isReadOnly: true,
      value: this.title
    };
  },
  computed: {
    title() {
      return this.todo.title;
    }
  },
  methods: {
    ...mapActions(["editTodo", "toggleTodo", "deleteTodo"]),
    edit() {
      this.isReadOnly = this.todo.done;
    },
    editingCompleted(e) {
      if (!this.isReadOnly) {
        let newTitle = e.target.value;
        this.editTodo({ todo: this.todo, title: newTitle });
        this.isReadOnly = true;
      }
    }
  }
};
</script>

<style>
.is-done {
  text-decoration: line-through;
}
</style>
