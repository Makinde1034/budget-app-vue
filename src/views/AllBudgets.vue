<template>
  <div class="min-h-[100vh] flex flex-col items-center xs:pl-20 px-4 py-24">
    <section v-if="isLoading" class="w-full px-4 py-6">
      <h3 class="text-6xl text-white font-bold mb-12">Your Budgets</h3>
      <div class=" w-[100%] mt-5 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div class="max-w-[400px] w-full mx-auto" v-for="(item, index) in [...Array(6)]" :key="index"><SkeletonLoader /></div>
      </div>
    </section>

    <section
      class="h-[100%] flex flex-col items-center justify-center"
      v-else-if="transformedBudgetData.length === 1"
    >
      <h3 class="text-white font-bold">You have no budget yet.</h3>
      <p class="text-white font-light">Start creating budgets and tracking your finances</p>
      <router-link to="/create"> 
        <Button text="Create budget"/>
      </router-link>
    </section>

    <section v-else-if="isError">
      <p>An error occured</p>
    </section>

    <section v-else class="px-4 py-6 w-full ">
      <div class="mb-12 md:flex justify-between">
        <h3 class=" mb-4 text-6xl text-white font-bold">Your Budgets</h3>
        <router-link to="/search">
          <input  class="h-12 w-60 p-3 -md:hidden" type="text" placeholder="Search budgets">            
        </router-link>
      </div>

      <div class="grid w-[100%] justify-center mt-5 gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div class="max-w-[400px] w-full mx-auto" v-for="(item, key) in transformedBudgetData" :key="key">
          <BudgetCard
            amountRemaining="ddkdkkd"
            :startDate="item.startDate"
            :endDate="item.endDate"
            :name="item.name"
            :amountSpent="item.amountSpent"
            :amount="item.amount"
            :lastIndex="transformedBudgetData.length - 1"
            :cardIndex="key"
            :ID="item.ID"
            :color="item.color"
            :newBudgetOption=true
          />
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

export default defineComponent({
  name: 'AllBudgets',
  components: { Button, BudgetCard, SkeletonLoader },

  setup() {
    const { isLoading, isError, data, error, isFetching, refetch } = useQuery(
      'budgets',
      fetchBudgets,
      {
        onError: () => {
          console.log('error')
        }
      }
    )

    return { isLoading, isError, data, error, isFetching, refetch }
  },
  computed: {
    transformedBudgetData() {
      return [...(this.data as any), {}]
    }
  },
  methods: {
    createBudgetHandler() {
      this.$router.push('/create')
    }
  },
  created() {
    // handleAuthorizedRouteNavigation()
  },
  mounted() {
    this.refetch()
  }
})
</script>
