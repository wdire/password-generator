import { useEffect, useState } from 'react';

const GeneratedPass = ({
  inputRef,
  onPasswordInputChange,
  passwordStrongness
}) => {
  const [progressBarClass, setProgressBarClass] = useState('');

  useEffect(() => {
    if (passwordStrongness > 100) {
      setProgressBarClass('w-full bg-green-500');
    } else if (passwordStrongness > 50) {
      setProgressBarClass('w-3/4 bg-blue-500');
    } else if (passwordStrongness > 25) {
      setProgressBarClass('w-2/4 bg-orange-500');
    } else {
      setProgressBarClass('w-1/4 bg-red-500');
    }
  }, [passwordStrongness]);

  return (
    <>
      <div className="relative py-3">
        <input
          className="pl-5 pr-16 w-full focus:outline-0 font-normal text-lg"
          ref={inputRef}
          onChange={onPasswordInputChange}
        />
        <div className="absolute h-1 bottom-0 w-full bg-gray-300"></div>
        <div className={'absolute h-1 bottom-0 ' + progressBarClass}></div>
      </div>
    </>
  );
};

export default GeneratedPass;
