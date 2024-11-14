import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  height: 2.1875rem;
`;
export const SortButtonContainer = styled.div`
  display: inline-flex;
  height: 2.1875rem;
  padding: 0.2rem 0.27938rem 0.2rem 0.27938rem;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: 1px solid #babfc5;
`;

export const SortButton = styled.button`
  display: flex;
  width: 3.5rem;
  height: 1.65rem;
  padding: 0.365rem 0.6125rem 0.365rem 0.625rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #3b4045;
  text-align: center;
  font-family: 'Segoe UI';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.86563rem; /* 115.417% */
`;

export const DisabledButton = styled.button`
  display: flex;
  width: 3.5rem;
  height: 1.65rem;
  padding: 0.365rem 0.6125rem 0.365rem 0.625rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.25rem;
  background: #e3e6e8;
  color: #3b4045;
  text-align: center;
  font-family: 'Segoe UI';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.86563rem; /* 115.417% */
`;

export const FilterButton = styled.button`
  display: flex;
  width: 4.32438rem;
  padding: 0.4375rem 0.64938rem 0.55rem 0.6625rem;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  border-radius: 0.375rem;
  border: 1px solid #393939;
  color: #393939;
  text-align: center;
  font-family: 'Segoe UI';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.86563rem; /* 115.417% */
`;

export const FilterIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;
