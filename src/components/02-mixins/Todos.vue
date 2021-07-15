<template>
  <div class="todo-search">
    <input type="text" placeholder="Search..." v-model="searchQuery" />
  </div>

  <div class="todo-list">
    <todo v-for="todo of filteredTodos" :key="todo.id" :value="todo" @remove="removeTodo" />
  </div>

  <div class="todo-add-button">
    <button @click="addTodo">Add todo</button>
  </div>
</template>

<script>
import TodosMixin from './TodosMixin';

export default {
  mixins: [TodosMixin],
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(({ title }) => {
        return new RegExp(this.searchQuery, 'i').test(title);
      });
    },
  },
};
</script>
