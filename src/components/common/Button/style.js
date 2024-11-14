import React from 'react';
import styled from 'styled-components';

export const CustomButton = styled.button`
  height: 100%;
  display: inline-flex;
  height: 2.375rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.bgcolor || '#393939'};
  color: ${(props) => props.fontcolor || '#fff'};
  border-color: ${(props) => props.bordercolor || '#393939'};
  text-align: center;
  font-size: 0.8125rem;
  font-style: normal;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 1.38438rem;
  padding: 0.8rem;
  border-radius: 0.7rem;
  border-width: 2px;
  border-style: solid;
`;
