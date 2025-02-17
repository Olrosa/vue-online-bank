<template>
  <component :is="layout + '-layout'" v-if="layout"/>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed, defineComponent } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import AuthLayout from './layout/AuthLayout.vue';

export default {
  setup() {
    const route = useRoute()

    console.log(route.meta.layout)

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {
    MainLayout, AuthLayout
  }
}
</script>