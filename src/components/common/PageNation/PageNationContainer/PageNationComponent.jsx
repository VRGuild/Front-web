import React, { useState, useEffect } from 'react';
import useStore from '../../../../zustand/Store';
import { Container, NumberButtonContainer, MoreText } from './style';
import NextPrevButton from '../NextPrevButton/NextPrevButton';
import NumberButton from '../NumberButton/NumberButton';
import PageInput from '../PageInput/PageInput';

// 페이지수 % 5 => 마지막 페이지 개수 => 페이지수에서 1씩 빼면서 마지막 페이지 개수만큼 센 걸 배열로 만들어서 해당 범위내에 들어오게 되면 Next 버튼 안보이게
// 페이지가 1~5면 Prev버튼, … 없앰
// 페이지수 5이하면 Next Prev버튼 없앰
// 현재 페이지가 포함된 5단위 숫자열 버튼 보이게

const PageNationComponent = () => {
  const { detailPage, totalPage } = useStore();
  const [modulerPage, setModulerPage] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const handleNextButton = () => {
    if (modulerPage.includes(detailPage) || totalPage <= 5) setIsNext(false);
    else setIsNext(true);
  };
  const handlePrevButton = () => {
    if ((0 < detailPage && detailPage <= 5) || totalPage <= 5) setIsPrev(false);
    else setIsPrev(true);
  };
  const handleMoreText = () => {
    if ((0 < totalPage && totalPage <= 5) || modulerPage.includes(detailPage))
      setIsMore(false);
    else setIsMore(true);
  };
  const handleNumberButton = () => {
    const lowerBound = Math.floor((detailPage - 1) / 5) * 5 + 1;
    const newNumbers = [];
    for (let i = 0; i < 5; i++) {
      newNumbers.push(lowerBound + i);
    }
    setNumbers(newNumbers);
  };
  const calcPageModuler = () => {
    const remainder = totalPage % 5;
    const newModulerPages = [];
    const startPage =
      remainder === 0 ? totalPage - 4 : totalPage - remainder + 1;

    for (let i = 0; i < 5; i++) {
      const currentPage = startPage + i;
      if (currentPage <= totalPage) {
        newModulerPages.push(currentPage);
      }
    }

    setModulerPage(newModulerPages);
  };
  useEffect(() => {
    calcPageModuler();
  }, [detailPage]);
  useEffect(() => {
    handleNextButton();
    handlePrevButton();
    handleMoreText();
    handleNumberButton();
  }, [modulerPage, detailPage]);
  return (
    <Container>
      <PageInput />
      <NumberButtonContainer>
        {isPrev && <NextPrevButton isNext={true} />}
        {modulerPage.includes(detailPage)
          ? modulerPage.map((page) => <NumberButton key={page} page={page} />)
          : numbers
              .sort((a, b) => a - b)
              .map((number) => <NumberButton key={number} page={number} />)}
        {isMore && <MoreText>...</MoreText>}
        {isMore && <NumberButton page={totalPage} />}
        {isNext && <NextPrevButton isNext={false} />}
      </NumberButtonContainer>
    </Container>
  );
};

export default PageNationComponent;
