<template>
  <Nav />
  <div class="h-[100vh] flex flex-col px-5  items-center">
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
        type="text"
        placeholder="Budget Amount"
      />
      <input
        v-model="createBudgetRequestData.startDate"
        class="input mb-6"
        type="text"
        onfocus="(this.type='date')"
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
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import Button from '@/components/Button/Button.vue'
import { useMutation } from 'vue-query'
import { createBudget } from '@/services/queries'
import { useRouter } from 'vue-router'
import Nav from '../components/Nav/Nav.vue'

export default defineComponent({
  name: 'Create',
  components: { Button,Nav },
  data() {
    return {
      createBudgetRequestData: {
        amount: '',
        startDate: '',
        endDate: '',
        name: ''
      },
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
    }
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
