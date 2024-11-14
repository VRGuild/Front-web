import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 800;
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

export const TinyText = styled.p`
  color: #626262;
  font-family: Pretendard;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.9375rem; /* 187.5% */
`;

export const ContentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
`;

export const HorizontalContainer = styled.div`
  width: ${(props) => (props.width ? props.width : '100')}%;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
`;

export const RoleContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const BlackLabel = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 7.5625rem;
  height: 1.775rem;
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
