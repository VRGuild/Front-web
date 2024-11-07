import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: ${(props) => (props.labelwidth ? `${props.labelwidth}%` : '100%')};
  min-height: ${(props) => (props.isTextBox ? '15rem' : '1.375rem')};
  display: flex;
  align-items: ${(props) => (props.isTextBox ? 'flex-start' : 'center')};
  justify-content: ${(props) => (props.isTextBox ? 'flex-start' : 'flex-end')};
  padding: ${(props) => (props.isTextBox ? '0.3rem' : '0.1rem')};
  padding-right: 0.1rem;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 350;
  line-height: 0.9375rem;
  text-align: ${(props) => (props.isTextBox ? 'left' : 'right')};
  border-radius: 0.125rem;
  border: 1px solid #1b75d0;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
`;
