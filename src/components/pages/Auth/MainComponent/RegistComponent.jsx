import React from 'react';
import { Container } from './style';
import RegistStart from '../RegistStart/RegistStart';
import ClientInfo from '../Client/ClientInfo';
import PartnersInfo from '../Partners/PartnersInfo/PartnersInfo';
import PartnersSkill from '../Partners/PartnersSkill/PartnersSkill';
import useStore from '../../../../zustand/Store';
const RegistComponent = () => {
  const { registPage } = useStore();
  const renderPage = (page) => {
    switch (page) {
      case 0:
        return <RegistStart />;
      case 1:
        return <ClientInfo />;
      case 2:
        return <PartnersInfo />;
      case 3:
        return <PartnersSkill />;
      default:
        return <RegistStart />;
    }
  };
  return <Container>{renderPage(registPage)}</Container>;
};

export default RegistComponent;
