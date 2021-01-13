import React, { FC } from 'react';
import { AlignmentTypes, ListItem } from '../../../shared';
import Select, { Props } from './Select';

const list: ListItem<AlignmentTypes>[] = [
  {
    label: 'Left',
    value: AlignmentTypes.Left,
  },
  {
    label: 'Center',
    value: AlignmentTypes.Center,
  },
  {
    label: 'Right',
    value: AlignmentTypes.Right,
  },
];

const SelectAlignmentType: FC<Props> = (props) => {
  return <Select {...props} list={list} />;
};

export default SelectAlignmentType;
