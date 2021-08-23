import React from 'react';
import styled from 'styled-components';
import { LoginForm } from './LoginForm';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserInteractionsProps {}

const UserInteractionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserInteractions: React.FC<UserInteractionsProps> = () => (
  <UserInteractionsContainer>
    <LoginForm />
  </UserInteractionsContainer>
);
