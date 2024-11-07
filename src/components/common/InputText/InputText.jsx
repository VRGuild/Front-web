import React from 'react';
import { InputContainer, TextArea } from './style';
import useStore from '../../../zustand/Store';

const InputText = (props) => {
  const { projectInfo, setProjectInfo } = useStore();

  const handleChange = (e) => {
    let value = e.target.value;

    if (props.type === 'number') {
      if (value === '') {
        setProjectInfo({ [props.keyName]: '' });
      } else if (/^\d*$/.test(value)) {
        setProjectInfo({ [props.keyName]: parseInt(value) });
      }
    } else if (props.type === 'date') {
      value = value.replace(/-/g, '');

      if (/^\d*$/.test(value)) {
        if (value.length <= 6) {
          let formattedValue = '';

          if (value.length > 4) {
            formattedValue = `${value.slice(0, 4)}-${value.slice(4)}`;
          } else {
            formattedValue = value;
          }

          if (value.length > 2) {
            formattedValue = `${formattedValue.slice(0, 2)}-${formattedValue.slice(2)}`;
          }

          setProjectInfo({ [props.keyName]: formattedValue });
        }
      }
    } else {
      setProjectInfo({ [props.keyName]: value });
    }
  };

  return (
    <>
      {props.area ? (
        <TextArea
          value={projectInfo[props.keyName]}
          onChange={handleChange}
          placeholder={props.placeHolder}
        />
      ) : (
        <InputContainer
          type="text"
          value={projectInfo[props.keyName]}
          onChange={handleChange}
          placeholder={props.placeHolder}
          height={props.height}
          width={props.width}
        />
      )}
    </>
  );
};

export default InputText;
