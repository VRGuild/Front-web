import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
`;

export const Title = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 2.1875rem;
  font-style: normal;
  font-weight: 800;
  line-height: 0.9375rem; /* 42.857% */
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
  gap: 1rem;
`;

export const VerticalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
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

export const UnderLinedLabel = styled.p`
  color: #6e6e6e;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9375rem; /* 75% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 10%; /* 2px */
  text-underline-offset: 14%; /* 2.8px */
  text-underline-position: from-font;
`;

export const CompanyLogo = styled.img`
  height: 11.125rem;
`;

export const SemiTitle = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.9375rem; /* 60% */
`;

export const OccupationContainer = styled.div`
  display: flex;
  width: 8.5625rem;
  justify-content: space-between;
  align-items: center;
`;

export const UnderLinedLabelBlack = styled.p`
  color: #000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9375rem; /* 75% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 10%; /* 2px */
  text-underline-offset: 14%; /* 2.8px */
  text-underline-position: from-font;
`;
