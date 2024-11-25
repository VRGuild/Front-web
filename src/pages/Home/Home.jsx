import React from 'react';
import MainComponent from '../../components/pages/Home/Main/MainComponent/MainComponent';
import RequestMain from '../../components/pages/Main/RequestMain';
import StRadar from '../../components/common/Radar/STRadar';
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
