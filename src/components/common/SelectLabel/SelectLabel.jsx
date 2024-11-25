import React from 'react';
import { Input, Label, LabelContainer } from './style';
import { useStore } from '../../../zustand/Store';

const SelectLabel = ({ selectedOption }) => {
  const { updateOccupation } = useStore();

  const handleInput = (e) => {
    const occupationCount = parseInt(e.target.value, 10); // 입력값을 정수로 변환

    switch (selectedOption) {
      case '클라이언트':
        updateOccupation('Client', { occupationCount });
        break;
      case '백엔드':
        updateOccupation('Server', { occupationCount });
        break;
      case '디자인':
        updateOccupation('Design', { occupationCount });
        break;
      case '기획':
        updateOccupation('Planner', { occupationCount });
        break;
      case 'AI':
        updateOccupation('AI', { occupationCount });
        break;
      default:
        break;
    }
  };

  return (
    <LabelContainer>
      <Label>{selectedOption}</Label>
      <Input type="text" onChange={handleInput} />{' '}
      {/* Input의 onChange 이벤트 추가 */}
    </LabelContainer>
  );
};

export default SelectLabel;
