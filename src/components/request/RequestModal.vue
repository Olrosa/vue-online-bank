<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{invalid: sError}">
        <label for="sn">SN</label>
        <input type="text" id="sn" v-model="sn" @blur="sBlur">
        <small v-if="sError">{{ sError }}</small>
    </div>

    <div class="form-control" :class="{invalid: pError}">
        <label for="phone">Phone</label>
        <input type="text" id="phone" v-model="phone" @blur="pBlur">
        <small v-if="pError">{{ pError }}</small>
    </div>

    <div class="form-control" :class="{invalid: aError}">
        <label for="amonut">Summ</label>
        <input type="number" id="amonut" v-model.number="amount" @blur="aBlur">
        <small v-if="aError">{{ aError }}</small>
    </div>

    <div class="form-control">
        <label for="status">Status</label>
        <select id="status" v-model="status">
            <option value="done">Done</option>
            <option value="cancelled">Cancelled</option>
            <option value="active">Active</option>
            <option value="pending">Processing</option>
        </select>
    </div>

    <button class="btn primary" :disabled="isSubmitting">Create</button>
  </form>
</template>

<script>
import { useRequestForm } from '@/use/request-form'
import { useStore } from 'vuex';

export default {
    emits: ['created'],
    setup(_, {emit}) {
        const store = useStore()

        const submit = async values => {
            await store.dispatch('request/create', values)
            emit('created')
        }

        return {
            ...useRequestForm(submit)
        }
    }
}
</script>

<style>

</style>