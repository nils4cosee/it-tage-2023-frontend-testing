<template>
  <div class="container">
    <nav v-if="props.navigation.length > 0" class="nav">
      <div class="nav-left">
        <a class="brand" href="#">My Todos</a>
      </div>
      <div class="tabs">
        <RouterLink
          v-for="link in navigation"
          :key="link.to"
          :to="link.to"
          :class="{
            active: route.path === link.to,
          }"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </nav>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { RouterLink, useRoute } from "vue-router";
export interface Link {
  label: string;
  to: string;
}

export interface DefaultLayoutProps {
  navigation?: Link[];
}

const props = withDefaults(defineProps<DefaultLayoutProps>(), {
  navigation: () => [],
});

const route = useRoute();
</script>
<style lang="scss" scoped>
.container {
  width: 800px;
}
</style>
