import React from 'react';
import MainComponent from '../../components/pages/Home/Main/MainComponent/MainComponent';
import RequestDetailComponent from '../../components/pages/Request/RequestDetailComponent/RequestDetailComponent';

const RequestDetail = () => {
  return <MainComponent contents={<RequestDetailComponent />} />;
};

export default RequestDetail;
