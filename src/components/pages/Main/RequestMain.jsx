import React, { useEffect, useState } from 'react';
import RequestCard from '../Request/Card/RequestCard';
import { Container } from './style';
import TopContainer from '../Home/Main/ContainerComponent/TopContainer/TopContainer';
import { useNavigate } from 'react-router-dom';
import { getHomeRequests } from '../../../api/request';

const RequestMain = () => {
  const [requestData, setRequestData] = useState([]);
  const navigate = useNavigate();
  const registRequest = () => {
    navigate('/project/regist');
  };
  const showMore = () => {
    navigate('/project');
  };
  useEffect(() => {
    const getHomeData = async () => {
      try {
        const res = await getHomeRequests();
        setRequestData(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    getHomeData();
  }, []);
  return (
    <Container>
      <TopContainer
        isRequest={true}
        onClickHandler={registRequest}
        text={'Requests'}
        count={requestData.totalProjectCnt}
        showMore={showMore}
      />
      {requestData.data?.map((request, index) => (
        <RequestCard key={index} requestData={request} />
      ))}
    </Container>
  );
};

export default RequestMain;
