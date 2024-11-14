import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 15rem;
  padding: 7.8rem 2rem 3rem 2rem;
  border-radius: 0.625rem;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.69rem;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.p`
  height: 40%;
  color: #000;
  text-align: center;
  font-family: 'Noto Sans Bengali';
  font-size: 4.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;
export const SemiTitle = styled.p`
  color: #393939;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  align-items: flex-start;
`;

export const SelectBox = styled.button`
  display: flex;
  width: 100%;
  gap: 1.36rem;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 0.3125rem;
  border: 1px solid #393939;
  background: #fff;
`;

export const SelectButton = styled.div`
  width: 0.9375rem;
  height: 0.9375rem;
  background-color: ${(props) => (props.info ? '#393939' : '#fff')};
  border: 1px solid #393939;
  border-radius: 100%;
`;
export const RegisterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: flex-start;
`;
export const RegisterInfoTitle = styled.p`
  color: #393939;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.9375rem;
`;
export const RegisterInfo = styled.p`
  color: #393939;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;
