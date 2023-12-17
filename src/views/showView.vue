<script setup>
    // import {reactive, computed} from 'vue'
    import { useRoute } from 'vue-router';
    import shows from "../data/shows.json"
    import {RouterLink} from "vue-router"
    import NotFound from "../components/404Component.vue"

    const route = useRoute()
    const showID = parseInt(route.params.id)
    const show = shows.find(s => s.id === showID)

   

</script>

<template>
    <section class="bg-LightGrayishBlue">
        <div v-if="show" class="flex flex-col space-y-6 lg:mx-6 p-12">

            <div class="flex space-x-3">
                <RouterLink to="/shows" class="hover:text-blueSecondary font-bold md:text-xl">Shows</RouterLink>
                <span class="text-gray-400 md:text-xl">></span>
                <span class="text-gray-400 font-bold md:text-xl">{{ show.title }}</span>
            </div>
            
            <div class="show_card" :style="{backgroundImage: `url(${show.image})`}"></div>

            <div class="flex flex-col space-y-4 md:flex-row md:space-y-0  md:border-b md:border-gray-300 md:space-x-4">
                <button class="bg-gray-200 px-5 py-2 text-blueTertiary md:rounded-t-lg hover:bg-gray-300">All</button>
                <button class="bg-gray-200 px-5 py-2 text-blueTertiary md:rounded-t-lg hover:bg-gray-300">Canon</button>
                <button class="bg-gray-200 px-5 py-2 text-blueTertiary md:rounded-t-lg hover:bg-gray-300">Filler</button>
                <button class="bg-gray-200 px-5 py-2 text-blueTertiary md:rounded-t-lg hover:bg-gray-300">Partial</button>
            </div>

            <table class="text-left border text-sm lg:text-lg">
                    <thead class="text-lg lg:text-2xl text-white bg-blueTertiary">
                        <th scope="col" class="p-3">#</th>
                        <th scope="col" class="p-3 w-2/3">Episode Title</th>
                        <th scope="col" class="p-3">Type</th>
                    </thead>

                    <tbody v-for="(item, episodes) in show.episodes" :key="episodes.ep">
                        <tr class="border-b">
                            <td class="p-3 text-blueSecondary font-bold">{{ item.ep }}</td>
                            <td class="p-3">{{ item.ep_title }}</td>
                            <td class="p-3">
                                <span class="bg-black text-white font-bold rounded-full py-2 px-4">
                                    {{ item.ep_type }}
                                </span>
                            </td>
                        </tr>
                    </tbody>

            </table>
        </div>

        <div v-else>
            <NotFound/>
        </div>
    </section>
    
</template>

<style scoped>
    .show_card {
        min-height: 300px;
        background-color: hsl(243, 87%, 12%);
        color: white;
        font-size: 20px;
        border-radius: 8px;
        box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.8);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 15%;
    }
</style>