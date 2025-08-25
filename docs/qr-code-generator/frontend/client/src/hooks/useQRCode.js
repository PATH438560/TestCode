import { useState } from 'react';
import axios from 'axios';

const useQRCode = () => {
    const [qrCodeData, setQrCodeData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateQRCode = async (url, options = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('/api/qrcode/generate', { url, options });
            if (response.data.success) {
                setQrCodeData(response.data.qrCodeImage);
            } else {
                setError(response.data.error.message);
            }
        } catch (err) {
            setError('An error occurred while generating the QR code.');
        } finally {
            setLoading(false);
        }
    };

    const clearQRCode = () => {
        setQrCodeData(null);
        setError(null);
    };

    return {
        qrCodeData,
        loading,
        error,
        generateQRCode,
        clearQRCode,
    };
};

export default useQRCode;