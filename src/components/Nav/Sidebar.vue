<template>    
    <div v-if="!isMenuOpen === false" class="h-screen fixed z-40 left-0 top-0 text-white text-3xl bg-black border-white xs:border-r-2">
        <nav class="h-full leading-[28px] pt-7 pb-[10vh] flex flex-col items-center justify-between relative">
            <div><!-- Placeholder DIV --></div>

            <div class="px-5">
                <router-link 
                    to="/" 
                    @click="$emit('handleMenuClose')"
                    class="flex items-center my-10"
                >
                    <img class="w-7 h-7 mr-6" src="../../assets/Nav-Icons/home-icon.svg" alt="">
                    <span class="">Home</span>
                </router-link>
                <router-link 
                    to="/budget" 
                    @click="$emit('handleMenuClose')"
                    class="flex items-center my-10"
                >
                    <img class="w-7 h-7 mr-6" src="../../assets/Nav-Icons/budget-icon.svg" alt="">
                    <span>Budgets</span>
                </router-link>
                <a href="#" class="flex my-10">
                    <img class="w-7 h-7 mr-6" src="../../assets/Nav-Icons/goals-icon.svg" alt="">
                    <span>Goals</span>
                </a>
                <router-link 
                    to="/notifications" 
                    @click="$emit('handleMenuClose')"
                    class="flex items-center my-10"
                >
                    <img class="w-7 h-7 mr-6" src="../../assets/Nav-Icons/notifications-icon.svg" alt="">
                    <span>Notifications</span>
                </router-link>
                <a href="#" class="flex my-10">
                    <img class="w-7 h-7 mr-6" src="../../assets/Nav-Icons/settings-icon.svg" alt="">
                    <span>Settings</span>
                </a>
            </div>

            <button 
                @click="logoutHandler()" 
                class=" px-5 w-full flex hover:text-primaryGreen"
            >
                <img class="w-7 h-7 mr-6" src="../../assets/Nav-Icons/logout-icon.svg" alt="">
                <span>Logout</span>
            </button>
        </nav>
    </div>

    <div v-else-if="isMenuOpen === false" class="xs:px-5 -xs:h-16 -xs:w-full h-screen fixed z-40 left-0 -xs:bottom-0 xs:top-0 bg-black border-white border-r-2 -xs:border-t-2">
        <nav class="h-full xs:pt-7 xs:pb-[10vh] -xs:px-[4%] flex xs:flex-col justify-between items-center relative">
            <div><!-- Placeholder DIV --></div>

            <div class="w-full -xs:flex justify-between">
                <router-link 
                    to="/" 
                    @click="$emit('handleMenuClose')"
                    class="block my-10"
                >
                    <img class="w-7 h-7 text-white" src="../../assets/Nav-Icons/home-icon.svg" alt="">
                </router-link>
                <router-link 
                    to="/budget" 
                    @click="$emit('handleMenuClose')"
                    class="block my-10"
                >
                    <img class="w-7 h-7" src="../../assets/Nav-Icons/budget-icon.svg" alt="">
                </router-link>
                <a href="#" class="block my-10">
                    <img class="w-7 h-7" src="../../assets/Nav-Icons/goals-icon.svg" alt="">
                </a>
                <router-link 
                    to="/notifications" 
                    @click="$emit('handleMenuClose')"
                    class="block my-10"
                >
                    <img class="w-7 h-7" src="../../assets/Nav-Icons/notifications-icon.svg" alt="">
                </router-link>
                <a href="#" class="block my-10">
                    <img class="w-7 h-7" src="../../assets/Nav-Icons/settings-icon.svg" alt="">
                </a>
            </div>

            <button 
                @click="logoutHandler()" 
                class="-xs:hidden w-max flex hover:text-primaryGreen"
            >
                <img class="w-7 h-7" src="../../assets/Nav-Icons/logout-icon.svg" alt="">
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
  