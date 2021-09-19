import { computed, ref, Ref } from 'vue';

export function useSearch<T>(list: Ref<readonly T[]>, prop: keyof T) {
  const searchQuery = ref('');

  const searchResult = computed(() =>
    list.value.filter((item) => {
      return new RegExp(searchQuery.value, 'i').test(item[prop] as unknown as string);
    }),
  );

  return {
    searchQuery,
    searchResult,
  };
}
