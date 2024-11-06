import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 5.375rem;
  height: 1.6875rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const NumberInput = styled.input`
  display: flex;
  width: 2.9375rem;
  height: 1.6875rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  color: #3b4045;
  text-align: center;
  font-family: Roboto;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem;
`;

export const PageMoveButton = styled.button`
  display: flex;
  width: 2.1875rem;
  height: 1.6875rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  background: #e7700d;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem; /* 192.308% */
`;
