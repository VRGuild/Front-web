import React from 'react';
import { Link } from 'react-router-dom';
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
  gap: 0.2rem;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoLabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;
`;

export const LikeIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Title = styled.p`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.91438rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
`;
