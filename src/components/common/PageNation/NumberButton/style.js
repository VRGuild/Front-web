import React from 'react';
import styled from 'styled-components';

export const ClickedButton = styled.button`
  display: inline-flex;
  height: 1.6875rem;
  width: 1.6875rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: #e7700d;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem;
`;

export const UnClickedButton = styled.button`
  display: inline-flex;
  height: 1.6875rem;
  width: 1.6875rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  border: 1px solid #babfc5;
  background: transparent;
  color: #3b4045;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem;
`;
