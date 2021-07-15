import { computed, ref } from 'vue';

export function useSearch(list, prop) {
  const searchQuery = ref('');

  const searchResult = computed(() =>
    list.value.filter((item) => {
      return new RegExp(searchQuery.value, 'i').test(item[prop]);
    }),
  );

  return {
    searchQuery,
    searchResult,
  };
}
