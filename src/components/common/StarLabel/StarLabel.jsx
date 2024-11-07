import React from 'react';
import { Container, Text, Star } from './style';

const StarLabel = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Star>*</Star>
    </Container>
  );
};

export default StarLabel;
