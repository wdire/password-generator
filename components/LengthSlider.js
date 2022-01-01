import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '@chakra-ui/react';

import { useState } from 'react';

const LengthSlider = ({ sliderValue, onSliderChange }) => {
  return (
    <>
      <div className="mb-1">
        Length <span className="font-medium">{sliderValue}</span>
      </div>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={sliderValue}
        min={1}
        max={32}
        step={1}
        onChange={(val) => onSliderChange(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={5} bg="blue.500" />
      </Slider>
    </>
  );
};

export default LengthSlider;
