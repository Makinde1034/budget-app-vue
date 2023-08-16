<template>
  <nav class="flex justify-between p-5 text-white" >
    <div class="flex items-center">
      <button @click="() => {isMenuOpen = !isMenuOpen}" class="z-[1000] h-max lg:hidden" ref="toggleNav">
        <div v-if="!isMenuOpen" class="w-5">
          <div class="w-[80%] rounded mb-2 bg-white h-[2px]"></div>
          <div class="w-1/2 rounded mb-2 bg-white h-[2px]"></div>
          <div class="w-full rounded bg-white h-[2px]"></div>
        </div>

        <svg v-else class="h-7" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </button>   

      <p class="text-white text-2xl pl-5"><span class="text-primaryGreen">B</span>udgetBuddy</p>
    </div>

    <!--
    <div
      v-show="isMenuOpen" 
      ref="navContainer" 
      class="absolute right-5 top-[55px] border-2 border-primaryGreen rounded h-max bg-neutral-100 overflow-hidden"
    >
      <router-link to="/budget" class="px-5 p-2 block hover:bg-neutral-300 cursor-pointer border-b border-primaryGreen">Budgets</router-link>
      <a @click="logoutHandler()" class="px-5 p-2 block hover:bg-neutral-300 cursor-pointer">Logout</a>
    </div>
    -->

    <div class="flex items-center">
      <img class="mr-5" :src="userIcon" alt="">
      <p>John Doe</p>
    </div>
  </nav>
  <div
    class="lg:hidden"
    v-if="isMenuOpen" 
  >
    <Sidebar @handleClick="handleClick()"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './Sidebar.vue'
import userIcon from '../../assets/userIcon.svg'

export default defineComponent({
  name: 'NavBar',
  components: { Sidebar },
  data() {
    return {
      isMenuOpen: false,
      userIcon: userIcon,

    }
  },
  methods: {
    logoutHandler() {
      this.$router.push('/')
    },
    handleClick() {
      this.isMenuOpen = false
    },
    /*closeMenuOnClickOutside(event) {
      const navContainer = this.$refs.navContainer
      const toggleNav = this.$refs.toggleNav

      if (!navContainer.contains(event.target) && !toggleNav.contains(event.target)) {
        this.isMenuOpen = false;
      }
    }*/
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
