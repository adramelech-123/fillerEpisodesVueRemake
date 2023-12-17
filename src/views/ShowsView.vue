<script setup>
    import s from "../data/shows.json"
    import {ref, watch} from "vue"
    import tableData from "../components/SearchShowsTable.vue"

    const shows = ref(s)
    const search = ref("")

    watch(search, () => {
        shows.value = s.filter(
            show => show.title.toLowerCase().includes(search.value.toLowerCase()) || 
            show.jp_title.toLowerCase().includes(search.value.toLowerCase()) ||
            show.studio.toLowerCase().includes(search.value.toLowerCase()) 
            
            )
    })


</script>

<template>
    <section class="md:px-6">
        <!-- Container -->
        <div class="flex flex-col space-y-6 px-12 py-6">
            <form action="">
                <div class="flex max-w-lg space-y-4 lg:flex-row py-6 ">
                    <input v-model.trim="search" type="search" class="flex-1 px-4 py-2 bg-white border-2 border-gray-500 rounded-md outline-blueTertiary" placeholder="Filter shows">
                </div>
            </form>


            <!-- Search shows Table -->
            <table class="text-left text-gray-500 border table-fixed lg:w-9/12">
                <thead class="text-lg text-white bg-blueTertiary">
                    <th scope="col" class="p-3 w-3/4">Anime Title</th>
                    <th scope="col" class="p-3">Studio</th>
                    <th scope="col" class="p-3">Year</th>
                </thead>

                <tableData v-for="show in shows" :key="show.id" :showProp="show"/>

            </table>
        </div>
    </section>
</template>