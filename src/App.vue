<template>
  <div class="title-bar">
    <div class="title-bar__title">Todo app</div>
    <div class="title-bar__buttons">
      <button :class="{ active: componentIndex === 0 }" @click="componentIndex = 0">Options API</button>
      <button :class="{ active: componentIndex === 1 }" @click="componentIndex = 1">Mixins</button>
      <button :class="{ active: componentIndex === 2 }" @click="componentIndex = 2">Composition API</button>
    </div>
  </div>
  <component :is="component" />
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';

const components = [
  defineAsyncComponent(() => import('@/components/01-options-api/Todos.vue')),
  defineAsyncComponent(() => import('@/components/02-mixins/Todos.vue')),
  defineAsyncComponent(() => import('@/components/03-composition-api/Todos.vue')),
];

export default defineComponent({
  setup() {
    const componentIndex = ref(0);

    return {
      component: computed(() => components[componentIndex.value]),
      componentIndex,
    };
  },
});
</script>
