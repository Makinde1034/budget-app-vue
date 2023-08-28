<template>
    <div class="min-h-[100vh] xs:pl-24 px-8 pt-28 pb-24 text-white">
        <div class="flex justify-end mt-2 mb-8">
            <input
                v-model="searchValue" autofocus
                :onChange="handleSearch"
                type="text" placeholder="Search budgets"
                class="h-12 bg-inherit border-white border w-60 p-3"
            >            
        </div>

      <section class="py-6 w-full ">
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
                    :newBudgetOption=false
                />
            </div>
        </div>
        </section>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import BudgetCard from '../components/BudgetCard/BudgetCard.vue'
import { fetchBudgets } from '../services/queries'
import { useQuery } from 'vue-query'

export default defineComponent({
    name: 'Search',
    components: { BudgetCard },
    data() {
        return {
            searchValue: ""
        }
    },
    methods: {
        handleSearch () {
            console.log('Search')
        }
    },
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
    mounted() {
        this.refetch()
    }
  })
  </script>
  