import React from 'react';
import styled from 'styled-components';

export const Container = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 2.5625rem;
  display: flex;
  padding: 0.3rem 0.9rem;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.125rem;
  border: 1px solid #393939;
  box-sizing: border-box;
  border-radius: 0.4375rem;
  background: #393939;
  height: 3.3125rem;
  gap: 1rem;
`;

export const SelectButton = styled.div`
  width: 0.6875rem;
  height: 0.6875rem;
  background-color: ${(props) => (props.info ? '#393939' : '#fff')};
  border: 1px solid #fff;
  border-radius: 100%;
`;

export const Text = styled.p`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9375rem;
`;

export const VerticalLine = styled.hr`
  border: 1px solid #808080;
  width: 1;
  height: 80%;
`;
