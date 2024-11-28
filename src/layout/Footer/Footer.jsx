import React from 'react';
import { Container, Text } from './style';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const handleTextClick = () => {
    navigate('/last');
  };
  return (
    <Container>
      Copyright © 2024 Devlink(SuYeon Lim) All rights reserved.
      <Text>e-mail : help.devlink.official@gmail.com</Text>
      <Text>C.P : 010-2636-3507</Text>
      <Text onClick={handleTextClick}>
        For all the students of MTVS Academy, I wish you all the best.
      </Text>
    </Container>
  );
};

export default Footer;
