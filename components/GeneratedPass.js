import { maxPassLength } from '../utils/options-data';

const GeneratedPass = ({ inputRef, setSliderValue }) => {
  return (
    <>
      <div className="border-b-2 py-3">
        <input
          className="pl-5 pr-16 w-full focus:outline-0 font-normal text-lg"
          ref={inputRef}
          onChange={(event) => {
            if (event.target.value.length > maxPassLength) {
              event.target.value = event.target.value.substring(
                0,
                maxPassLength
              );
            }
            setSliderValue(event.target.value.length);
          }}
        />
      </div>
    </>
  );
};

export default GeneratedPass;
