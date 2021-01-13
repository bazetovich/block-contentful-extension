import React, { FC, SyntheticEvent } from 'react';
import TextInput from '@contentful/forma-36-react-components/dist/components/TextInput';

import { ControlBase } from '../../../shared';

interface Props extends ControlBase<string> {
  className?: string;
  id?: string;
}

const Input: FC<Props> = ({ id, value, className, onChange }) => {
  const handleChanhe = (e: SyntheticEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <TextInput
      id={id}
      width="small"
      type="text"
      value={value}
      onChange={handleChanhe}
      className={className}
    />
  );
};

export default Input;
