
export const checkValidData = (email, password) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!emailRegex.test(email)){
        return 'Please enter a valid email address.'
    }
    if (password.length < 8) {
        return 'Password must be at least 8 characters long.';
    } else if (!/[A-Z]/.test(password)) {
        return 'Password must contain at least one uppercase letter.';
    }
    return null;
}

