import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginInputsProps {}

const LoginInputsWrapper = styled.div`
  width: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background: blue;
`;

export const LoginInputs: React.FC<LoginInputsProps> = () => (
  <LoginInputsWrapper>
    <TextField />
    <TextField />
    <Button>LOGIN</Button>
  </LoginInputsWrapper>
);
