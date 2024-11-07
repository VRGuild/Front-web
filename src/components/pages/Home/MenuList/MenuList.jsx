import React from 'react';
import { Container, TopContainer, BottomContainer } from './style';
import Menu from '../Menu/Menu';
const MenuList = () => {
  return (
    <Container>
      <TopContainer>
        <Menu
          icon="../src/assets/svgs/home_icon.svg"
          text="Home"
          link="/home"
        />
        <Menu
          icon="../src/assets/svgs/request_icon.svg"
          text="의뢰"
          link="/project"
        />
        <Menu icon="../src/assets/svgs/qna_icon.svg" text="질문" link="/qna" />
      </TopContainer>
      <BottomContainer>
        <Menu icon="../src/assets/svgs/freelancer_icon.svg" text="프리랜서" />
      </BottomContainer>
    </Container>
  );
};

export default MenuList;
