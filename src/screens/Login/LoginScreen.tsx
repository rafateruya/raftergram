import React from 'react';
import styled from 'styled-components';
import { Footer } from './Footer/Footer';
import { MainContent } from './MainContent/MainContent';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const LoginScreenContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center; ;
`;

const FooterWrapper = styled.div`
  background: red;
`;

export const LoginScreen: React.FC<LoginProps> = () => (
  <LoginScreenContainer>
    <MainContentWrapper>
      <MainContent />
    </MainContentWrapper>
    <FooterWrapper>
      <Footer />
    </FooterWrapper>
  </LoginScreenContainer>
);
