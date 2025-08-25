import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.primary ? '#0056b3' : '#5a6268'};
  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`;