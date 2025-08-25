import styled from 'styled-components';

export const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const QRCodeImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 10px 0;
`;

export const DownloadButton = styled.a`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;