import { readonly, ref } from 'vue';

export function useTodos() {
  const nextId = ref(2);
  const todos = ref([{ id: 1, title: 'Todo #1' }]);

  function addTodo() {
    const id = nextId.value++;
    const todo = {
      id,
      title: `Todo #${id}`,
    };
    todos.value.push(todo);
  }

  function removeTodo(todoId) {
    todos.value = todos.value.filter(({ id }) => id !== todoId);
  }

  return {
    todos: readonly(todos),

    addTodo,
    removeTodo,
  };
}
