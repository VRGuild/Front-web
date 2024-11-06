import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, PageContainer } from './style';
import TopContainer from '../../Home/Main/ContainerComponent/TopContainer/TopContainer';
import RequestCard from '../Card/RequestCard';
import PageNationComponent from '../../../common/PageNation/PageNationContainer/PageNationComponent';
import { getAllRequests } from '../../../../api/request';
import useStore from '../../../../zustand/Store';
const RequestHomeComponent = () => {
  const { detailPage, setTotalPage } = useStore();
  const [requestInfo, setRequestInfo] = useState();
  const navigate = useNavigate();
  const registRequest = () => {
    navigate('/project/regist');
  };
  useEffect(() => {
    const getAllList = async () => {
      try {
        const res = await getAllRequests(detailPage);
        setRequestInfo(res.data);
        setTotalPage(res.data.totalPages);
      } catch (e) {
        console.error(e);
      }
    };
    getAllList();
  }, [detailPage]);
  return (
    <>
      {requestInfo && (
        <Container>
          <TopContainer
            isRequest={true}
            onClickHandler={registRequest}
            text={'All Requests'}
            count={requestInfo.totalProjectCnt}
            isNotHome={true}
          />
          {requestInfo.data?.map((request, index) => (
            <RequestCard key={index} requestData={request} />
          ))}
          <PageContainer>
            <PageNationComponent />
          </PageContainer>
        </Container>
      )}
    </>
  );
};

export default RequestHomeComponent;
