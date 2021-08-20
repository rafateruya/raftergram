import React from 'react';
import styled from 'styled-components';
import { LoginInputs } from './LoginInputs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginFormProps {}

const LoginFormWrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  margin: 10px;
  padding: 10px 0;
`;

const AppName = styled.h1`
  font-family: 'Brush Script MT', cursive;
  font-size: 40px;
  font-weight: 100;
  padding: 0 50px;
`;
const LoginInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: red;
`;

export const LoginForm: React.FC<LoginFormProps> = () => (
  <LoginFormWrapper>
    <AppName>Raftergram</AppName>
    <LoginInputsWrapper>
      <LoginInputs />
    </LoginInputsWrapper>
  </LoginFormWrapper>
);
