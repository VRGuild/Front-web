import React from 'react';
import { Container, PlaceHolder, Label } from './style';

const InputBox = (props) => {
  return (
    <Label>
      <Container type="text" onChange={props.onChangeHandler} />
      <PlaceHolder>{props.placeholder}</PlaceHolder>
    </Label>
  );
};

export default InputBox;
