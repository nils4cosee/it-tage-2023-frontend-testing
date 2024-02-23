<template>
  <DefaultLayout
    :navigation="[
      { label: 'Todos', to: '/' },
      { label: 'Clipboard Test-Page', to: '/test/clipboard' },
    ]"
  >
    <RouterView />
  </DefaultLayout>
</template>
<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>
<style lang="scss" scoped></style>
