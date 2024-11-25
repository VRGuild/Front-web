import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  Text,
  ButtonContainer,
  CardContainer,
} from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { acceptTeam, getTeamData } from '../../../../../api/request';
import Button from '../../../../common/Button/Button';
import RequestTeamCard from '../RequestTeamCard/RequestTeamCard';
const RequestTeamComponent = ({ detailData }) => {
  const { requestId } = useParams();
  const [teamData, setTeamData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTeamId, setSelectedTeamId] = useState(0);
  const navigate = useNavigate();
  const handleButtonClick = async () => {
    const res = await acceptTeam(requestId, selectedTeamId);
    if (res.data.isSuccess === true) {
      alert('선택이 완료되었습니다');
      navigate('/home');
    } else {
      alert('잘못된 응답입니다. 다시 선택해주세요.');
    }
  };
  useEffect(() => {
    const getData = async () => {
      const res = await getTeamData(requestId);
      setTeamData(res.data.result);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Container>로딩 중</Container>
      ) : (
        <Container>
          <Title>{detailData.projectInfo.title}</Title>
          <ButtonContainer>
            <Button text={'지원하기'} onClickHandler={handleButtonClick} />
          </ButtonContainer>
          <Text>함께하고 싶은 팀을 선택해주세요.</Text>
          <CardContainer>
            {teamData.map((team, index) => (
              <RequestTeamCard
                key={index}
                index={index}
                data={team}
                setSelectedTeamId={setSelectedTeamId}
              />
            ))}
          </CardContainer>
        </Container>
      )}
    </>
  );
};
export default RequestTeamComponent;
