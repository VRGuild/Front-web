import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  width: calc((100% / 3) - 0.5rem);
`;

export const Label = styled.div`
  width: 3.5625rem;
  display: flex;
  height: 2.1875rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.9375rem;
  background: #3c3c3c;
`;

export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.5rem;
  border: 1px solid #000;
`;

export const MemberText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;

export const TeamDiscriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: #000;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  padding: 0.5rem;
  background: #eaeaea;
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 40.0625rem;
  gap: 1rem;
  border: 1px solid #000;
  padding: 0.5rem;
`;

export const RadarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
