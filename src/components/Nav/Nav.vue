<template>
  <div class="flex justify-end  p-5">
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
    <div
      v-show="isMenuOpen"
      @click="logoutHandler()"
      class="absolute border border-[#484f58] top-[50px] w-[100px] rounded-lg gr p-3"
    >
      <div>
        <p class="text-white text-xs">Logout</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Nav',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    logoutHandler() {
      this.$router.push('/')
    }
  }
})
</script>

<style scoped></style>
