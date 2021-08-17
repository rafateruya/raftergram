import React from 'react';
import styled from 'styled-components';
import { iPhone } from '../../../assets';
import { Carousel } from '../../../components/Carousel/Carousel';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppPreviewProps {}

const AppPreviewWrapper = styled.div`
  width: 400px;
  height: 600px;
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
  top: 13%;
  bottom: 15%;
  left: 23%;
  right: 23%;
  z-index: 9999;
`;
const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  .slick-slider {
    height: 100%;
  }
  .slick-list {
    height: 100% !important;
    > div {
      height: 100%;
    }
  }
  .slick-track {
    display: flex;
    align-items: stretch;
    height: 100%;
  }
  // slick slide is the container of a single slide item. There is also a wrapper div before our custom component
  .slick-slide {
    display: flex;
    align-self: stretch;
    height: unset;
    > div {
      display: flex;
      align-self: stretch;
      height: 100%;
    }
  }
`;

export const AppPreview: React.FC<AppPreviewProps> = () => (
  <AppPreviewWrapper>
    <ImageWrapper>
      <AppImages>
        <CarouselWrapper>
          <Carousel
            shouldAutoPlay
            autoPlaySpeed={5000}
            shouldShowDots={false}
            shouldShowArrows={false}
            isDraggable={false}
          >
            <IphoneImage src={iPhone} alt="dsa" />
            <IphoneImage
              src="https://aws1.discourse-cdn.com/business7/uploads/figma3/original/2X/3/333322fa9a4ca913162c1d4e61be366eed8d250d.png"
              alt="dsads"
            />
          </Carousel>
        </CarouselWrapper>
      </AppImages>
      <IphoneImage src={iPhone} alt="mobile device with some app images" />
    </ImageWrapper>
  </AppPreviewWrapper>
);
