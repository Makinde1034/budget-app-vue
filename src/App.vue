<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useQueryProvider } from "vue-query"
import NavBar from './components/Nav/Nav.vue'
import Sidebar from './components/Nav/Sidebar.vue'
import FooterComp from './components/Footer.vue'

useQueryProvider()
</script>

<template>
  <NavBar />
  <div class=" -lg:hidden">
    <Sidebar/>    
  </div>

  <RouterView />

  <FooterComp />
</template>

<style scoped>

</style>
