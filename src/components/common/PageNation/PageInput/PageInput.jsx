import React, { useState, useEffect } from 'react';
import { useStore } from '../../../../zustand/Store';
import { Container, NumberInput, PageMoveButton } from './style';

const PageInput = () => {
  const { totalPage, setDetailPage } = useStore();
  const [inputPage, setInputPage] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      const numericValue = value ? Number(value) : 0;
      if (numericValue <= totalPage) {
        setInputPage(value);
      }
    }
  };
  const handlePageMove = () => {
    const numericPage = Number(inputPage);
    if (numericPage > 0 && numericPage <= totalPage) {
      setDetailPage.set(numericPage);
    }
  };
  return (
    <Container>
      <NumberInput
        placeholder="입력"
        type="text"
        value={inputPage}
        onChange={handleInputChange}
      />
      <PageMoveButton onClick={handlePageMove}>이동</PageMoveButton>
    </Container>
  );
};

export default PageInput;
