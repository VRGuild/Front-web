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
} from './style';
import PrintLabel from '../../../common/PrintLabel/PrintLabel';
import Button from '../../../common/Button/Button';
import { useParams } from 'react-router-dom';
import { getRequestDetail } from '../../../../api/request';

const RequestDetailComponent = () => {
  const [detailData, setDetailData] = useState();
  const { requestId } = useParams();
  useEffect(() => {
    const getDetail = async () => {
      const res = await getRequestDetail(requestId);
      setDetailData(res.data.data);
    };
    getDetail();
  }, []);
  useEffect(()=> {

  },[detailData])
  return (
    <>
      {detailData && (
        <Container>
          <VerticalContainer>
            <Title>{detailData.title}</Title>
            <TypeVerticalContainer>
              <SubTitle>필요 직군</SubTitle>
              <TypeContainer>
                <LabelContainer>
                  <Text>클라이언트</Text>
                  <PrintLabel
                    text={detailData.requiredClient}
                    labelwidth={'25'}
                  />
                  <Text>명</Text>
                </LabelContainer>
                <LabelContainer>
                  <Text>서버</Text>
                  <PrintLabel
                    text={detailData.requiredServer}
                    labelwidth={'25'}
                  />
                  <Text>명</Text>
                </LabelContainer>
                <LabelContainer>
                  <Text>디자인</Text>
                  <PrintLabel
                    text={detailData.requiredDesign}
                    labelwidth={'25'}
                  />
                  <Text>명</Text>
                </LabelContainer>
                <LabelContainer>
                  <Text>기획</Text>
                  <PrintLabel
                    text={detailData.requiredPlanner}
                    labelwidth={'25'}
                  />
                  <Text>명</Text>
                </LabelContainer>
                <LabelContainer>
                  <Text>AI</Text>
                  <PrintLabel
                    text={detailData.requiredAIEngineer}
                    labelwidth={'25'}
                  />
                  <Text>명</Text>
                </LabelContainer>
              </TypeContainer>
            </TypeVerticalContainer>
            <HorizontalContainer>
              <SubTitle>예상 기간</SubTitle>
              <PrintLabel text={detailData.startDateTime} labelwidth={'18'} />
              <Text>~</Text>
              <PrintLabel text={detailData.endDateTime} labelwidth={'18'} />
              <SubTitle>예상 금액</SubTitle>
              <PrintLabel
                text={detailData.estimatedCost + '원'}
                labelwidth={'18'}
              />
            </HorizontalContainer>
            <HorizontalContainer>
              <SubTitle>근무 형태</SubTitle>
              <PrintLabel text={detailData.workType} labelwidth={'18'} />
              <SubTitle>프로젝트 진행 분류</SubTitle>
              <PrintLabel
                text={detailData.progressClassification}
                labelwidth={'18'}
              />
            </HorizontalContainer>
            <PrintLabel text={detailData.content} isTextBox={true} />
            <ButtonContainer>
              <Button text={'지원하기'} />
            </ButtonContainer>
          </VerticalContainer>
        </Container>
      )}
    </>
  );
};

export default RequestDetailComponent;
