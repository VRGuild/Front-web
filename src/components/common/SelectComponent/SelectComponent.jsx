import React, { useState, useRef, useEffect } from 'react';
import {
  SelectBox,
  Dropdown,
  Button,
  Option,
  StyledSpan,
  Container,
  AddButton,
} from './style';

const SelectComponent = ({ onAddSelectLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  const options = ['클라이언트', '백엔드', '디자인', '기획', 'AI'];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleAddClick = () => {
    onAddSelectLabel(selectedOption);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <SelectBox ref={dropdownRef}>
        <StyledSpan onClick={toggleDropdown}>
          {selectedOption || '직군 선택'}
        </StyledSpan>
        <Button onClick={toggleDropdown}>{isOpen ? '▲' : '▼'}</Button>
        <Dropdown className={isOpen ? 'show' : ''}>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </Dropdown>
      </SelectBox>
      <AddButton onClick={handleAddClick}>추가</AddButton>
    </Container>
  );
};

export default SelectComponent;
