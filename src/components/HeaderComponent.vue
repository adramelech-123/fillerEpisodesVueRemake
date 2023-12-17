<script setup>
import {ref} from "vue"
import { RouterLink } from 'vue-router';

let showMenu = ref(false)

function toggleMenu() {
    showMenu.value = !showMenu.value
}



</script>

<template>

    <nav class="mx-auto py-3 relative px-6 md:px-12 bg-blueTertiary transition ease-in-out delay-250">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center">
                <img src="/images/logo.png" alt="" class="scale-50 rounded-full">
                <h1 class="font-medium text-white text-2xl">FillerEpisodes</h1>
            </div>

            <!-- Nav Links -->
            <div class="hidden md:flex space-x-6 text-lg">
                <RouterLink to="/" class="text-white hover:text-bluePrimary font-medium">Home</RouterLink>
                <RouterLink to="/about" class="text-white hover:text-bluePrimary  font-medium">About</RouterLink>
                <RouterLink to="/shows" class="text-white hover:text-bluePrimary  font-medium">Shows</RouterLink>
                <RouterLink to="/contributors" class="text-white hover:text-bluePrimary  font-medium">Contributors</RouterLink>
            </div>

    
            <!-- Hamburger Icon -->
            <button id="menu-btn" class="block hamburger md:hidden focus:outline-none" @mouseenter="toggleMenu">
                <span class="line line-top"></span>
                <span class="line line-middle"></span>
                <span class="line line-bottom"></span>
            </button>
        </div>

        <div class="flex flex-col md:hidden text-lg  px-6 py-3 rounded-md" v-if="showMenu">
            <RouterLink to="/" class="text-bluePrimary hover:text-white font-medium py-1">Home</RouterLink>
            <RouterLink to="/about" class="text-bluePrimary hover:text-white font-medium py-1">About</RouterLink>
            <RouterLink to="/shows" class="text-bluePrimary hover:text-white font-medium py-1">Shows</RouterLink>
            <RouterLink to="/contributors" class="text-bluePrimary hover:text-white font-medium">Contributors</RouterLink>
        </div>
    </nav>

</template>

<style scoped>
.hamburger {
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: relative;
}

.line {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 3px;
    background-color: white;
  
}

.line-middle {
    transform: translateY(7px);
}

.line-bottom {
    transform: translateY(14px);
}
</style>