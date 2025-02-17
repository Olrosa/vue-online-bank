const formatter = new Intl.NumberFormat('en-EN', {currency: 'USD', style: 'currency'})

export function currency(value) {
    return formatter.format(value)
}