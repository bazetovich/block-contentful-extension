import React, { FC } from 'react';
import { ListItem, BgPositions } from '../../../shared';
import Select, { Props } from './Select';

const list: ListItem<BgPositions>[] = [
  {
    label: 'TopLeft',
    value: BgPositions.TopLeft,
  },
  {
    label: 'TopCenter',
    value: BgPositions.TopCenter,
  },
  {
    label: 'TopRight',
    value: BgPositions.TopRight,
  },
  {
    label: 'RightCenter',
    value: BgPositions.RightCenter,
  },
  {
    label: 'BottomCenter',
    value: BgPositions.BottomCenter,
  },
  {
    label: 'BottomRight',
    value: BgPositions.BottomRight,
  },
  {
    label: 'BottomLeft',
    value: BgPositions.BottomLeft,
  },
  {
    label: 'Center',
    value: BgPositions.Center,
  },
  {
    label: 'LeftCenter',
    value: BgPositions.LeftCenter,
  },
];

const SelectBgPosition: FC<Props> = (props) => {
  return <Select {...props} list={list} />;
};

export default SelectBgPosition;
