<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useQueryProvider } from "vue-query"
import NavBar from './components/Nav/Nav.vue'
import Sidebar from './components/Nav/Sidebar.vue'

useQueryProvider();
</script>

<template>
  <NavBar />
  <div class=" -lg:hidden">
    <Sidebar/>    
  </div>

  <RouterView />
</template>

<style scoped>

</style>
