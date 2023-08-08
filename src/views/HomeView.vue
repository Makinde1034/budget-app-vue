<script lang="ts">
//import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'
//import { useQuery } from 'vue-query'

export default defineComponent({
  name: 'Todos',
  setup() {}
})
</script>

<template>
  <div class="px-5">
    <nav class="flex justify-center py-5">
      <h1 class="text-white text-2xl"><span class="text-primaryGreen">B</span>udgetBuddy</h1>
    </nav>
    <section class="flex pt-28 justify-center items-center flex-col">
      <h3 class="text-3xl text-white text-center font-bold">
        Your Ultimate <br />
        <span class="text-primaryGreen">Budgeting </span>Companion
      </h3>
      <p class="text-white lg:w-[35%] leading-6 text-center text-sm mt-5">
        Stay on top of your spending habits with our user-friendly interface. Categorize expenses,
        set budgets, and monitor your financial progress
      </p>
      <router-link
        class="bg-primaryGreen text-white px-12 hover:opacity-70 py-3 rounded-3xl mt-5"
        to="/register"
        >Get started</router-link
      >
      <img class="w-[900px] mt-10" src="../assets/hero.svg" alt="hero-image" />
    </section>
  </div>
</template>
