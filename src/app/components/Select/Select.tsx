import React, { FC, SyntheticEvent } from 'react';
import Select from '@contentful/forma-36-react-components/dist/components/Select';
import Option from '@contentful/forma-36-react-components/dist/components/Select/Option';

import { ControlBase, ListItem } from '../../../shared';

export interface Props extends ControlBase<string> {
  list: ListItem<any>[];
  id?: string;
}

const SelectWrap: FC<Props> = ({ id, list, value, onChange }) => {
  const handleChanhe = (e: SyntheticEvent<HTMLSelectElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <Select id={id} value={value} onChange={handleChanhe} width="small">
      {list.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectWrap;
