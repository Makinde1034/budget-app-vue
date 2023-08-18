<template>
  <div @click="createBudgetHandler" v-if="cardIndex === lastIndex">
    <div class="budgetCard flex justify-center items-center h-[225px]">
      <img class="h-6" src="../../assets/addicon.svg" alt="" />
    </div>
  </div>
  <div @click="handleActiviteisNavigation" v-else>
    <div class="budgetCard text-white relative">
      <h3 class="font-medium text-xl mb-1">{{ name }}</h3>
      <p class="text-[#DCDCDC] text-sm mb-12">{{ computedDaysLeft }} days left</p>
      <p class="font-medium">{{ amountRemaining }}</p>
      <p class="text-[#DCDCDC]">remaining</p>
      <div class="h-6 rounded-xl mt-5 w-[100%] gr">
        <div
          :style="{ width: amountLeftInPercentage(), backgroundColor: color }"
          :class="` h-[100%] ${getBarRightBorderRadius()}  rounded-tl-3xl rounded-bl-3xl`"
        ></div>
      </div>
      <div class="flex flex-col items-end absolute top-5 right-7">
        <button @click.stop="
            () => {
              isoptionsOpen = !isoptionsOpen
            }
          "
          class="w-6  flex justify-center rounded-2xl"
        >
          <svg class="w-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
        </button>     
        
        <div v-show="isoptionsOpen" @click.stop="handleButtonClick" class="border border-white rounded-lg">
          <p class="hover:bg-white hover:text-black py-2 px-3 border-b">Pin</p>
          <p class="hover:bg-white hover:text-black py-2 px-3">Delete</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getDaysLeft } from '../../helpers/date'
import { numberWithCommas } from '../../helpers/number'

export default defineComponent({
  name: 'BudgetCard',
  props: {
    name: String,
    daysLeft: String,
    endDate: String,
    startDate: String,
    amount: Number,
    amountSpent: String,
    cardIndex: Number,
    lastIndex: Number,
    ID: String,
    color: String
  },
  data() {
    return {
      isoptionsOpen: false
    }
  },

  computed: {
    computedDaysLeft() {
      return getDaysLeft(this.startDate || '', this.endDate || '')
    },
    amountRemaining() {
      const amt = Number(this?.amount || 0) - Number(this?.amountSpent || 0)
      return `₦${numberWithCommas(amt)}`
    },
    getAmountLeftPercentage() {
      const percentage = 100 - (Number(this?.amountSpent!) / this?.amount!) * 100

      return percentage
    }
  },
  methods: {
    amountLeftInPercentage() {
      return `${this.getAmountLeftPercentage}%`
    },
    getBarRightBorderRadius() {
      if (this.getAmountLeftPercentage < 100) {
        return ''
      }
      return 'rounded-tr-3xl rounded-br-3xl'
    },
    createBudgetHandler() {
      this.$router.push('/create')
    },
    handleActiviteisNavigation() {
      this.$router.push(`/activities/${this.ID}`)
    },
    handleButtonClick(event: Event) {
      event.stopPropagation() // Stops propagation to the prevent routing
    },
  }
})
</script>

<style scoped></style>
