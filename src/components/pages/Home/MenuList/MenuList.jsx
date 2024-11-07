import React from 'react';
import { Container, TopContainer, BottomContainer } from './style';
import Menu from '../Menu/Menu';
import homeIcon from '../../../../assets/svgs/home_icon.svg';
import requestIcon from '../../../../assets/svgs/request_icon.svg';
import qnaIcon from '../../../../assets/svgs/qna_icon.svg';
import freelancerIcon from '../../../../assets/svgs/freelancer_icon.svg';

const MenuList = () => {
  return (
    <Container>
      <TopContainer>
        <Menu icon={homeIcon} text="Home" link="/home" />
        <Menu icon={requestIcon} text="의뢰" link="/project" />
        <Menu icon={qnaIcon} text="질문" link="/qna" />
      </TopContainer>
      <BottomContainer>
        <Menu icon={freelancerIcon} text="프리랜서" />
      </BottomContainer>
    </Container>
  );
};

export default MenuList;
