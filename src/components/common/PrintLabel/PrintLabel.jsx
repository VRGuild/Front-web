import React from 'react';
import { Container } from './style';

const PrintLabel = (props) => {
  return (
    <Container labelwidth={props.labelwidth} isTextBox={props.isTextBox}>
      {props.text}
    </Container>
  );
};

export default PrintLabel;
