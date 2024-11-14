import React from 'react';
import { Container, SelectButton, Text, VerticalLine } from './style';

const SelectBox = (props) => {
  return (
    <Container onClick={props.handler} width={props.width}>
      <SelectButton info={props.info} />
      <VerticalLine />
      <Text>{props.text}</Text>
    </Container>
  );
};

export default SelectBox;
