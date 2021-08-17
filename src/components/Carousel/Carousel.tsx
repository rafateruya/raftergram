import React from 'react';
import Slider from 'react-slick';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CarouselProps {
  shouldShowDots?: boolean;
  infinite?: boolean;
  speed?: number;
  shouldAutoPlay?: boolean;
  autoPlaySpeed?: number;
  shouldShowArrows?: boolean;
  isDraggable?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  shouldShowDots,
  infinite,
  speed,
  shouldAutoPlay,
  autoPlaySpeed,
  children,
  shouldShowArrows,
  isDraggable,
}) => (
  <Slider
    dots={shouldShowDots ?? true}
    infinite={infinite ?? true}
    speed={speed ?? 500}
    autoplay={shouldAutoPlay}
    autoplaySpeed={autoPlaySpeed}
    adaptiveHeight
    arrows={shouldShowArrows ?? true}
    draggable={isDraggable ?? true}
  >
    {children}
  </Slider>
);
