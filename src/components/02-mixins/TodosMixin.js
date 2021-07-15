export default {
  data() {
    return {
      nextId: 2,
      todos: [{ id: 1, title: 'Todo #1' }],
    };
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
