<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import { useQuery } from 'vue-query'


export default defineComponent({
  name: 'Todos',
  setup() {
   
  },
  
})
</script>

<template>
  <div class="h-[100vh] flex flex-col items-center justify-center">
    <h3 class="text-3xl text-white">The budget app</h3>
    <router-link to="/budget"
      ><button class="bg-primaryGreen text-white px-12 hover:opacity-70 py-3 rounded-3xl mt-5">
        Get started
      </button></router-link
    >
  </div>
</template>
