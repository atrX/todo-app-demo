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
import { useSearch } from './use-search';
import { useTodos } from './use-todos';

export default {
  setup() {
    const { todos, addTodo, removeTodo } = useTodos();
    const { searchQuery, searchResult: filteredTodos } = useSearch(todos, 'title');

    return {
      filteredTodos,
      searchQuery,

      addTodo,
      removeTodo,
    };
  },
};
</script>
