import React from 'react';
import styled from 'styled-components';

export const InputContainer = styled.input`
  width: ${(props) => (props.width ? props.width : 100)}%;
  height: ${(props) => (props.height ? props.height : 1.875)}rem;
  border-radius: 0.3125rem;
  border: 3px solid #393939;
  padding-left: 0.5rem;
  color: #393939;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.9375rem;
  &::placeholder {
    color: #cecece;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 15rem;
  resize: none;
  border-radius: 0.3125rem;
  border: 3px solid #393939;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
  color: #393939;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.9375rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #cecece;
  }
`;
