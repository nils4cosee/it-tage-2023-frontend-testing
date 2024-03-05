<script lang="ts" setup>
const today = new Date().toISOString().replace(/T.*$/, "");
</script>
<template>
  <div>{{ today }}</div>
</template>
