import { minPassLength, maxPassLength } from '../utils/options-data';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '@chakra-ui/react';

const LengthSlider = ({ sliderValue, onSliderChange, inputRef }) => {
  return (
    <>
      <div className="mb-1">
        Length <span className="font-medium">{sliderValue}</span>
      </div>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={sliderValue}
        value={sliderValue}
        min={minPassLength}
        max={maxPassLength}
        step={1}
        onChange={(val) => onSliderChange(val)}
        onFocus={(e) => {
          inputRef.current.focus();
        }}
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
