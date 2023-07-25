<template>
  <div class="page px-5">
    <form @submit.prevent="register" class="lg:w-[25%]">
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
      <router-link to="/login"
        ><p class="text-center text-white text-xs mt-5">Already have an account ? Login</p></router-link
      >
      <p class="text-[#ff3333] mt-5 text-sm text-center" v-if="error">{{ error }}</p>
    </form>
  </div>
</template>
<script lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'            
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
    }
  }
})
</script>
