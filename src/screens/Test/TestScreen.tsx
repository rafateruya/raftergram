import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { testState } from '../../recoilState/testState';

export const TestScreen = () => {
  const [counter, setCounter] = useState(0);
  const [test, setTest] = useRecoilState(testState);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      setTest((prevTest) => [
        ...prevTest,
        {
          id: Date.now().toString(),
          randomNumber: Math.random(),
        },
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>Counter: {counter}</div>
      <div>
        Test:{' '}
        {test.map((testItem, index) => (
          <div>
            Id: {testItem.id} {testItem.randomNumber}
            <button
              type="button"
              onClick={() => {
                const copyArray = [...test];

                copyArray[index] = {
                  ...copyArray[index],
                  id: Math.random().toString(),
                };
                setTest([...copyArray]);
              }}
            >
              SIDE BUTTON
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
