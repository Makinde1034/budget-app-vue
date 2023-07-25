<template>
  <div
    :class="`w-[100%] px-5 ease-linear duration-300 gr absolute z-50 ${
      isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
    } flex-center-x items-center top-0 h-[100vh] bg-whiyte`"
  >
    <div>
      <div
        @click="closeModal"
        class="bg-primaryBlack cursor-pointer flex-center-x items-center h-12 rounded-full mb-5 w-12"
      >
        <img class="h-5" src="../../assets/cancelicon.svg" alt="" />
      </div>
      <div class="p-5 lg:w-[400px] w-[100%] bg-primaryBlack rounded-[30px] z-50">
        <input
          v-model="updateBudgetInput.amount"
          class="input mb-6"
          type="number"
          placeholder="Amount spent"
        />
        <input
          v-model="updateBudgetInput.title"
          class="input mb-2"
          type="text"
          placeholder="Description"
        />
        <Button
          :disabled="isButtonDisabled"
          :onClick="submitHandler"
          width="100%"
          text="Submit"
          :loading="isLoading"
        />
        <p class="text-xs text-center text-[#ff3333] mt-5" v-if="error">{{ error }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { updateBudget } from '@/services/queries'
import { defineComponent } from 'vue'
import { useMutation } from 'vue-query'
import Button from '../Button/Button.vue'

export default defineComponent({
  name: 'UpdateBudgetModal',
  components: { Button },
  data() {
    return {
      updateBudgetInput: {
        title: '',
        amount: 0
      },
     error:''
    }
  },
  props: {
    isModalOpen: Boolean,
    closeModal: Function,
    budgetID: String,
    refetchActivities: Function,
    amountRemaining: Number,
    refetchBudget: Function
  },

  setup(props) {
    // update budget
    const { mutate, isLoading } = useMutation(updateBudget, {
      onSuccess: () => {
        props.refetchActivities()
        props.closeModal()
        props.refetchBudget()
      }
    })

    return { mutate, isLoading }
  },
  methods: {
    submitHandler() {
      if (Number(this.updateBudgetInput.amount) > this.amountRemaining) {
        this.error =' Oops. Amount entered is greater than amount remaining to spend.'
        return
      }
      this.mutate({
        ...this.updateBudgetInput,
        amount: Number(this.updateBudgetInput.amount),
        id: this.budgetID
      })
    }
  },
  computed: {
    isButtonDisabled() {
      return !this.updateBudgetInput.amount || !this.updateBudgetInput.title
    }
  }
})
</script>
