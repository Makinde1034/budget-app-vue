<template>
    <div class="min-h-[100vh] xs:pl-28 px-12 pt-28 text-white">
      <h1 class="text-6xl font-bold">Notifications</h1>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { fetchBudgets } from '../services/queries'
  import { useQuery } from 'vue-query'
  
  export default defineComponent({
    name: 'Notifications',
  
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
  