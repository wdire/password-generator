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

  const toggleDarkMode = () => {
    const newMode = darkMode ? 'light' : 'dark';
    document
      .querySelector('html')
      .classList.remove(newMode === 'light' ? 'dark' : 'light');

    document.querySelector('html').classList.add(newMode);
    localStorage.setItem('darkMode', newMode === 'dark');

    setDarkMode(newMode === 'dark');
  };

  return (
    <>
      <div
        className={
          'absolute right-4 top-4 p-3 rounded-full cursor-pointer transition dark:hover:bg-gray-600 hover:bg-gray-300'
        }
        onClick={toggleDarkMode}
      >
        <SunIcon
          display={darkMode ? 'block!important' : 'none!important'}
          w={5}
          h={5}
        />
        <MoonIcon
          display={darkMode ? 'none!important' : 'block!important'}
          w={5}
          h={5}
        />
      </div>
    </>
  );
};

export default ToggleDarkMode;
