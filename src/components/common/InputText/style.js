import React from 'react';
import styled from 'styled-components';

export const InputContainer = styled.input`
  width: ${(props) => (props.width ? props.width : 100)}%;
  height: ${(props) => (props.height ? props.height : 1.875)}rem;
  border-radius: 0.125rem;
  border: 1px solid #1b75d0;
  padding-left: 0.5rem;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 0.813rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
  line-height: 3rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 15rem;
  resize: none;
  border-radius: 0.125rem;
  border: 1px solid #1b75d0;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 0.813rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
  &:focus {
    outline: none;
  }
`;
