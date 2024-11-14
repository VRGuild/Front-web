import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const SelectBox = styled.div`
  position: relative;
  width: 7rem;
  height: 1.375rem;
  border-radius: 0.25rem;
  border: 2px solid #393939;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding-left: 1.4rem;
  align-items: center;
  background-color: #fff;
  transition: border-color 0.3s;
`;

export const StyledSpan = styled.span`
  color: #393939;
  font-family: Pretendard;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  opacity: 0;
  transform: translateY(-10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  visibility: hidden;
  box-sizing: border-box;
  &.show {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

export const Button = styled.button`
  background-color: #393939;
  color: white;
  border: none;
  width: 1.625rem;
  height: 1.375rem;
  border-radius: 0.3125rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #494949;
  }
`;

export const Option = styled.div`
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  color: #393939;
  font-family: Pretendard;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const AddButton = styled.button`
  width: 2.125rem;
  height: 1.375rem;
  border-radius: 0.375rem;
  background: #393939;
  color: #fff;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 0.5625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem; /* 166.667% */
  cursor: pointer;
`;
