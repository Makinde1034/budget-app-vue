<template>
  <NavBar />
  <div class="h-[100vh] flex flex-col pt-40 px-4 pl-20 items-center">
    <form @submit.prevent="createBudgetHandler" class="lg:w-[30%]" action="">
      <h3 class="header mb-5">Create Budget</h3>
      <input
        v-model="createBudgetRequestData.name"
        class="input mb-6"
        type="text"
        placeholder="Budget title "
      />
      <input
        v-model="createBudgetRequestData.amount"
        class="input mb-6"
        type="number"
        placeholder="Budget Amount"
      />
      <input
        v-model="createBudgetRequestData.startDate"
        class="input mb-6"
        type="text"
        onfocus="(this.type='date')"
        @input="handleMinDate"
        v-bind:min="minDate"
        placeholder="Start date"
      />
      <input
        v-model="createBudgetRequestData.endDate"
        class="input"
        type="text"
        onfocus="(this.type='date')"
        placeholder="End date"
      />
      <p class="text-white mt-5">Customize budget</p>
      <div class="flex">
        <div class="mr-5 mt-5 cursor-pointer" v-for="(item, index) in budgetColors" :key="index">
          <div
            @click="handleColorSelection(index)"
            :class="` p-1 ${
              selectedColorIndex === index &&
              'rounded-full border border-primaryGreen   bg-primaryBlack '
            }`"
          >
            <div :style="{ backgroundColor: item }" class="h-6 w-6 rounded-full" />
          </div>
        </div>
      </div>
      <Button :loading="isLoading" :disabled="isButtonDisabled" width="100%" text="Submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button/Button.vue'
import { useMutation } from 'vue-query'
import { createBudget } from '@/services/queries'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Create',
  components: { Button },
  data() {
    return {
      createBudgetRequestData: {
        amount: '',
        startDate: '',
        endDate: '',
        name: '',
      },
        minDate: '2023-08-01',
      budgetColors: ['#F34F09', '#5433FF', '#FFE000', '#c31432'],
      selectedColorIndex: 0
    }
  },
  setup() {
    const route = useRouter()
    const { isLoading, isError, error, isSuccess, mutate } = useMutation(createBudget, {
      onSuccess: () => {
        route.push('/budget')
      }
    })
    return { mutate, isLoading }
  },
  methods: {
    createBudgetHandler() {                                           
      this.mutate({
        ...this.createBudgetRequestData,
        amount: Number(this.createBudgetRequestData.amount),         
        color: this.budgetColors[this.selectedColorIndex]
      })
    },
    handleColorSelection(index: number) {
      this.selectedColorIndex = index
    },
    handleMinDate(event: Event) {
      const { target } = event
      const inputDate = ((target as HTMLInputElement).value)
      if (inputDate < this.minDate) {
        console.log('pppp')
        // Valid date within the range
      } else {
        // Date out of range, handle accordingly (e.g., show error message)
      }
    },
  },
  computed: {
    isButtonDisabled() {
      return (
        !this.createBudgetRequestData.amount ||
        !this.createBudgetRequestData.startDate ||
        !this.createBudgetRequestData.name ||
        !this.createBudgetRequestData.endDate
      )
    }
  }
})
</script>
