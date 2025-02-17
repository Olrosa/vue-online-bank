import { useForm, useField } from "vee-validate"
import * as yup from 'yup'

export function useRequestForm(fn) {
    const {isSubmitting, handleSubmit} = useForm({
        initialValues: {
            status: 'active'
        }
    })

    const {value: sn, errorMessage: sError, handleBlur: sBlur} = useField(
        'sn',
        yup.string()
            .trim()
            .required()
    )
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
        'phone',
        yup.string()
            .trim()
            .required()
    )
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
        'amount',
        yup.number()
            .required()
            .min(0, 'Summ cant be lower than 0')
    )
    const {value: status} = useField(
        'status',
    )

    const onSubmit = handleSubmit(fn)

    return {
        status,
        isSubmitting,
        onSubmit,
        sn,
        sBlur,
        sError,
        phone,
        pBlur,
        pError,
        amount,
        aBlur,
        aError
    }
}