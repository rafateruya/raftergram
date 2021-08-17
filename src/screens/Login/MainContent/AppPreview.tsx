import React from 'react';
import styled from 'styled-components';
import { iPhone } from '../../../assets';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppPreviewProps {}

const AppPreviewWrapper = styled.div`
  width: 400px;
  height: 600px;
  background: blue;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const IphoneImage = styled.img`
  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
const AppImages = styled.div`
  position: absolute;
  top: 14%;
  bottom: 16%;
  left: 23%;
  right: 23%;
  background: red;
`;

export const AppPreview: React.FC<AppPreviewProps> = () => (
  <AppPreviewWrapper>
    <ImageWrapper>
      <AppImages />
      <IphoneImage src={iPhone} alt="mobile device with some app images" />
    </ImageWrapper>
  </AppPreviewWrapper>
);
