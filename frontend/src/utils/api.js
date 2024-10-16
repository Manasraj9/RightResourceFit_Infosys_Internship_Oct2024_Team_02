const BASE_URL = 'http://localhost:1000/api/auth';

export const signup = async (email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        return await response.text(); // Return the response message
    } catch (error) {
        console.error('Error:', error);
        return 'Error occurred during signup.';
    }
};

export const login = async (email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        return await response.json(); // Return the token
    } catch (error) {
        console.error('Error:', error);
        return 'Error occurred during login.';
    }
};

export const requestReset = async (email) => {
    try {
        const response = await fetch(`${BASE_URL}/request-reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        return await response.text(); // Return the response message
    } catch (error) {
        console.error('Error:', error);
        return 'Error occurred while requesting OTP.';
    }
};

export const verifyOtp = async (email, otp, newPassword) => {
    try {
        const response = await fetch(`${BASE_URL}/verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp, newPassword }),
        });
        return await response.text(); // Return the response message
    } catch (error) {
        console.error('Error:', error);
        return 'Error occurred while verifying OTP.';
    }
};
