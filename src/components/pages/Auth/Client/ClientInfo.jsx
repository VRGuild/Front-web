import React, { useEffect, useState } from 'react';
import { useStore, usePersistentStore } from '../../../../zustand/Store';
import InputBox from '../Common/InputBox/InputBox';
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
import { registClient } from '../../../../api/oauth';
import { useNavigate } from 'react-router-dom';

const ClientInfo = () => {
  const { setRegistPage, setIsLogin } = usePersistentStore();
  const [nickName, setNickName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [managerName, setManagerName] = useState('');
  const [managerPhone, setManagerPhone] = useState('');
  const [businessLogo, setBusinessLogo] = useState(null);
  const [isChecked, setIschecked] = useState(false);
  const [isValidate, setIsValidate] = useState(false);

  const navigate = useNavigate();

  const handlePrevButtonClick = () => {
    setRegistPage(0);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBusinessLogo(file);
    }
  };

  const handleIsValidate = () => {
    if (isChecked) {
      setIsValidate(
        nickName !== '' &&
          businessName !== '' &&
          managerName !== '' &&
          managerPhone !== '' &&
          businessLogo !== null,
      );
    } else {
      setIsValidate(false);
    }
  };

  const handleFinishButtonClick = async () => {
    try {
      await registClient({
        nickname: nickName,
        businessName: businessName,
        businessLogo: businessLogo,
        managerName: managerName,
        managerPhone: managerPhone,
      });
      setIsLogin(true);
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
  }, [
    nickName,
    businessName,
    businessLogo,
    managerName,
    managerPhone,
    isChecked,
  ]);

  return (
    <Container>
      <Title>클라이언트 정보 입력</Title>
      <ContentContainer>
        <BoxContainer>
          <Box>
            <StarLabel text={'가입자 정보'} />
            <InputBox
              placeholder={'닉네임'}
              onChangeHandler={(e) => setNickName(e.target.value)}
            />
          </Box>
          <Box>
            <StarLabel text={'비즈니스 정보'} />
            <InputBox
              placeholder={'회사명/팀명'}
              onChangeHandler={(e) => setBusinessName(e.target.value)}
            />
            <InputBox
              placeholder={'담당자 이름'}
              onChangeHandler={(e) => setManagerName(e.target.value)}
            />
            <InputBox
              placeholder={'담당자 핸드폰 번호'}
              onChangeHandler={(e) => setManagerPhone(e.target.value)}
            />

            <Text>
              • 회사명, 이름, 연락처 등 개인 정보는 공개되지 않습니다.
            </Text>
          </Box>
          <Box>
            <StarLabel text={'회사 로고'} />
            <InputBox onChangeHandler={handleFileChange} type={'file'} />
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
              fontcolor={'#393939'}
              bordercolor={'#393939'}
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
