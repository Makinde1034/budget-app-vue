<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  computed: {
  },
})
</script>

<template>
  <div class="px-4 pb-28 xs:pl-20 text-lg text-white">
    <section class=" h-screen flex flex-col justify-center items-center">
      <h1 class="text-center font-semibold text-8xl -md:text-6xl mb-10"><span class="text-primaryGreen">B</span>udgetBuddy</h1>
      <h3 class="text-3xl text-center font-bold">
        Your Ultimate <br />
        <span class="text-primaryGreen">Budgeting </span>Companion
      </h3>
      <p class="leading-6 text-center my-5">
        Stay on top of your spending habits with our user-friendly interface. <br class="-sm:hidden"> 
        Categorize expenses, set budgets, and monitor your financial progress.
      </p>
      <router-link
        class="bg-primaryGreen text-white px-12 hover:opacity-70 py-3 rounded-3xl mt-5"
        to="/register"
      >
        Get started
      </router-link>      
    </section>

    <section class="px-5 max-w-[900px] mx-auto">
      <div class="mt-32 tracking-wide">
        <div class="grid grid-cols-2 -md:grid-cols-1 gap-x-10 mb-40 place-items-center">
          <div class=" -md:mb-10">
            <p class="text-5xl font-semibold leading-tight mb-10">Budgeting will make <br> your life better</p>
            <p>Elevate your budgeting experience with remarkable financial design for your personal finances. Infuse vitality into your financial strategies and ideas.
            </p>            
          </div>

          <div>
            <img class="w-80" src="../assets//budget-one.svg" alt="">
          </div>
        </div>

        <div class="grid grid-cols-2 -md:grid-cols-1 gap-x-10 mb-40 place-items-center">
            <img class="w-80 -md:mb-10" src="../assets//budget-two.svg" alt="">

          <div class="">
            <p class="text-5xl font-semibold leading-tight mb-10">Upcoming Budget Deadline Alerts</p>
            <p>Stay on top of your financial goals effortlessly! Get notified when the end time of a budget is drawing near, ensuring you never miss a deadline.
            </p>            
          </div>
        </div>
        
        <div class="grid grid-cols-2 -md:grid-cols-1 gap-x-10 mb-20 place-items-center">
          <div class=" -md:mb-10">
            <p class="text-5xl font-semibold leading-tight mb-10">Goal Setting and Tracking</p>
            <p>Empower your aspirations with BufgetBuddy! Define your financial objectives and seamlessly track your progress, and stay motivated on your journey to financial success.</p>            
          </div>

          <div>
            <img class="w-80" src="../assets//budget-three.svg" alt="">
          </div>
        </div>
      </div>
      
      <router-link
        class="bg-primaryGreen text-white px-20 hover:opacity-70 py-3 w-max rounded-3xl mx-auto block"
        to="/register"
      >
        Get started
      </router-link>  
    </section>
  </div>
</template>
