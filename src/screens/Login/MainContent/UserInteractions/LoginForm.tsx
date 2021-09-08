import React from 'react';
import styled from 'styled-components';
import { FacebookLogin } from './FacebookLogin';
import { ForgotPassword } from './ForgotPassword';
import { LoginInputs } from './LoginInputs';
import { UserInteractionBox } from './UserInteractionBox';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginFormProps {}

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
  <UserInteractionBox>
    <AppName>Raftergram</AppName>
    <LoginInputsWrapper>
      <LoginInputs />
      <FacebookLogin />
      <ForgotPassword />
    </LoginInputsWrapper>
  </UserInteractionBox>
);
