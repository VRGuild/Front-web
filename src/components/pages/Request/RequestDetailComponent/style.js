import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.p`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;

export const SubTitle = styled.p`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;

export const Text = styled.p`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 350;
  line-height: 0.9375rem;
`;

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const TypeVerticalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TypeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const VerticalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

export const LabelContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;
