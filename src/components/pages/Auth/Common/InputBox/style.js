import React from 'react';
import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 100%;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
  padding: 0.3rem;
  padding-top: 0.5rem;
`;
export const Label = styled.label`
  border-radius: 0.125rem;
  border: 1px solid #393939;
  position: relative;
  width: 100%;
  height: 2.5625rem;
  display: flex;
  flex-direction: column;
`;
export const PlaceHolder = styled.span`
  color: #cecece;
  font-family: 'Noto Sans KR';
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
  position: absolute;
  top: 0.1rem;
  left: 0.3rem;
  pointer-events: none;
`;
