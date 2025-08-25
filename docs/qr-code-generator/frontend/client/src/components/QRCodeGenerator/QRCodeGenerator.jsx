import React, { useState } from 'react';
import { generateQRCode } from '../../services/api';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { Spinner } from '../UI/Spinner/Spinner';
import { QRCodeDisplay } from '../QRCodeDisplay/QRCodeDisplay';
import './QRCodeGenerator.styles.js';

const QRCodeGenerator = () => {
    const [url, setUrl] = useState('');
    const [qrCodeData, setQrCodeData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setUrl(e.target.value);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await generateQRCode({ url });
            if (response.success) {
                setQrCodeData(response.qrCodeImage);
            } else {
                setError(response.error.message);
            }
        } catch (err) {
            setError('An error occurred while generating the QR code.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="qr-code-generator">
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={url}
                    onChange={handleInputChange}
                    placeholder="Enter URL"
                    required
                />
                <Button type="submit" disabled={loading}>
                    {loading ? <Spinner /> : 'Generate QR Code'}
                </Button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {qrCodeData && <QRCodeDisplay qrCodeImage={qrCodeData} />}
        </div>
    );
};

export default QRCodeGenerator;