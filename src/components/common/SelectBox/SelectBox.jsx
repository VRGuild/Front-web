import React from 'react';
import { Container, SelectButton, Text } from './style';

const SelectBox = (props) => {
  return (
    <Container onClick={props.handler}>
      <SelectButton info={props.info} />
      <Text>{props.text}</Text>
    </Container>
  );
};

export default SelectBox;
