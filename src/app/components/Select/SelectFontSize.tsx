import React, { FC } from 'react';
import { FontSizes, ListItem } from '../../../shared';
import Select, { Props } from './Select';

const list: ListItem<FontSizes>[] = [
  {
    label: 'Heading 1',
    value: FontSizes.Heading1,
  },
  {
    label: 'Heading 2',
    value: FontSizes.Heading2,
  },
  {
    label: 'Heading 3',
    value: FontSizes.Heading3,
  },
  {
    label: 'Heading 4',
    value: FontSizes.Heading4,
  },
  {
    label: 'Heading 5',
    value: FontSizes.Heading5,
  },
  {
    label: 'Body',
    value: FontSizes.Body,
  },
];

const SelectFontSize: FC<Props> = (props) => {
  return <Select {...props} list={list} />;
};

export default SelectFontSize;
