import React from 'react';
import useStore from '../../../../zustand/Store';
import { UnClickedButton, ClickedButton } from './style';

const NumberButton = ({ page }) => {
  const { detailPage, setDetailPage } = useStore();
  const handlePageMove = () => {
    setDetailPage.set(page);
  };

  return page == detailPage ? (
    <ClickedButton>{detailPage}</ClickedButton>
  ) : (
    <UnClickedButton onClick={handlePageMove}>{page}</UnClickedButton>
  );
};

export default NumberButton;
