import React, { FC } from 'react';
import { BgSizes, ListItem } from '../../../shared';
import Select, { Props } from './Select';

const list: ListItem<BgSizes>[] = [
  {
    label: 'Auto',
    value: BgSizes.Auto,
  },
  {
    label: 'Center',
    value: BgSizes.Initial,
  },
  {
    label: 'Contain',
    value: BgSizes.Contain,
  },
  {
    label: 'Cover',
    value: BgSizes.Cover,
  },
];

const SelectBgSize: FC<Props> = (props) => {
  return <Select {...props} list={list} />;
};

export default SelectBgSize;
