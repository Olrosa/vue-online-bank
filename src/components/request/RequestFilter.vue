<template>
    <div class="filter">
        <div class="form-control">
            <input type="text" placeholder="Start write the name" v-model="name">
        </div>
        <div class="form-control">
            <select v-model="status">
                <option disabled selected>Choose the status</option>
                <option value="done">Done</option>
                <option value="cancelled">Cancelled</option>
                <option value="active">Active</option>
                <option value="pending">Processing</option>
            </select>
        </div>
        <button class="btn warning" v-if="isActive" @click="reset">Clear</button>
    </div>
</template>

<script>
import {ref, watch, computed} from 'vue'

export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    setup(_, {emit}) {
        const name = ref()
        const status = ref()

        watch([name, status], values => {
            emit('update:modelValue', {
                name: values[0],
                status: values[1]
            })
        })

        const isActive = computed(() => name.value || status.value)

        return {
            name, 
            status, 
            isActive, 
            reset: () => {
                name.value = ''
                status.value = null
            }
        }
    }
}
</script>

<style>

</style>