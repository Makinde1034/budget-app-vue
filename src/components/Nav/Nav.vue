<template>
  <div class="flex justify-end  p-5" >
    <button ref="toggleNav">
      <img
        @click="
          () => {
            isMenuOpen = !isMenuOpen
          }
        "
        class="h-5 text-white"
        src="../../assets/logout.svg"
        alt="hero-image"
      />
    </button>

    <div
        v-show="isMenuOpen" 
        ref="navContainer" 
        class="absolute top-[50px]"
      >
      <button
        @click="logoutHandler()"
        class=" border text-left border-[#484f58] w-[100px] rounded-lg gr p-3"
      >
        <span class="text-white text-xs">Logout</span>
      </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavBar',
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
