import { CopyIcon, RepeatIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import ClipboardJS from 'clipboard';
import { useEffect, useRef, useState } from 'react';
import {
  greatStrengthLimit,
  lowStrengthLimit,
  mediumStrengthLimit
} from '../utils/config';

const GeneratedPass = ({
  inputRef,
  onPasswordInputChange,
  passwordStrongness,
  onRefreshClicked
}) => {
  const [progressBarClass, setProgressBarClass] = useState('');
  const copyButtonRef = useRef();
  const toast = useToast();

  useEffect(() => {
    if (passwordStrongness > greatStrengthLimit) {
      setProgressBarClass('w-full bg-green-500');
    } else if (passwordStrongness > mediumStrengthLimit) {
      setProgressBarClass('w-3/4 bg-blue-500');
    } else if (passwordStrongness > lowStrengthLimit) {
      setProgressBarClass('w-2/4 bg-orange-500');
    } else {
      setProgressBarClass('w-1/4 bg-red-500');
    }
  }, [passwordStrongness]);

  useEffect(() => {
    if (copyButtonRef.current) {
      let clipboard = new ClipboardJS(copyButtonRef.current);

      clipboard.on('success', function (e) {
        toast({
          title: 'Copied successfully!',
          status: 'info',
          duration: 1500,
          isClosable: true,
          position: 'bottom',
          variant: 'solid'
        });
      });
    }
  }, [copyButtonRef]);

  return (
    <>
      <div className="relative py-3">
        <input
          className="pl-5 pr-24 w-full font-normal text-lg bg-transparent"
          ref={inputRef}
          onChange={onPasswordInputChange}
        />
        <div
          className="absolute right-2 bottom-1/2 p-2 translate-y-1/2 rounded-full cursor-pointer transition dark:hover:bg-gray-500/50 hover:bg-gray-300/50"
          onClick={onRefreshClicked}
        >
          <RepeatIcon display={'block'} w={5} h={5} />
        </div>
        <div
          className="absolute right-12 bottom-1/2 p-2 translate-y-1/2 rounded-full cursor-pointer transition dark:hover:bg-gray-500/50 hover:bg-gray-300/50"
          ref={copyButtonRef}
          data-clipboard-text={inputRef.current?.value}
        >
          <CopyIcon display={'block'} w={5} h={5} />
        </div>
        <div className="absolute h-1 bottom-0 w-full bg-gray-300"></div>
        <div className={'absolute h-1 bottom-0 ' + progressBarClass}></div>
      </div>
    </>
  );
};

export default GeneratedPass;
