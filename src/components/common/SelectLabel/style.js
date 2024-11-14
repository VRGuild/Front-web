import React from 'react';
import styled from 'styled-components';

export const LabelContainer = styled.div`
  display: flex;
  gap: 0.1rem;
  align-items: center;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 4.5625rem;
  height: 1.375rem;
  border-radius: 0.25rem;
  border: 1px solid #393939;
  background: #393939;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9375rem;
`;

export const Input = styled.input`
  width: 1.4375rem;
  height: 1.375rem;
  border-radius: 0.375rem;
  border: 2px solid #393939;
  background: #fff;
  color: #393939;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.5625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.9375rem;
`;
