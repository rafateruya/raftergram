import React from 'react';
import styled from 'styled-components';
import { blackIphone, iPhone } from '../../../../assets';
import { AppImages } from './AppImages';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppPreviewProps {}

const AppPreviewWrapper = styled.div`
  width: 400px;
  height: 550px;
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
  z-index: 2;
`;

const BackIphone = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -10px;
  height: 90%;
`;

const AppImagesWrapper = styled.div`
  position: absolute;
  top: 13%;
  bottom: 15%;
  left: 23%;
  right: 23%;
  z-index: 9999;
`;

export const AppPreview: React.FC<AppPreviewProps> = () => (
  <AppPreviewWrapper>
    <ImageWrapper>
      <AppImagesWrapper>
        <AppImages />
      </AppImagesWrapper>
      <IphoneImage src={iPhone} alt="mobile device with some app images" />
      <BackIphone src={blackIphone} alt="mobile device with static image" />
    </ImageWrapper>
  </AppPreviewWrapper>
);
