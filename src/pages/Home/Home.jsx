import React from 'react';
import MainComponent from '../../components/pages/Home/Main/MainComponent/MainComponent';
import RequestMain from '../../components/pages/Main/RequestMain';
const Home = () => {
  return (
    <MainComponent
      contents={
        <>
          <RequestMain />
        </>
      }
    />
  );
};

export default Home;
