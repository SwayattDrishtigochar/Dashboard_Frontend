import { useEffect, useRef } from 'react';
import KioskBoard from 'kioskboard';

const Keyboard = ({ inputRef }) => {
  const keyboardRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      KioskBoard?.run(inputRef.current.querySelector('input'), {
        language: 'en',
        theme: 'light',
        autoScroll: true,
        allowRealKeyboard: true,
        allowMobileKeyboard: true,
        capsLockActive: false,
        cssAnimationsDuration: 100,
        keysArrayOfObjects: [
          {
            0: 'q',
            1: 'w',
            2: 'e',
            3: 'r',
            4: 't',
            5: 'y',
            6: 'u',
            7: 'i',
            8: 'o',
            9: 'p',
          },
          {
            0: 'a',
            1: 's',
            2: 'd',
            3: 'f',
            4: 'g',
            5: 'h',
            6: 'j',
            7: 'k',
            8: 'l',
            9: '@',
          },
          {
            0: 'z',
            1: 'x',
            2: 'c',
            3: 'v',
            4: 'b',
            5: 'n',
            6: 'm',
            7: '.',
          },
        ],
      });
    }
  }, [inputRef]);

  //   return <div ref={keyboardRef} id='KioskBoard-VirtualKeyboard' />;
};

export default Keyboard;
