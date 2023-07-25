<template>
  <!-- <Nav /> -->
  <div class="h-[100vh] flex flex-col items-center pt-20 px-5">
    <section v-if="isLoading" class="lg:w-[35%] w-full">
      <div class="grid w-[100%] mt-5 gap-5 lg:grid-cols-2">
        <div v-for="(item, index) in [...Array(4)]" :key="index"><SkeletonLoader /></div>
      </div>
    </section>
    <section
      class="h-[100%] flex flex-col items-center justify-center"
      v-else-if="tranformedBudgetData.length === 1"
    >
      <h3 class="text-white font-bold">You have no budget yet.</h3>
      <p class="text-white font-light">Start creating budgets and tracking your finances</p>
      <router-link to="/create"> <Button text="Create budget" /></router-link>
    </section>
    <section v-else class="xl:w-[35%] lg:w-[60%] w-full">
      <h3 class="header">Your Budgets</h3>
      <div class="grid w-[100%] mt-5 gap-5 md:grid-cols-2">
        <div class="" v-for="(item, key) in tranformedBudgetData" :key="key">
          <div class="">
            <BudgetCard
              amountRemaining="ddkdkkd"
              :startDate="item.startDate"
              :endDate="item.endDate"
              :name="item.name"
              :amountSpent="item.amountSpent"
              :amount="item.amount"
              :lastIndex="tranformedBudgetData.length - 1"
              :cardIndex="key"
              :ID="item.ID"
              :color="item.color"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Button from '../components/Button/Button.vue'
import BudgetCard from '../components/BudgetCard/BudgetCard.vue'
import { defineComponent } from 'vue'
import { fetchBudgets } from '../services/queries'
import { useQuery } from 'vue-query'
import SkeletonLoader from '../components/Loaders/SkeletonLoader.vue'
import { RouterLink } from 'vue-router'
import Nav from '../components/Nav/Nav.vue'

export default defineComponent({
  name: 'Budgets',
  components: { Button, BudgetCard, SkeletonLoader, Nav },

  setup() {
    const { isLoading, isError, data, error, isFetching } = useQuery('budgets', fetchBudgets, {
      refetchOnWindowFocus: false
    })

    return { isLoading, isError, data, error, isFetching }
  },
  computed: {
    tranformedBudgetData() {
      return [...this.data as any, {}]
    }
  },
  methods: {
    createBudgetHandler() {
      this.$router.push('/create')
    }
  }
})
</script>
