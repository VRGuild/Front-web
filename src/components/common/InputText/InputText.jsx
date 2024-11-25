import React from 'react';
import { InputContainer, TextArea } from './style';
import { useStore } from '../../../zustand/Store';

const InputText = (props) => {
  const { projectInfo, setProjectInfo } = useStore();

  const handleChange = (e) => {
    let value = e.target.value;

    if (props.type === 'number') {
      const unformattedValue = value.replace(/,/g, '');
      if (/^\d*$/.test(unformattedValue)) {
        setProjectInfo({
          [props.keyName]: unformattedValue ? parseInt(unformattedValue) : '',
        });

        const formattedValue = unformattedValue.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ',',
        );
        e.target.value = formattedValue;
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
          value={
            props.type === 'number'
              ? projectInfo[props.keyName]
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',') || ''
              : projectInfo[props.keyName]
          }
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
