import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FooterProps {}

const FooterContainer = styled.div`
  width: 300px;
  height: 100px;
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Footer: React.FC<FooterProps> = () => (
  <FooterContainer>FOOTER</FooterContainer>
);
