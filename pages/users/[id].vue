<!-- @format -->
<script setup>
useHead({
  title: "User Details page",
});

const route = useRoute();
</script>
<template>
  <div
    class="grid grid-cols-12 md:gap-8 py-10 gap-y-8 min-h-screen bg-gray-200 dark:bg-gray-900 px-5 dark:text-white"
  >
    <div class="col-span-12 md:col-span-6 p-2">
      Users page {{ route.params.id }}
    </div>
  </div>
</template>
