<template>
    <TheNavbar></TheNavbar>
    <TheSidebar/>
    <div class="container with-nav">
        <AppMessage></AppMessage>
        <router-view/>
    </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import AppMessage from '@/components/ui/AppMessage.vue'

export default {
    components: {
        TheNavbar, AppMessage, TheSidebar
    }
}
</script>

<style>

</style>