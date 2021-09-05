import React from 'react';
import styled from 'styled-components';
import { FacebookLogin } from './FacebookLogin';
import { ForgotPassword } from './ForgotPassword';
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
  text-align: center;
`;

const LoginInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm: React.FC<LoginFormProps> = () => (
  <LoginFormWrapper>
    <AppName>Raftergram</AppName>
    <LoginInputsWrapper>
      <LoginInputs />
      <FacebookLogin />
      <ForgotPassword />
    </LoginInputsWrapper>
  </LoginFormWrapper>
);
