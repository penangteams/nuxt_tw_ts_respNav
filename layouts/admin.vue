<!-- @format -->

<template>
  <div>
    <NavbarAdmin />

    <slot></slot>

    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from "@/components/navigation/AppFooter.vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";
</script>
