<template>
  <div class="todo">
    <span>{{ value.title }}</span>
    <button @click="$emit('remove', value.id)" class="todo__remove-button">x</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
});
</script>
