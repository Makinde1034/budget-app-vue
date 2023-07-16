<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useQueryProvider } from "vue-query";

useQueryProvider();
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
