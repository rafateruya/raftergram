import React from 'react';
import styled from 'styled-components';
import { DownloadApp } from './DownloadApp';
import { LoginForm } from './LoginForm';
import { SignUpBox } from './SignUpBox';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserInteractionsProps {}

const UserInteractionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const UserInteractions: React.FC<UserInteractionsProps> = () => (
  <UserInteractionsContainer>
    <LoginForm />
    <SignUpBox />
    <DownloadApp />
  </UserInteractionsContainer>
);
