<template>
    <div class="w-60 h-screen fixed z-40 left-0 top-0 bg-black border-r-white border-r-2 rounded-tr-3xl rounded-br-3xl">
        <nav class="h-full pt-7 pb-[10vh] text-white text-xl flex flex-col justify-between relative" >
            <div><!-- Placeholder DIV --></div>

            <div class="px-9 w-full">
                <router-link 
                    to="/" 
                    @click="$emit('handleMenuClose')"
                    class="flex w-max mb-5 hover:text-primaryGreen"
                >
                    <img class="w-5 h-5 mr-3 text-white" src="../../assets/Nav-Icons/home.svg" alt="">
                    <span>Home</span>
                </router-link>
                <router-link 
                    to="/budget" 
                    @click="$emit('handleMenuClose')"
                    class="flex w-max mb-5 hover:text-primaryGreen"
                >
                    <img class="w-5 h-5 mr-3 text-white" src="../../assets/Nav-Icons/budget.svg" alt="">
                    <span>Budgets</span>
                </router-link>
                <a href="#" class="flex w-max mb-5 hover:text-primaryGreen">
                    <img class="w-5 h-5 mr-3 text-white" src="../../assets/Nav-Icons/goals.svg" alt="">
                    <span>Goals</span>
                </a>
                <a href="#" class="flex w-max mb-5 hover:text-primaryGreen">
                    <img class="w-5 h-5 mr-3 text-white" src="../../assets/Nav-Icons/notifications.svg" alt="">
                    <span>Notifications</span>
                </a>
                <a href="#" class="flex w-max mb-5 hover:text-primaryGreen">
                    <img class="w-5 h-5 mr-3 text-white" src="../../assets/Nav-Icons/settings.svg" alt="">
                    <span>Settings</span>
                </a>
            </div>

            <button 
                @click="logoutHandler()" 
                class=" w-max flex px-9 hover:text-primaryGreen"
            >
                <img class="w-5 h-5 mr-3" src="../../assets/Nav-Icons/logout.svg" alt="">
                <span>Log out</span>
            </button>
        </nav>        
    </div>

</template>
  
<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'SideBar',
        props: [ 'isMenuOpen', 'togglerRef' ],
        methods: {
            logoutHandler() {
                this.$router.push('/')
            }
        }
    })
</script>
  
<style scoped></style>
  