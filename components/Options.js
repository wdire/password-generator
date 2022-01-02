import { Checkbox } from '@chakra-ui/react';
import { optionsData } from '../utils/config';

const Options = ({ optionValues, onOptionsChange }) => {
  return (
    <>
      <div
        className="flex flex-wrap justify-between"
        onChange={onOptionsChange}
      >
        {Object.entries(optionsData.names).map((option, index) => {
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
