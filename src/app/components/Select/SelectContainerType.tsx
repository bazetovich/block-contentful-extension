import React, { FC } from 'react';
import { ContainerTypes, ListItem } from '../../../shared';
import Select, { Props } from './Select';

const list: ListItem<ContainerTypes>[] = [
  {
    label: 'Full width',
    value: ContainerTypes.FullWidth,
  },
  {
    label: 'Grid',
    value: ContainerTypes.Grid,
  },
];

const SelectContainerType: FC<Props> = (props) => {
  return <Select {...props} list={list} />;
};

export default SelectContainerType;
