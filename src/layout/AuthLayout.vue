<template>
    <div class="container">
        <AppMessage/>
        <router-view/>
    </div>
</template>

<script>
import AppMessage from '@/components/ui/AppMessage.vue';
export default {
    components: {
        AppMessage
    }
}
</script>

<style>

</style>