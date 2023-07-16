<template>
  <button
    :disabled="disabled"
    :class="`bg-primaryGreen w-[${width}] ${
      disabled ? 'opacity-70' : 'opacity-100'
    } cursor-pointer text-white px-12 hover:opacity-70 py-3 rounded-3xl mt-5`"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Button',
  props: {
    text: String,
    width: String,
    disabled: Boolean
  }
})
</script>

<style scoped></style>
