import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const generateQRCode = async (url, options) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/qrcode/generate`, {
            url,
            options
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            return {
                success: false,
                error: {
                    statusCode: error.response.status,
                    message: error.response.data.error.message,
                    details: error.response.data.error.details
                }
            };
        } else {
            return {
                success: false,
                error: {
                    statusCode: 500,
                    message: 'An unexpected error occurred',
                    details: []
                }
            };
        }
    }
};

export const checkHealth = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/health`);
        return response.data;
    } catch (error) {
        return {
            status: 'error',
            message: 'Unable to reach the API'
        };
    }
};