import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  gap: 6.56rem;
`;

export const Title = styled.p`
  color: #000;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const BoxContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const CheckBox = styled.input`
  margin-right: 0.4rem;
`;
export const CheckBoxContainer = styled.div`
  width: 100%;
  height: 0.875rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.1rem;
`;
export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  color: #9694f5;
  font-family: 'Noto Sans KR';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  color: #676767;
  font-family: 'Noto Sans KR';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  padding-top: 0.1rem;
`;
