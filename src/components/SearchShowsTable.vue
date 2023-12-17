<script setup>
    import {defineProps} from "vue"
    import {RouterLink} from "vue-router"

    // eslint-disable-next-line vue/no-setup-props-destructure
    const {showProp} = defineProps(['showProp'])
    

</script>

<template>
    
    <tbody>
        
        <tr class="border-b">
            <td class="p-3">
                <RouterLink :to="`/shows/${showProp.id}`" class="hover:text-blueSecondary hover:font-bold">
                    {{ showProp.title }}
                </RouterLink>
            </td>

            <td class="p-3">{{ showProp.studio }}</td>
            <td class="p-3">{{ showProp.year }}</td>
        </tr>
    </tbody>
</template>