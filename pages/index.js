import { useEffect, useRef, useState } from 'react';
import GeneratedPass from '../components/GeneratedPass';
import LengthSlider from '../components/LengthSlider';
import Options from '../components/Options';
import generatePassword from '../utils/generate-password';
import OptionsData from '../utils/options-data';
import passwordStrongCheck from '../utils/password-strong-check';
import { maxPassLength } from '../utils/options-data';

function HomePage() {
  const [optionValues, setOptionValues] = useState(OptionsData.defaults);
  const [sliderValue, setSliderValue] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordStrongness, setPasswordStrongness] = useState(0);
  const generatedPasswordInputRef = useRef();

  useEffect(() => {
    const newGeneratedPassword = generatePassword(sliderValue, optionValues);
    setGeneratedPassword(newGeneratedPassword);
    setPasswordStrongness(passwordStrongCheck(newGeneratedPassword));
  }, []);

  useEffect(() => {
    generatedPasswordInputRef.current.value = generatedPassword;
  }, [generatedPassword]);

  const onSliderChange = (event) => {
    const newGeneratedPassword = generatePassword(event, optionValues);
    setGeneratedPassword(newGeneratedPassword);
    setPasswordStrongness(passwordStrongCheck(newGeneratedPassword));
    setSliderValue(event);
  };

  const onOptionsChange = (event) => {
    const newOptions = {
      ...optionValues,
      [event.target.name]: event.target.checked
    };

    const trueOptions = Object.values(newOptions).filter((option) => option);

    // Atleast one option should be enabled
    if (trueOptions.length === 0) return;

    const newGeneratedPassword = generatePassword(sliderValue, newOptions);
    setGeneratedPassword(newGeneratedPassword);
    setPasswordStrongness(passwordStrongCheck(newGeneratedPassword));
    setOptionValues(newOptions);
  };

  const onPasswordInputChange = (event) => {
    if (event.target.value.length > maxPassLength) {
      event.target.value = event.target.value.substring(0, maxPassLength);
    }
    setSliderValue(event.target.value.length);
    setGeneratedPassword(event.target.value);
    setPasswordStrongness(passwordStrongCheck(event.target.value));
  };

  return (
    <div className="pt-20 antialiased">
      <div className="mx-auto w-full max-w-sm relative mx-auto shadow-lg rounded-lg border">
        <h1 className="text-center text-xl mb-4 pt-5">Password Generator</h1>
        <GeneratedPass
          inputRef={generatedPasswordInputRef}
          onPasswordInputChange={onPasswordInputChange}
          passwordStrongness={passwordStrongness}
        />
        <div className="p-5">
          <LengthSlider
            sliderValue={sliderValue}
            onSliderChange={onSliderChange}
            inputRef={generatedPasswordInputRef}
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
