<template>
  <div class="h-screen flex-center-x pt-32 px-4 xs:pl-20">
    <form @submit.prevent="register" class="w-[35%] min-w-[350px]">
      <h1 class="text-center text-white text-2xl mb-5">Let's get started</h1>
      <input
        v-model="registerRequest.email"
        required
        placeholder="Email"
        class="input mb-6"
        type="email"
      />
      <input
        v-model="registerRequest.password"
        required
        placeholder="Password"
        class="input"
        type="password"
      />
      <Button :loading="isLoading" width="100%" text="Register" />   
      <p class="text-center text-white text-sm mt-5">Already have an account?<router-link to="/login"> Login</router-link></p>
      <p class="text-[#ff3333] mt-5 text-sm text-center" v-if="error">{{ error }}</p>
    </form>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
import { useMutation } from 'vue-query'
import Button from '@/components/Button/Button.vue'
import { register } from '@/services/queries'

export default defineComponent({
  components: { Button },
  name: 'Todos',
  data() {
    return {
      registerRequest: {
        email: '',
        password: ''
      }
    }
  },
  setup() {
    const router = useRouter()
    const { mutate, data, isLoading, error } = useMutation(register, {
      onSuccess: () => {
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
    register() {
      this.mutate(this.registerRequest)
    },
 
  },

})
</script>
