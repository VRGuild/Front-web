import React, { useEffect } from 'react';
import {
  Container,
  Title,
  Text,
  TinyText,
  ContentsContainer,
  HorizontalContainer,
  RoleContainer,
  ButtonContainer,
} from './style';
import StarLabel from '../../../../common/StarLabel/StarLabel';
import SelectBox from '../../../../common/SelectBox/SelectBox';
import InputText from '../../../../common/InputText/InputText';
import Button from '../../../../common/Button/Button';
import useStore from '../../../../../zustand/Store';
import { registRequestInfo } from '../../../../../api/request';
import { useNavigate } from 'react-router-dom';

const RequestRegistComponent = () => {
  const { projectInfo, setProjectInfo } = useStore();
  const navigate = useNavigate();

  const handleWorkType = (type) => {
    if (projectInfo['workType'] === type) setProjectInfo({ workType: '' });
    else if (projectInfo['workType'] === 'both') {
      if (type === 'local') setProjectInfo({ workType: 'remote' });
      else setProjectInfo({ workType: 'local' });
    } else if (projectInfo['workType'] && projectInfo['workType'] !== type)
      setProjectInfo({ workType: 'both' });
    else if (type === 'local') setProjectInfo({ workType: 'local' });
    else setProjectInfo({ workType: 'remote' });
  };

  const handleprogressClassification = (scope) => {
    if (projectInfo['progressClassification'] === scope)
      setProjectInfo({ progressClassification: '' });
    else setProjectInfo({ progressClassification: scope });
  };

  const transformDate = () => {
    console.log('실행됨');
    const newProjectInfo = {
      ...projectInfo,
      startDateTime: '20' + projectInfo['startDateTime'],
      endDateTime: '20' + projectInfo['endDateTime'],
    };
    return newProjectInfo;
  };

  const handleRegistButton = async () => {
    await registRequestInfo(transformDate());

    alert('프로젝트 의뢰가 등록되었습니다.');
    navigate('/home');
  };
  return (
    <Container>
      <Title>프로젝트 정보 입력</Title>
      <ContentsContainer>
        <HorizontalContainer>
          <StarLabel text={'근무 형태'} />
          <TinyText>중복 선택 가능</TinyText>
        </HorizontalContainer>
        <HorizontalContainer>
          <SelectBox
            text={'상주'}
            handler={() => handleWorkType('local')}
            info={
              projectInfo['workType'] === 'local' ||
              projectInfo['workType'] === 'both'
            }
          />
          <SelectBox
            text={'원격'}
            handler={() => handleWorkType('remote')}
            info={
              projectInfo['workType'] === 'remote' ||
              projectInfo['workType'] === 'both'
            }
          />
        </HorizontalContainer>
        <StarLabel text={'프로젝트 진행 분류'} />
        <HorizontalContainer>
          <SelectBox
            text={'신규'}
            handler={() => handleprogressClassification('new')}
            info={projectInfo['progressClassification'] === 'new'}
          />
          <SelectBox
            text={'리뉴얼'}
            handler={() => handleprogressClassification('renewal')}
            info={projectInfo['progressClassification'] === 'renewal'}
          />
        </HorizontalContainer>
      </ContentsContainer>
      <ContentsContainer>
        <StarLabel text={'회사 이름'} />
        <InputText
          placeHolder={'회사 이름 또는 프로젝트를 대표하는 이름을 적어주세요.'}
          type={'text'}
          width={'100'}
          keyName={'companyName'}
        />
        <StarLabel text={'회사 로고'} />
        <InputText type={'text'} />
      </ContentsContainer>
      <ContentsContainer>
        <StarLabel text={'프로젝트 주제'} />
        <InputText
          placeHolder={'프로젝트의 주요 내용을 간략히 적어주세요'}
          type={'text'}
          keyName={'title'}
        />
        <StarLabel text={'상세 업무 내용'} />
        <InputText
          placeHolder={
            '현재 진행 상항 / 업무 범위 / 전달 사항 / 우대 사항 등을 적어주세요.'
          }
          type={'text'}
          area={true}
          keyName={'content'}
        />
      </ContentsContainer>
      <ContentsContainer>
        <StarLabel text={'필요 직군'} />
        <RoleContainer>
          <HorizontalContainer>
            <Text>클라이언트</Text>
            <InputText
              type={'number'}
              width={'23'}
              keyName={'requiredClient'}
            />
            <Text>명</Text>
          </HorizontalContainer>
          <HorizontalContainer>
            <Text>서버</Text>
            <InputText
              type={'number'}
              width={'23'}
              keyName={'requiredServer'}
            />
            <Text>명</Text>
          </HorizontalContainer>
          <HorizontalContainer>
            <Text>디자인</Text>
            <InputText
              type={'number'}
              width={'23'}
              keyName={'requiredDesign'}
            />
            <Text>명</Text>
          </HorizontalContainer>
          <HorizontalContainer>
            <Text>기획</Text>
            <InputText
              type={'number'}
              width={'23'}
              keyName={'requiredPlanner'}
            />
            <Text>명</Text>
          </HorizontalContainer>
          <HorizontalContainer>
            <Text>AI</Text>
            <InputText
              type={'number'}
              width={'23'}
              keyName={'requiredAIEngineer'}
            />
            <Text>명</Text>
          </HorizontalContainer>
        </RoleContainer>
      </ContentsContainer>
      <ContentsContainer>
        <StarLabel text={'예상 기간'} />
        <HorizontalContainer>
          <InputText
            placeHolder={'YY/MM/DD'}
            type={'date'}
            keyName={'startDateTime'}
          />
          <Text>~</Text>
          <InputText
            placeHolder={'YY/MM/DD'}
            type={'date'}
            keyName={'endDateTime'}
          />
        </HorizontalContainer>
      </ContentsContainer>
      <ContentsContainer>
        <StarLabel text={'예상 금액'} />
        <HorizontalContainer>
          <InputText type={'number'} keyName={'estimatedCost'} />
          <Text>원</Text>
        </HorizontalContainer>
      </ContentsContainer>
      <ButtonContainer>
        <Button text={'완료'} onClickHandler={handleRegistButton} />
      </ButtonContainer>
    </Container>
  );
};

export default RequestRegistComponent;
