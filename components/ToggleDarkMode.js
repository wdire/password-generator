import { useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('darkMode') === 'true';
    document.querySelector('html').classList.add(mode ? 'dark' : 'light');
    setDarkMode(mode);
  }, []);

  const changeDarkMode = (mode = 'light') => {
    document
      .querySelector('html')
      .classList.remove(mode === 'light' ? 'dark' : 'light');

    document.querySelector('html').classList.add(mode);
    localStorage.setItem('darkMode', mode === 'dark');

    setDarkMode(mode === 'dark');
  };

  return (
    <>
      <div
        className={
          'absolute right-4 top-4 p-3 rounded-full cursor-pointer transition ' +
          (darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300')
        }
      >
        <SunIcon
          display={darkMode ? 'block!important' : 'none!important'}
          w={5}
          h={5}
          onClick={() => changeDarkMode('light')}
        />
        <MoonIcon
          display={darkMode ? 'none!important' : 'block!important'}
          w={5}
          h={5}
          onClick={() => changeDarkMode('dark')}
        />
      </div>
    </>
  );
};

export default ToggleDarkMode;
