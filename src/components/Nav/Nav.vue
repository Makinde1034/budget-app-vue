<template>
  <nav class=" w-full flex justify-between  text-white fixed z-50" >
    <div :class="{ isMenuOpen: 'bg-black border-r-2 border-white rounded-tr-3xl' }" class="w-60 flex items-center px-2">
      <button 
        @click="() => {isMenuOpen = !isMenuOpen}" 
        :class="{ 'bg-white bg-opacity-20': isMenuOpen }"
        class="z-[1000] rounded-full flex-shrink-0 w-9 h-9 lg:hidden" 
        ref="toggleButton"
      >
        <div class="w-[17px] m-auto">
          <div class="w-[80%] rounded mb-2 bg-white h-[2px]"></div>
          <div class="w-1/2 rounded mb-2 bg-white h-[2px]"></div>
          <div class="w-full rounded bg-white h-[2px]"></div>
        </div>
      </button>   

      
      <router-link to="/">
        <span class="text-white text-2xl pl-2"><span class="text-primaryGreen">B</span>udgetBuddy</span>
      </router-link>
    </div>

    <div class="flex items-center py-3 px-5">
      <img class="mr-5" src="../../assets/userIcon.svg" alt="">
      <p>John Doe</p>
    </div>
  </nav>

  <div
    class="lg:hidden"
    ref="sidebarContainer" 
    v-if="isMenuOpen" 
  >
    <Sidebar @handleMenuClose="handleMenuClose"/>
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
