<template>
    <AppLoader v-if="loading" />
    <AppPage back title="Request" v-else-if="request">
        <p><strong>Owner name</strong>: {{ request.sn }}</p>
        <p><strong>Phone</strong>: {{ request.phone }}</p>
        <p><strong>Summ</strong>: {{ currency(request.amount) }}</p>
        <p><strong>Status</strong>: <AppStatus :type="request.status" /></p>

        <div class="form-control">
            <label for="status">Status</label>
            <select id="status" v-model="status">
                <option value="done">Done</option>
                <option value="cancelled">Cancelled</option>
                <option value="active">Active</option>
                <option value="pending">Processing</option>
            </select>
        </div>

        <button class="btn danger" @click="remove">
            Remove
        </button>
        <button class="btn" @click="update" v-if="hasChanges">
            Update
        </button>
    </AppPage>
    <h3 v-else class="text-center text-white">
        Requests with ID = {{  id }} not exists
    </h3>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import AppPage from '@/components/ui/AppPage.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import AppStatus from '@/components/ui/AppStatus.vue'
import { currency } from '@/utils/currency'

export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        const loading = ref(true)
        const store = useStore()
        const request = ref()
        const status = ref()

        onMounted(async () => {
            loading.value = true
            request.value = await store.dispatch('request/loadById', route.params.id)
            status.value = request.value?.status
            loading.value = false
        })

        const hasChanges = computed(() => request.value.status !== status.value)

        const remove = async () => {
            await store.dispatch('request/remove', route.params.id)
            router.push('/')
        }

        const update = async () => {
            const data = {...request.value, status: status.value, id: route.params.id}
            await store.dispatch('request/update', data)
            request.value.status = status.value
        }

        return {
            loading, request, id: route.params.id, currency, remove, update, status, hasChanges
        }
    },
    components: {
        AppPage, AppLoader, AppStatus
    }
}
</script>

<style>

</style>