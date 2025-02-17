<template>
    <h4 v-if="requests.length === 0" class="text-center">No requests</h4>
    <table v-else class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>NS</th>
                <th>Phone</th>
                <th>Summ</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, idx) in requests" :key="item.id">
                <td>{{ idx+1 }}</td>
                <td>{{ item.sn }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ currency(item.amount) }}</td>
                <td><AppStatus :type="item.status" /></td>
                <td>
                    <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: item.id}}">
                        <button class="btn" @click="navigate">
                            Open
                        </button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { currency } from '@/utils/currency';
import AppStatus from '../ui/AppStatus.vue';

export default {
    props: ['requests'],
    setup() {
        return {currency}
    },
    components: {AppStatus}
}
</script>

<style>

</style>