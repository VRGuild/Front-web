import React, { useEffect, useState } from 'react';
import useStore from '../../../../zustand/Store';
import InputBox from '../Common/InputBox/InputBox';
import SelectBox from '../../../common/SelectBox/SelectBox';
import {
  Container,
  Title,
  ContentContainer,
  BoxContainer,
  Box,
  CheckBox,
  CheckBoxContainer,
  BottomContainer,
  StyledLink,
  Text,
  ButtonContainer,
} from './style';
import Button from '../../../common/Button/Button';
import StarLabel from '../../../common/StarLabel/StarLabel';
import {
  registClientGroup,
  registClientIndividual,
} from '../../../../api/oauth';
import { useNavigate } from 'react-router-dom';

const ClientInfo = () => {
  const { clientInfo, setClientInfo, setRegistPage } = useStore();
  const [groupName, setGroupName] = useState('');
  const [managerName, setManagerName] = useState('');
  const [managerPhone, setManagerPhone] = useState('');
  const [isChecked, setIschecked] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const navigate = useNavigate();
  const handlePrevButtonClick = () => {
    setRegistPage(0);
  };
  const selectCorporateBusiness = () => {
    setClientInfo('corporate business');
  };
  const selectIndividualBusiness = () => {
    setClientInfo('individual business');
  };
  const selectTeam = () => {
    setClientInfo('team');
  };
  const selectIndividual = () => {
    setClientInfo('individual');
  };
  const handleIsValidate = () => {
    if (isChecked) {
      if (clientInfo === 'individual') {
        setIsValidate(managerName !== '' && managerPhone !== '');
      } else {
        if (clientInfo !== '') {
          setIsValidate(
            groupName !== '' && managerName !== '' && managerPhone !== '',
          );
        }
      }
    } else {
      setIsValidate(false);
    }
  };
  const handleFinishButtonClick = async () => {
    try {
      if (clientInfo === 'individual') {
        await registClientIndividual({
          name: managerName,
          phone: managerPhone,
        });
      } else {
        await registClientGroup({
          clientType: clientInfo,
          groupName: groupName,
          managerName: managerName,
          managerPhone: managerPhone,
        });
      }
      navigate('/home');
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    try {
      handleIsValidate();
    } catch (e) {
      console.error(e);
    }
  }, [clientInfo, groupName, managerName, managerPhone, isChecked]);
  return (
    <Container>
      <Title>클라이언트 정보 입력</Title>
      <ContentContainer>
        <BoxContainer>
          <Box>
            <StarLabel text={'클라이언트 형태'} />
            <SelectBox
              info={clientInfo === 'corporate business'}
              handler={selectCorporateBusiness}
              text={'법인 사업자'}
            />
            <SelectBox
              info={clientInfo === 'individual business'}
              handler={selectIndividualBusiness}
              text={'개인 사업자'}
            />
            <SelectBox
              info={clientInfo === 'team'}
              handler={selectTeam}
              text={'팀'}
            />
            <SelectBox
              info={clientInfo === 'individual'}
              handler={selectIndividual}
              text={'개인'}
            />
          </Box>
          <Box>
            <StarLabel text={'클라이언트 정보'} />
            {clientInfo === 'individual' ? (
              <>
                <InputBox
                  placeholder={'이름'}
                  onChangeHandler={(e) => setManagerName(e.target.value)}
                />
                <InputBox
                  placeholder={'핸드폰 번호'}
                  onChangeHandler={(e) => setManagerPhone(e.target.value)}
                />
              </>
            ) : (
              <>
                <InputBox
                  placeholder={'회사명/팀명'}
                  onChangeHandler={(e) => setGroupName(e.target.value)}
                />
                <InputBox
                  placeholder={'담당자 이름'}
                  onChangeHandler={(e) => setManagerName(e.target.value)}
                />
                <InputBox
                  placeholder={'담당자 핸드폰 번호'}
                  onChangeHandler={(e) => setManagerPhone(e.target.value)}
                />
              </>
            )}

            <Text>
              • 회사명, 이름, 연락처 등 개인 정보는 공개되지 않습니다.
            </Text>
          </Box>
        </BoxContainer>
        <BottomContainer>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIschecked(e.target.checked)}
            />
            <StyledLink>이용약관</StyledLink>
            <Text> 및 </Text>
            <StyledLink>개인정보 처리방침</StyledLink>
            <Text>에 동의합니다.</Text>
          </CheckBoxContainer>
          <ButtonContainer>
            <Button
              bgcolor={'#fff'}
              fontcolor={'#1B75D0'}
              bordercolor={'#1b75d0'}
              onClickHandler={handlePrevButtonClick}
              text={'이전'}
            />
            <Button
              bgcolor={!isValidate && '#CECECE'}
              bordercolor={!isValidate && 'transparent'}
              text={'완료'}
              onClickHandler={isValidate ? handleFinishButtonClick : undefined}
            />
          </ButtonContainer>
        </BottomContainer>
      </ContentContainer>
    </Container>
  );
};
// bgcolor={registInfo === '' && '#CECECE'}
// bordercolor={registInfo === '' && 'transparent'}
// text={'다음'}
// onClickHandler={registInfo !== '' ? handleNextPage : undefined}

export default ClientInfo;
