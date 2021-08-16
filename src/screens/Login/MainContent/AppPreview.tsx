import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppPreviewProps {}

const AppPreviewWrapper = styled.div`
  width: 400px;
  height: 600px;
  background: blue;
`;

export const AppPreview: React.FC<AppPreviewProps> = () => (
  <AppPreviewWrapper>APP PREVIEW</AppPreviewWrapper>
);
