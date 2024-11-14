import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 7.75rem;
  border-bottom: 1px solid #e3e6e8;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
  gap: 0.5rem;
`;

export const QuestionTitle = styled.p`
  color: #393939;
  font-family: 'Noto Sans KR';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.38938rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const QuestionContent = styled.p`
  color: #3b4045;
  font-family: 'Noto Sans KR';
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.0625rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;
`;

export const TimeStamp = styled.p`
  color: #636b74;
  font-family: 'Segoe UI';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
