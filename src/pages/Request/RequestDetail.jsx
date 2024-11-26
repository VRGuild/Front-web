import React, { useState, useEffect } from 'react';
import MainComponent from '../../components/pages/Home/Main/MainComponent/MainComponent';
import RequestDetailComponent from '../../components/pages/Request/RequestDetailComponent/RequestDetailComponent';
import { getRequestDetail } from '../../api/request';
import { useParams } from 'react-router-dom';
import RequestTeamComponent from '../../components/pages/Request/RequestTeam/RequestTeamComponent/RequestTeamComponent';

const RequestDetail = () => {
  const [isRequest, setIsRequest] = useState(false);
  const [detailData, setDetailData] = useState();
  const { requestId } = useParams();
  useEffect(() => {
    const getDetail = async () => {
      const res = await getRequestDetail(requestId);
      setDetailData(res.data.data);
    };
    getDetail();
  }, []);
  return (
    <>
      {isRequest === true ? (
        <MainComponent
          contents={
            <RequestTeamComponent
              detailData={detailData}
              setIsRequest={setIsRequest}
            />
          }
        />
      ) : (
        <MainComponent
          contents={
            <RequestDetailComponent
              setIsRequest={setIsRequest}
              detailData={detailData}
            />
          }
        />
      )}
    </>
  );
};

export default RequestDetail;
