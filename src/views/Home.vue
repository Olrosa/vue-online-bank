<template>
  <AppLoader v-if="loading" />
  <AppPage v-else title="List of requests">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>

    <RequestFilter v-model="filter"/>
    <RequestTable :requests="requests"></RequestTable>

    <teleport to="body">
      <AppModal title="Create a request" @close="modal = false" v-if="modal">
        <RequestModal @created="modal = false"/>      
      </AppModal>
    </teleport>
  </AppPage>
</template>
  
<script>
import { ref, computed, onMounted} from 'vue'
import { useStore } from 'vuex';
import AppPage from '@/components/ui/AppPage.vue'
import RequestTable from '@/components/request/RequestTable.vue'
import AppModal from '@/components/ui/AppModal.vue'
import RequestModal from '@/components/request/RequestModal.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import RequestFilter from '@/components/request/RequestFilter.vue';

export default {
  setup() {
    const modal = ref(false)
    const store = useStore()
    const loading = ref(false)
    const filter = ref({})


    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })

    const requests = computed(() => store.getters['request/requests']
      .filter(request => {
        if (filter.value.name) {
          return request.sn.includes(filter.value.name)
        }
        return request
      })
      .filter(request => {
        if (filter.value.status) {
          return filter.value.status === request.status
        }
        return request
      })
    
    )

    return {
      modal, requests, loading, filter
    }
  },
  components: {AppPage, RequestTable, AppModal, RequestModal, AppLoader, RequestFilter}
}
</script>