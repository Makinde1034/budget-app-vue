<template>
  <nav class="flex justify-between p-5 text-white" >
    <p class="text-white text-2xl pl-5"><span class="text-primaryGreen">B</span>udgetBuddy</p>

    <button ref="toggleNav">
      <img
        @click="
          () => {
            isMenuOpen = !isMenuOpen
          }
        "
        class="h-5"
        src="../../assets/logout.svg"
        alt="hero-image"
      />
    </button>

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

  </nav>
  <div
    v-show="isMenuOpen" 
  >
    <Sidebar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './Sidebar.vue';

export default defineComponent({
  name: 'NavBar',
  components: { Sidebar },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    logoutHandler() {
      this.$router.push('/')
    },
    closeMenuOnClickOutside(event) {
      const navContainer = this.$refs.navContainer
      const toggleNav = this.$refs.toggleNav

      if (!navContainer.contains(event.target) && !toggleNav.contains(event.target)) {
        this.isMenuOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.closeMenuOnClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeMenuOnClickOutside)
  },
})
</script>

<style scoped></style>
