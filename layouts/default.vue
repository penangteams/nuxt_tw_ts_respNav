<!-- @format -->

<template>
  <div>
    <AppHeader />

    <slot></slot>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/navigation/AppHeader.vue";
import AppFooter from "@/components/navigation/AppFooter.vue";

export default {
  name: "DefaultLayout",

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
