<template>
  <div class="h-screen flex-center-x pt-32 px-4 xs:pl-20">
    <form @submit.prevent="login" class="w-[35%] min-w-[350px]">
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
      <Button :loading="isLoading" width="100%" text="Sign In" />
      <div class="flex justify-between text-white mt-5 px-1">
        <p>Forgot Password?</p>
        <p class=""><router-link to="/register">Sign Up</router-link></p>
      </div>
      <p class="text-[#ff3333] mt-5 text-sm text-center" v-if="error">{{ error }}</p>
    </form>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'                                
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
        console.log(data)
        router.push('/budget')
      }
    })

    return { mutate, isLoading, data, error }
  },
  watch: {
    data(value) {
      localStorage.setItem('token', value.token)
    }
  },

  methods: {
    login() {
      this.mutate(this.loginRequest)
    }
  },
})
</script>
