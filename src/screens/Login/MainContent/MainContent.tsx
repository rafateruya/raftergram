import React from 'react';
import styled from 'styled-components';
import { AppPreview } from './AppPreview/AppPreview';
import { UserInteractions } from './UserInteractions/UserInteractions';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainContentProps {}

const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  > div {
    margin: 0px 10px;
  }
`;

export const MainContent: React.FC<MainContentProps> = () => (
  <MainContentContainer>
    <AppPreview />
    <UserInteractions />
  </MainContentContainer>
);
