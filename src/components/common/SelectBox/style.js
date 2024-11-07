import React from 'react';
import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 2.5625rem;
  display: flex;
  padding: 0.3rem 0.9rem;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.125rem;
  border: 1px solid #1b75d0;
  box-sizing: border-box;
`;

export const SelectButton = styled.div`
  width: 0.7375rem;
  height: 0.7375rem;
  background-color: ${(props) => (props.info ? '#1b75d0' : '#fff')};
  border: 1px solid #1b75d0;
  border-radius: 100%;
  margin-right: 2rem;
`;

export const Text = styled.p`
  color: #000;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;
