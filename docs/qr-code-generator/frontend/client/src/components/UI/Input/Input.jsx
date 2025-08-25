import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin: 1rem 0;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Input = ({ placeholder, value, onChange, type = 'text', required = false }) => {
  return (
    <InputContainer>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </InputContainer>
  );
};

export default Input;