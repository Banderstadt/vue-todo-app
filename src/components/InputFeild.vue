<template>
  <v-form>
    <v-text-field v-model="newItemTitle"
                    label="What do you need to do?"
                    @keydown.enter.prevent="addTodo"
                    autofocus
                    required>
    </v-text-field>
  </v-form>
</template>

<script>
export default {
  name: 'InputFeild',
  data () {
    return {
      newItemTitle: ''
    }
  },
  computed: {
  },
  methods: {
    addTodo () {
      this.$store.dispatch('addTodo', this.newItemTitle)
      this.newItemTitle = null
    }
  }
}
</script>
