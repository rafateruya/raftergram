import React from 'react';
import styled from 'styled-components';
import { Carousel } from '../../../components/Carousel/Carousel';
import { imagesData } from './imagesData';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppImages {}

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

const StyledImage = styled.img`
  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const AppImages: React.FC<AppImages> = () => (
  <>
    <CarouselWrapper>
      <Carousel
        shouldAutoPlay
        autoPlaySpeed={5000}
        shouldShowDots={false}
        shouldShowArrows={false}
        isDraggable={false}
        shouldUseFade
      >
        {imagesData.map((image) => (
          <StyledImage src={image.src} alt={image.alt} />
        ))}
      </Carousel>
    </CarouselWrapper>
  </>
);
