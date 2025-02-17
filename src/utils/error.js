const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Email not found',
    INVALID_PASSWORD: 'Invalid password',
    auth: 'Please, enter to system'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error'
}