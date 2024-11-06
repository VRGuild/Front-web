import React from 'react';
import styled from 'styled-components';

export const CustomButton = styled.button`
  height: 100%;
  display: inline-flex;
  height: 2.375rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.bgcolor || '#1B75D0'};
  color: ${(props) => props.fontcolor || '#fff'};
  border-color: ${(props) => props.bordercolor || '#1B75D0'};
  text-align: center;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.38438rem;
  padding: 0.8rem;
  border-radius: 0.7rem;
  border-width: 2px;
  border-style: solid;
`;
