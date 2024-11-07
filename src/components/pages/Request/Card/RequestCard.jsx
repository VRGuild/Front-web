import React, { useEffect, useState } from 'react';
import {
  Container,
  TopContainer,
  InfoLabelContainer,
  LabelContainer,
  LikeIcon,
  Title,
  BottomContainer,
  StyledLink,
} from './style';
import InfoLabel from './InfoLabel/InfoLabel';
import Label from '../../../common/Label/Label';

const RequestCard = ({ requestData }) => {
  const [labelData, setLabelData] = useState([]);
  const [deadLine, setDeadLine] = useState(0);
  useEffect(() => {
    const newLabels = [];
    if (requestData.workType === 'both') newLabels.push('상주', '원격');
    else if (requestData.workType === 'local') newLabels.push('상주');
    else newLabels.push('원격');

    if (requestData.progressClassification === 'new') newLabels.push('신규');
    else newLabels.push('리뉴얼');

    setLabelData(newLabels);
  }, [requestData]);
  useEffect(() => {
    const calculateDaysUntilDeadline = () => {
      const today = new Date();
      const deadline = new Date(requestData.deadlineDate);
      const differenceInTime = deadline - today;
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setDeadLine(differenceInDays);
    };
    calculateDaysUntilDeadline();
  }, [requestData]);
  return (
    <>
      {requestData && (
        <Container>
          <TopContainer>
            <InfoLabelContainer>
              {labelData.map((text, index) => (
                <InfoLabel key={index} text={text} />
              ))}
            </InfoLabelContainer>
            <LikeIcon src="src/assets/svgs/like_icon.svg" />
          </TopContainer>
          <StyledLink to={`/project/${requestData.projectId}`}>
            <Title>{requestData.previewTitle}</Title>
          </StyledLink>
          <BottomContainer>
            <LabelContainer>
              {requestData?.requiredWorkers.map((text, index) => (
                <Label key={index} text={text} />
              ))}
            </LabelContainer>
            <Label text={'마감까지 ' + deadLine + '일'} />
          </BottomContainer>
        </Container>
      )}
    </>
  );
};

export default RequestCard;
