<template>
  <Nav />
  <div class="page z-30">
    <div v-if="!error" class="lg:w-[30%] z-30 w-full">
      <div class="w-full z-30 flex-center-y">
        <h3 class="header">{{ budgetData?.name }}</h3>
        <div class="flex-center-x my-5 items-center rounded-3xl p-3 gr">
          <p class="text-white">{{ computedDaysLeft }} days Left</p>
        </div>
        <div class="w-full flex justify-between">
          <div>
            <h3 class="text-white font-bold">{{ getAmountSpent }}</h3>
            <p class="text-white text-sm">Spent</p>
          </div>
          <div class="flex flex-col items-end">
            <h3 class="text-white font-bold">{{ getAmountRemaining }}</h3>
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
              <img class="h-3 rotate-180" src="../assets/arrow.svg" alt="" />
            </div>
            <div>
              <p class="text-white">{{ item.title }}</p>
              <p class="text-white text-sm">{{ nairaDisplay(item.amount) }}</p>
            </div>
          </div>
          <div class="gr relative flex-center-x items-center cursor-pointer p-3 rounded-3xl">
            <p class="text-white text-xs mr-3">Category</p>
            <img class="h-2" src="../assets/arrowDown.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="flex-center-x mt-5">
        <Button :onClick="openModal" text="Update" />
      </div>
    </div>
    <div v-else>An error occured</div>
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
import BudgetCard from '../components/BudgetCard/BudgetCard.vue'
import { defineComponent, ref } from 'vue'
import { fetchBudgetActivities, fetchBudget, updateBudget } from '../services/queries'
import { useQuery } from 'vue-query'
import { useRouter, useRoute } from 'vue-router'
import { formatNumber, numberWithCommas } from '../helpers/number'
import UpdateBudgetModal from '../components/Modals/UpdateBudgetModal.vue'
import { useMutation } from 'vue-query'
import { getDaysLeft } from '@/helpers/date'
import Nav from '../components/Nav/Nav.vue'

export default defineComponent({
  name: 'Budgets',
  components: { Button, UpdateBudgetModal, Nav },

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
      isLoading,
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
        refetchOnWindowFocus: false
      }
    )

    return {
      isLoading,
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
  }
})
</script>

<style></style>
