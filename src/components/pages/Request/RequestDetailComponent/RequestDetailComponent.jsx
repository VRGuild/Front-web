import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  SubTitle,
  Text,
  HorizontalContainer,
  TypeContainer,
  VerticalContainer,
  LabelContainer,
  ButtonContainer,
  TypeVerticalContainer,
  UnderLinedLabel,
  CompanyLogo,
  SemiTitle,
  OccupationContainer,
  UnderLinedLabelBlack,
} from './style';
import PrintLabel from '../../../common/PrintLabel/PrintLabel';
import Button from '../../../common/Button/Button';
import { useParams } from 'react-router-dom';
import { getRequestDetail } from '../../../../api/request';

const RequestDetailComponent = ({ setIsRequest, detailData }) => {
  const [workType, setWorkType] = useState([]);
  const changeOccupationToKorean = (occupationName) => {
    if (occupationName === 'Client') return '클라이언트';
    else if (occupationName === 'Server') return '서버';
    else if (occupationName === 'Design') return '디자인';
    else if (occupationName === 'Planner') return '기획';
    else return 'AI';
  };
  const handleButtonClick = () => {
    setIsRequest(true);
  };
  useEffect(() => {
    if (detailData?.projectInfo.workType === 'both')
      setWorkType(['원격', '상주']);
    else if (detailData?.projectInfo.workType === 'remote')
      setWorkType(['원격']);
    else setWorkType(['상주']);
  }, [detailData]);
  return (
    <>
      {detailData && (
        <Container>
          <Title>{detailData.projectInfo.title}</Title>
          <VerticalContainer>
            <SemiTitle>
              {detailData.userInfo.businessInfo.businessName}
            </SemiTitle>
            <CompanyLogo
              src={detailData.userInfo.businessInfo.businessLogoUrl}
              alt="회사 로고"
            />
          </VerticalContainer>
          <VerticalContainer>
            <SemiTitle>근무 형태</SemiTitle>
            <HorizontalContainer>
              {workType.map((type, index) => (
                <UnderLinedLabel key={index}>{type}</UnderLinedLabel>
              ))}
            </HorizontalContainer>
          </VerticalContainer>
          <VerticalContainer>
            <SemiTitle>프로젝트 진행 분류</SemiTitle>
            <HorizontalContainer>
              {detailData.projectInfo.progressClassification === 'new' ? (
                <UnderLinedLabel>신규</UnderLinedLabel>
              ) : (
                <UnderLinedLabel>리뉴얼</UnderLinedLabel>
              )}
            </HorizontalContainer>
          </VerticalContainer>
          <VerticalContainer>
            <SemiTitle>상세 내용</SemiTitle>
            <PrintLabel
              text={detailData.projectInfo.content}
              isTextBox={true}
            />
          </VerticalContainer>
          <VerticalContainer>
            <SemiTitle>필요 직군 및 인원</SemiTitle>
            {detailData.projectInfo.requiredOccupationList.map((occupation) => (
              <OccupationContainer>
                <UnderLinedLabel>
                  {changeOccupationToKorean(occupation.occupationName)}
                </UnderLinedLabel>
                <UnderLinedLabelBlack>
                  {occupation.occupationCount}
                </UnderLinedLabelBlack>
              </OccupationContainer>
            ))}
          </VerticalContainer>
          <VerticalContainer>
            <SemiTitle>예상 기간</SemiTitle>
            <HorizontalContainer>
              <UnderLinedLabel>
                {detailData.projectInfo.startDate}
              </UnderLinedLabel>
              <UnderLinedLabel>~</UnderLinedLabel>
              <UnderLinedLabel>
                {detailData.projectInfo.endDate}
              </UnderLinedLabel>
            </HorizontalContainer>
          </VerticalContainer>
          <VerticalContainer>
            <SemiTitle>예상 금액</SemiTitle>
            <UnderLinedLabel>
              {detailData.projectInfo.estimatedCost.toLocaleString()}원
            </UnderLinedLabel>
          </VerticalContainer>
          <ButtonContainer>
            <Button text={'지원보기'} onClickHandler={handleButtonClick} />
          </ButtonContainer>
        </Container>
      )}
    </>
  );
};

export default RequestDetailComponent;
