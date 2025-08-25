import React from 'react';
import styled from 'styled-components';

const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const QRCodeImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const DownloadButton = styled.a`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const QRCodeDisplay = ({ qrCodeImage, url }) => {
  return (
    <QRCodeContainer>
      {qrCodeImage && (
        <>
          <QRCodeImage src={qrCodeImage} alt="Generated QR Code" />
          <DownloadButton href={qrCodeImage} download="qrcode.png">
            Download QR Code
          </DownloadButton>
        </>
      )}
      {!qrCodeImage && <p>No QR code generated yet.</p>}
    </QRCodeContainer>
  );
};

export default QRCodeDisplay;