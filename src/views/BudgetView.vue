<template>
  <Nav />
  <div class="h-[100vh] flex flex-col items-center  px-5">
    <section v-if="isLoading" class="lg:w-[35%] w-full">
      <div class="grid w-[100%] mt-5 gap-5 lg:grid-cols-2">
        <div v-for="(item, index) in [...Array(4)]" :key="index"><SkeletonLoader /></div>
      </div>
    </section>
    <section
      class="h-[100%] flex flex-col items-center justify-center"
      v-else-if="transformedBudgetData.length === 1"
    >
      <h3 class="text-white font-bold">You have no budget yet.</h3>
      <p class="text-white font-light">Start creating budgets and tracking your finances</p>
      <router-link to="/create"> <Button text="Create budget" /></router-link>
    </section>
    <section v-else-if="isError">
      <p>An error occured</p>
      v
    </section>
    <section v-else class="xl:w-[35%] py-10 lg:w-[60%] w-full">
      <h3 class="header">Your Budgets</h3>
      <div class="grid w-[100%] mt-5 gap-5 grid-cols-2 md:grid-cols-2">
        <div class="" v-for="(item, key) in transformedBudgetData" :key="key">
          <div class="">
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
import { handleAuthorizedRouteNavigation } from '../helpers/navigation'

export default defineComponent({
  name: 'Budgets',
  components: { Button, BudgetCard, SkeletonLoader, Nav },

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
