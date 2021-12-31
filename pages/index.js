import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Checkbox,
  CheckboxGroup,
  Stack
} from '@chakra-ui/react';
import { useState } from 'react';

function HomePage() {
  const [sliderValue, setSliderValue] = useState(3);

  return (
    <div className="pt-20 antialiased">
      <div className="mx-auto w-full max-w-sm relative mx-auto shadow-lg rounded-lg border">
        <h1 className="text-center text-xl mb-4 pt-5">Password Generator</h1>
        <div className="border-b-2 py-3">
          <input className="pl-5 pr-16 w-full focus:outline-0 font-normal text-lg" />
        </div>
        <div className="p-5">
          <div className="mb-1">
            Length <span className="font-medium">{sliderValue}</span>
          </div>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={sliderValue}
            min={1}
            max={32}
            step={1}
            onChange={(val) => setSliderValue(val)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={5} bg="blue.500" />
          </Slider>
        </div>
        <div className="p-5">
          <CheckboxGroup>
            <div className="flex flex-wrap justify-between">
              <Checkbox>Uppercase</Checkbox>
              <Checkbox>Lowercase</Checkbox>
              <Checkbox>Numbers</Checkbox>
              <Checkbox>Symbols</Checkbox>
            </div>
          </CheckboxGroup>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
