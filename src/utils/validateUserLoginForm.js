export const validateUserLoginForm = (values) => {
    const errors = {};
        if (values.username.length <= 5  || values.username.length > 15){
        errors.username = 'Username must be at least 6 characters but not greater than 15.'
    }
    if (values.password.length <= 8){
        errors.password = 'Password must at least contain 8 characters.'
    }
    if (values.username === '') {
        errors.username = 'Required'
    }
    if (values.password === '') {
        errors.password = 'Required'
    }

    return errors;
};