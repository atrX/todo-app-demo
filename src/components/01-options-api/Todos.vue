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
export default {
  data() {
    return {
      nextId: 2,
      todos: [{ id: 1, title: 'Todo #1' }],
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
  methods: {
    addTodo() {
      const id = this.nextId++;
      const todo = {
        id,
        title: `Todo #${id}`,
      };
      this.todos.push(todo);
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(({ id }) => id !== todoId);
    },
  },
};
</script>
