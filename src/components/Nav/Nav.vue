<template>
  <nav class=" w-full flex justify-between bg-black text-white fixed z-50" >
    <div class="w-60 flex items-center px-2">
      <button 
        @click="() => {isMenuOpen = !isMenuOpen}" 
        :class="{ 'bg-white bg-opacity-20': isMenuOpen }"
        class="z-[1000] rounded-full flex-shrink-0 w-10 h-10 mr-6" 
        ref="toggleButton"
      >
        <div class="w-[17px] m-auto">
          <div class="w-[80%] rounded mb-2 bg-white h-[2px]"></div>
          <div class="w-1/2 rounded mb-2 bg-white h-[2px]"></div>
          <div class="w-full rounded bg-white h-[2px]"></div>
        </div>
      </button>   
      
      <router-link to="/">
        <span class="text-white text-2xl"><span class="text-primaryGreen">B</span>udgetBuddy</span>
      </router-link>
    </div>

    <div class="flex items-center py-3 px-5">
      <img class="mr-5" src="../../assets/userIcon.svg" alt="">
      <p>John Doe</p>
    </div>
  </nav>

  <div
    ref="sidebarContainer" 
  >
    <Sidebar :isMenuOpen="isMenuOpen" @handleMenuClose="handleMenuClose"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './Sidebar.vue'

export default defineComponent({
  name: 'NavBar',
  components: { Sidebar },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    logoutHandler() {
      this.$router.push('/')
    },
    handleMenuClose() {
      this.isMenuOpen = false
    },
    /*closeMenuOnClickOutside(event: Event) {
      const navContainer = this.$refs.sidebarContainer
      const toggleButton = this.$refs.toggleButton

      if ( !navContainer.contains(event.target) && !toggleButton.contains(event.target) ) {
        this.isMenuOpen = false
      }
    },*/
  },
  /*mounted() {
    document.addEventListener('click', this.closeMenuOnClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeMenuOnClickOutside)
  },*/
})
</script>

<style scoped></style>
