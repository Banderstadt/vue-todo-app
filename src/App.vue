<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">To do:</h3>
          </div>
        </v-card-title>
          <todo-item></todo-item>
        <v-card-actions>
          <v-form>
            <v-text-field label="What do you need to do?"></v-text-field>
            <v-spacer></v-spacer>
            <v-btn flat color="orange" right>Save Item</v-btn>
          </v-form>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import TodoItem from "./components/TodoItem";

export default {
  name: "App",
  components: {
    TodoItem
  },
  data() {
    return {
      //
    };
  }
};
</script>
