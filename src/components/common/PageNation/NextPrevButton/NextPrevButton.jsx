import React from 'react';
import { Button } from './style';
import useStore from '../../../../zustand/Store';
const NextPrevButton = ({ isNext }) => {
  const { setDetailPage } = useStore();
  const handleNextButtonClick = () => {
    setDetailPage.increment();
  };
  const handlePrevButtonClick = () => {
    setDetailPage.decrement();
  };
  return (
    <>
      {isNext === false ? (
        <Button onClick={handleNextButtonClick}>Next</Button>
      ) : (
        <Button onClick={handlePrevButtonClick}>Prev</Button>
      )}
    </>
  );
};

export default NextPrevButton;
