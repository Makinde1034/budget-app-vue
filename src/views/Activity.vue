<template>
  <div class="min-h-[100vh] px-4 xs:pl-20 py-40">
    <div v-if="!error && !isLoading" class="w-full max-w-[450px] mx-auto rounded-2xl border-primaryGreen border p-10">
      <div class="w-full flex-center-y">
        <h3 class="text-4xl text-white font-bold">{{ budgetData?.name }}</h3>
        <div class="flex-center-x my-5 items-center rounded-3xl p-3 px-6 gr">
          <p class="text-white">{{ computedDaysLeft }} days Left</p>
        </div>
        <div class="w-full flex justify-between">
          <div>
            <h3 class="text-red-600 text-2xl font-bold">{{ getAmountSpent }}</h3>
            <p class="text-white text-sm">Spent</p>
          </div>
          <div class="flex flex-col items-end">
            <h3 class="text-green-600 text-2xl font-bold">{{ getAmountRemaining }}</h3>
            <p class="text-white text-sm">Remaining</p>
          </div>
        </div>
        <div class="h-6 rounded-xl mt-5 w-[100%] gr">
          <div
            :style="{ width: amountLeftInPercentage(), backgroundColor: budgetData?.color }"
            :class="` h-[100%]  ${getBarRightBorderRadius()}  rounded-tl-3xl rounded-bl-3xl`"
          ></div>
        </div>
      </div>
      <div class="mt-5" v-for="(item, index) in data" :key="index">
        <div class="flex justify-between">
          <div class="flex">
            <div class="h-10 w-10 flex-center-x items-center mr-5 gr rounded-full">
              <img class="h-3 -rotate-90" src="../assets/arrow.svg" alt="" />
            </div>
            <div>
              <p class="text-white text-xl">{{ item.title }}</p>
              <p class="text-white text-sm">{{ nairaDisplay(item.amount) }}</p>
            </div>
          </div>
          <div class="gr h-max text-white text-center py-2 px-4 rounded-3xl">
            <p>{{ item.category }}</p>
          </div>
        </div>
      </div>
      <div class="flex-center-x mt-12">
        <Button :onClick="openModal" text="Update" />
      </div>
    </div>

    <div v-else-if="isLoading" class="w-full max-w-[450px] mx-auto animate-pulse rounded-2xl border-primaryGreen border p-10">
      <div class="w-full flex-center-y">
        <div class="max-w-[300px] w-full h-10 rounded-3xl gr"></div>
        <div class="flex-center-x my-5 items-center rounded-3xl gr">
          <div class="w-32 h-12"></div>
        </div>
        <div class="w-full flex justify-between">
          <div>
            <div class="h-7 w-16 gr mb-2 rounded-lg"></div>
            <div class="h-4 w-10 gr rounded-md"></div>
          </div>
          <div class="flex flex-col items-end">
            <div class="h-7 w-16 gr mb-2 rounded-lg"></div>
            <div class="h-4 w-16 gr rounded-md"></div>
          </div>
        </div>
        <div class="h-7 rounded-3xl mt-5 w-[100%] gr"></div>
      </div>
      <div class="mt-5">
        <div class="flex justify-between">
          <div class="flex">
            <div class="h-10 w-10 flex-center-x items-center mr-5 gr rounded-full">
            </div>
            <div>
              <div class="w-16 h-5 rounded-md gr mb-2"></div>
              <p class="w-12 h-4 rounded-md gr"></p>
            </div>
          </div>
          <div class="gr w-24 rounded-3xl">
          </div>
        </div>
      </div>
      <div class=" w-40 rounded-full h-14 mx-auto mt-12 gr">
      </div>
    </div>

    <div v-else class="text-white">An error occured</div>
    <UpdateBudgetModal
      :refetchActivities="refetchActivities"
      :refetchBudget="refetchBudget"
      :budgetID="(budgetID as string)"
      :closeModal="closeModal"
      :isModalOpen="isModalOpen"
      :amountRemaining="budgetData?.amount! - Number(budgetData?.amountSpent!)"
    />
  </div>
</template>

<script lang="ts">
import Button from '../components/Button/Button.vue'
import { defineComponent, ref } from 'vue'
import { fetchBudgetActivities, fetchBudget } from '../services/queries'
import { useQuery } from 'vue-query'
import { useRoute } from 'vue-router'
import { formatNumber, numberWithCommas } from '../helpers/number'
import UpdateBudgetModal from '../components/Modals/UpdateBudgetModal.vue'
import { getDaysLeft } from '@/helpers/date'

export default defineComponent({
  name: 'Budgets',
  components: { Button, UpdateBudgetModal },
  data() {
    return {
      isLoading: true
    }
  },
  setup() {
    const route = useRoute()
    const budgetID = route.params.id
    const isModalOpen = ref(false)

    // open update budget modal

    const openModal = () => {
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    // fetch budget activities
    const {
      //isLoading,
      isError,
      data,
      error,
      isFetching,
      refetch: refetchActivities
    } = useQuery(budgetID, () => fetchBudgetActivities(budgetID as string), {
      refetchOnWindowFocus: false
    })
    // fetch budget
    const { data: budgetData, refetch: refetchBudget } = useQuery(
      'budget',
      () => fetchBudget(budgetID as string),
      {
        refetchOnWindowFocus: true
      }
    )

    return {
      //isLoading,
      isError,
      data,
      error,
      isFetching,
      budgetData,
      isModalOpen,
      openModal,
      closeModal,
      budgetID,
      refetchActivities,
      refetchBudget
    }
  },
  computed: {
    getAmountRemaining() {
      return formatNumber(
        numberWithCommas(Number(this?.budgetData?.amount!) - Number(this?.budgetData?.amountSpent!))
      ).display
    },

    getAmountSpent() {
      return formatNumber(numberWithCommas(this.budgetData?.amountSpent || 0))?.display
    },

    computedDaysLeft() {
      const daysLeft = getDaysLeft(
        this?.budgetData?.startDate || '',
        this?.budgetData?.endDate || ''
      )
      if (daysLeft < 0) {
        return 0
      }
      return daysLeft
    },
    getAmountLeftPercentage() {
      const percentage =
        100 - (Number(this?.budgetData?.amountSpent!) / this?.budgetData?.amount!) * 100
      return percentage
    }
  },
  methods: {
    amountLeftInPercentage() {
      return `${this.getAmountLeftPercentage}%`
    },
    nairaDisplay(value: number) {
      return formatNumber(numberWithCommas(value)).display
    },
    getBarRightBorderRadius() {
      if (this.getAmountLeftPercentage < 100) {
        return ''
      }
      return 'rounded-tr-3xl rounded-br-3xl'
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
    //console.log(this.data)
  },
})
</script>

<style></style>
