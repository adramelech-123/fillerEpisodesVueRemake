<script setup>
    import Slider from "../components/CarouselComponent.vue"
</script>

<template>
    <section id="hero" class="bg-blueTertiary md:pl-6 py-7">
        <!-- Container -->
        <div class="flex flex-col-reverse px-12 mx-6 py-12 text-center lg:flex-row items-center justify-between md:text-left md:space-x-6 mx-auto">
            <!-- Left -->
            <div class="container flex-col md:w-1/2 space-y-4 pt-6">
                <h1 class="font-bold max-w-lg text-2xl md:text-4xl text-white">Welcome to <span class="text-moderateCyan">FillerEpisodes</span> </h1>
                <p class="max-w-lg text-center md:text-left md:text-2xl text-white">
                    We focus on providing the most up to date filler lists for anime fans around the world. No more fillers! - Begin your search
                </p>

                <form action="">
                    <div class="flex flex-col max-w-lg space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 py-6 ">
                        <input type="search" class="flex-1 px-4 py-2 bg-white border-2 border-gray-500 rounded-md outline-blueTertiary" placeholder="Search shows">
                        <button type="submit" class="px-6 py-2 text-white rounded-md bg-blueSecondary hover:bg-bluePrimary focus:outline-none">
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <!-- RightImage -->
            <div class="">
                <img src="/images/bakugo.png" alt="" class="lg:w-11/12">
            </div>
        </div>
    </section>

    <section id="list-search">
        <div class="flex flex-col px-12 mx-6 py-12 md:py-6 text-center lg:flex-row items-center justify-between md:text-left md:space-x-6 mx-auto">
            <!-- Left -->
            <div class="">
                <img src="/images/hellsing-transparent.png" alt="" class="">
            </div> 

            <!-- Right -->
            <div class="flex flex-col space-y-6 justify-start">
                <h1 class="font-bold max-w-lg text-2xl md:text-4xl text-blueTertiary">Become a contributor</h1>

                <p class="max-w-lg md:text-2xl text-bluePrimary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis eius autem eveniet mollitia, at asperiores suscipit quae similique laboriosam iste minus placeat odit velit quos, nulla architecto amet voluptates?</p>

                <div>
                    <button type="submit" class="px-6 py-2 text-white rounded-full bg-blueSecondary hover:bg-blueTertiary focus:outline-none">
                            Contribute
                    </button>
                </div>
                
            </div>
        </div>
    </section>

    <section id="slider" class="bg-LightGrayishBlue">
        <div class="flex flex-col p-12">
            <h1 class="font-bold text-center text-3xl text-blueTertiary">Popular Shows</h1>
            <Slider/>
        </div>   
    </section>

</template>