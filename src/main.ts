import 'normalize.css';
import '@/style.css';

import { createApp } from 'vue';

import App from '@/App.vue';
import Todo from '@/components/Todo.vue';

const app = createApp(App);

app.component('todo', Todo);

app.mount('#app');
