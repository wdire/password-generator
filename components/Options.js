import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import OptionsData from '../utils/options-data';

const Options = ({ optionValues, onOptionsChange }) => {
  return (
    <>
      <div
        className="flex flex-wrap justify-between"
        onChange={onOptionsChange}
      >
        {Object.entries(OptionsData.names).map((option, index) => {
          return (
            <Checkbox
              name={option[0]}
              isChecked={optionValues[option[0]]}
              key={option[0] + '-' + index}
            >
              {option[1]}
            </Checkbox>
          );
        })}
      </div>
    </>
  );
};

export default Options;
