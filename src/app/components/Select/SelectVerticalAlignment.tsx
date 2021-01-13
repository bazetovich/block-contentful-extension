import React, { FC } from 'react';
import { VerticalAlignmentTypes, ListItem } from '../../../shared';
import Select, { Props } from './Select';

const list: ListItem<VerticalAlignmentTypes>[] = [
  {
    label: 'Top',
    value: VerticalAlignmentTypes.Top,
  },
  {
    label: 'Center',
    value: VerticalAlignmentTypes.Center,
  },
  {
    label: 'Bottom',
    value: VerticalAlignmentTypes.Bottom,
  },
];

const SelectVerticalAlignmentType: FC<Props> = (props) => {
  return <Select {...props} list={list} />;
};

export default SelectVerticalAlignmentType;
