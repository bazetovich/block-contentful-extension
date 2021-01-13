import React, { FC, SyntheticEvent } from 'react';
import Checkbox from '@contentful/forma-36-react-components/dist/components/Checkbox';
import { ControlBase } from '../../../shared';

interface Props extends ControlBase<boolean> {
  id?: string;
}

const CheckboxWrap: FC<Props> = ({ id, value = false, onChange }) => {
  const handleChanhe = (e: SyntheticEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.checked);
  };

  return <Checkbox id={id} labelText="" checked={value} onChange={handleChanhe} />;
};

export default CheckboxWrap;
