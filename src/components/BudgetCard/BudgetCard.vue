<template>
  <div @click="createBudgetHandler" v-if="cardIndex === lastIndex">
    <div class="budgetCard flex justify-center items-center h-[246px]">
      <img class="h-6" src="../../assets/addicon.svg" alt="" />
    </div>
  </div>

  <div @click="handleActiviteisNavigation" v-else>
    <div class="budgetCard text-white relative">
      <h3 class="font-medium text-3xl mb-1">{{ name }}</h3>
      <p class="text-[#DCDCDC] text-sm mb-12">{{ computedDaysLeft }} {{ computedDaysLeft == 1 ? 'day' : 'days' }} left</p>
      <p class="font-medium text-lg">{{ amountRemaining }}</p>
      <p class="text-[#DCDCDC]">remaining</p>
      <div class="h-6 rounded-xl mt-5 w-[100%] gr">
        <div
          :style="{ width: amountLeftInPercentage(), backgroundColor: color }"
          :class="` h-[100%] ${getBarRightBorderRadius()}  rounded-tl-3xl rounded-bl-3xl`"
        ></div>
      </div>
      <div class="flex flex-col items-end absolute top-5 right-4">
        <button @click.stop="
            () => {
              isoptionsOpen = !isoptionsOpen
            }
          "
          class="w-9 h-9 hover:bg-white hover:bg-opacity-20 flex justify-center rounded-full"
        >
          <img class="w-8" src="../../assets/ellipsis.svg" alt="">
        </button>     
        
        <!--<div v-show="isoptionsOpen" @click.stop="handleButtonClick" class="border border-white rounded-lg">
          <p class="hover:bg-white hover:text-black py-2 px-3 border-b">Pin</p>
          <p @click="deleteBudget" class="hover:bg-white hover:text-black py-2 px-3">Delete</p>
        </div>-->
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getDaysLeft } from '../../helpers/date'
import { numberWithCommas } from '../../helpers/number'
import { deleteBudget } from '@/services/queries'

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
    deleteBudget() {
      //console.log('pppp')
      return deleteBudget()
    }
  }
})
</script>

<style scoped></style>
