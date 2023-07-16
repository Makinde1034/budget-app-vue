<template>
  <div class="h-[100vh] flex flex-col px-5 pt-20 items-center">
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
        placeholder="Budget Amount "
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
      <Button :disabled="isButtonDisabled" width="100%" text="Submit" />
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

export default defineComponent({
  name: 'Create',
  components: { Button },
  data() {
    return {
      createBudgetRequestData: {
        amount: '',
        startDate: '',
        endDate: '',
        name: ''
      }
    }
  },
  setup() {
    const route = useRouter()
    const { isLoading, isError, error, isSuccess, mutate } = useMutation(createBudget, {
      onSuccess: () => {
        route.push('/budget')
      }
    })
    return { mutate }
  },
  methods: {
    createBudgetHandler() {
      this.mutate({
        ...this.createBudgetRequestData,
        amount: Number(this.createBudgetRequestData.amount)
      })
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
