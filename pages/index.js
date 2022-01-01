import { useEffect, useRef, useState } from 'react';
import GeneratedPass from '../components/GeneratedPass';
import LengthSlider from '../components/LengthSlider';
import Options from '../components/Options';
import generatePassword from '../utils/generate-password';
import OptionsData from '../utils/options-data';

function HomePage() {
  const [optionValues, setOptionValues] = useState(OptionsData.defaults);
  const [sliderValue, setSliderValue] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const generatedPasswordInputRef = useRef();

  useEffect(() => {
    setGeneratedPassword(generatePassword(sliderValue, optionValues));
  }, []);

  useEffect(() => {
    generatedPasswordInputRef.current.value = generatedPassword;
  }, [generatedPassword]);

  const onSliderChange = (event) => {
    setGeneratedPassword(generatePassword(event, optionValues));
    setSliderValue(event);
  };

  const onOptionsChange = (event) => {
    const newOptions = {
      ...optionValues,
      [event.target.name]: event.target.checked
    };
    setGeneratedPassword(generatePassword(sliderValue, newOptions));
    setOptionValues(newOptions);
  };

  return (
    <div className="pt-20 antialiased">
      <div className="mx-auto w-full max-w-sm relative mx-auto shadow-lg rounded-lg border">
        <h1 className="text-center text-xl mb-4 pt-5">Password Generator</h1>
        <GeneratedPass inputRef={generatedPasswordInputRef} />
        <div className="p-5">
          <LengthSlider
            sliderValue={sliderValue}
            onSliderChange={onSliderChange}
          />
        </div>
        <div className="p-5">
          <Options
            optionValues={optionValues}
            onOptionsChange={onOptionsChange}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
