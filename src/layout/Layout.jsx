import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding-top: ${(props) => props.headerHeight}rem;
`;

const Layout = () => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState('2.75');

  useEffect(() => {
    const setHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight / 16;
        setHeaderHeight(`${height}`);
      }
    };
    setHeight();
    window.addEventListener('resize', setHeaderHeight);
    return () => {
      window.removeEventListener('resize', setHeaderHeight);
    };
  }, [headerRef]);
  return (
    <Container>
      <Header ref={headerRef} />
      <Content headerHeight={headerHeight}>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};

export default Layout;