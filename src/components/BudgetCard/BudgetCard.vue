<template>
  <div @click="createBudgetHandler" v-if="cardIndex === lastIndex">
    <div class="budgetCard flex justify-center items-center h-[225px]">
      <img class="h-6" src="../../assets/addicon.svg" alt="" />
    </div>
  </div>
  <div @click="handleActiviteisNavigation" v-else>
    <div class="budgetCard">
      <h3 class="text-white font-medium text-xl mb-1">{{ name }}</h3>
      <p class="text-[#DCDCDC] text-sm mb-12">{{ computedDaysLeft }} days left</p>
      <p class="text-white font-medium">{{ amountRemaining }}</p>
      <p class="text-[#DCDCDC]">remaining</p>
      <div class="h-6 rounded-xl mt-5 w-[100%] gr">
        <div
          :style="{ width: amountLeftInPercentage(), backgroundColor: color }"
          :class="` h-[100%] ${getBarRightBorderRadius()}  rounded-tl-3xl rounded-bl-3xl`"
        ></div>
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

  computed: {
    computedDaysLeft() {
      return getDaysLeft(this.startDate, this.endDate)
    },
    amountRemaining() {
      const amt = this.amount - this.amountSpent || 0
      return `₦${numberWithCommas(amt)}`
    },
    getAmountLeftPercentage() {
      const percentage = 100 - (this.amountSpent / this.amount) * 100

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
    }
  }
})
</script>

<style scoped></style>
