<template>
  <div class="page px-5">
    <form @submit.prevent="login" class="lg:w-[25%]">
      <h1 class="text-center text-white text-2xl mb-5">Welcome back</h1>
      <input
        v-model="loginRequest.email"
        required
        placeholder="Email"
        class="input mb-6"
        type="email"
      />
      <input
        v-model="loginRequest.password"
        required
        placeholder="Password"
        class="input"
        type="password"
      />
      <Button :loading="isLoading" width="100%" text="Register" />
      <p class="text-[#ff3333] mt-5 text-sm text-center" v-if="error">{{ error }}</p>
    </form>
  </div>
</template>
<script lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { defineComponent } from 'vue'
import { useMutation } from 'vue-query'
import Button from '@/components/Button/Button.vue'
import { login } from '@/services/queries'

export default defineComponent({
  components: { Button },
  name: 'Todos',
  data() {
    return {
      loginRequest: {
        email: '',
        password: ''
      }
    }
  },
  setup() {
    const router = useRouter()
    const { mutate, data, isLoading, error } = useMutation(login, {
      onSuccess: () => {
        router.push('/budget')
      }
    })

    return { mutate, isLoading, data, error }
  },

  methods: {
    login() {
      this.mutate(this.loginRequest)
    }
  }
})
</script>
