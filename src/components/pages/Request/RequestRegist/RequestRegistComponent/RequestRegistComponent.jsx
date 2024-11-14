import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  Text,
  TinyText,
  ContentsContainer,
  HorizontalContainer,
  RoleContainer,
  ButtonContainer,
  BlackLabel,
} from './style';
import StarLabel from '../../../../common/StarLabel/StarLabel';
import SelectBox from '../../../../common/SelectBox/SelectBox';
import InputText from '../../../../common/InputText/InputText';
import Button from '../../../../common/Button/Button';
import useStore from '../../../../../zustand/Store';
import { registRequestInfo } from '../../../../../api/request';
import { useNavigate } from 'react-router-dom';
import SelectComponent from '../../../../common/SelectComponent/SelectComponent';
import SelectLabel from '../../../../common/SelectLabel/SelectLabel';
import { uploadFiles } from '../../../../../api/file';

const RequestRegistComponent = () => {
  const { projectInfo, setProjectInfo, updateOccupation } = useStore();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [file, setFile] = useState(null);

  const addSelectLabel = (selectedOption) => {
    setSelectedOptions((prev) => [...prev, selectedOption]);
  };
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
      startDate: '20' + projectInfo['startDate'],
      endDate: '20' + projectInfo['endDate'],
    };
    return newProjectInfo;
  };

  const handleRegistButton = async () => {
    try {
      await registRequestInfo(transformDate());
      alert('프로젝트 의뢰가 등록되었습니다.');
      navigate('/home');
    } catch (error) {
      console.error(error);
      alert('프로젝트 의뢰 등록에 실패했습니다.');
    }
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  useEffect(() => {
    console.log(projectInfo);
  }, [projectInfo]);

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
            width={'9.4375rem'}
          />
          <SelectBox
            text={'원격'}
            handler={() => handleWorkType('remote')}
            info={
              projectInfo['workType'] === 'remote' ||
              projectInfo['workType'] === 'both'
            }
            width={'9.4375rem'}
          />
        </HorizontalContainer>
        <StarLabel text={'프로젝트 진행 분류'} />
        <HorizontalContainer>
          <SelectBox
            text={'신규'}
            handler={() => handleprogressClassification('new')}
            info={projectInfo['progressClassification'] === 'new'}
            width={'9.4375rem'}
          />
          <SelectBox
            text={'리뉴얼'}
            handler={() => handleprogressClassification('renewal')}
            info={projectInfo['progressClassification'] === 'renewal'}
            width={'9.4375rem'}
          />
        </HorizontalContainer>
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
        <SelectComponent onAddSelectLabel={addSelectLabel} />
        <HorizontalContainer>
          {selectedOptions.map((option, index) => (
            <SelectLabel key={index} selectedOption={option} />
          ))}
        </HorizontalContainer>
      </ContentsContainer>
      <ContentsContainer>
        <StarLabel text={'예상 기간'} />
        <HorizontalContainer>
          <BlackLabel>예상 시작 날짜</BlackLabel>
          <InputText
            placeHolder={'YY-MM-DD'}
            type={'date'}
            keyName={'startDate'}
            width={'6rem'}
          />
          <BlackLabel>예상 종료 날짜</BlackLabel>
          <InputText
            placeHolder={'YY-MM-DD'}
            type={'date'}
            keyName={'endDate'}
            width={'6rem'}
          />
        </HorizontalContainer>
      </ContentsContainer>
      <ContentsContainer>
        <StarLabel text={'예상 금액'} />
        <HorizontalContainer>
          <InputText
            type={'number'}
            keyName={'estimatedCost'}
            width={'6.75rem'}
          />
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
