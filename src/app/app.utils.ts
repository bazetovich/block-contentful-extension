import {
  ContainerTypes,
  ExtensionValue,
  BreakPoints,
  AlignmentTypes,
  VerticalAlignmentTypes,
  FontSizes,
  BgPositions,
  ExtensionValueKeys,
  BgSizes,
} from '../shared';

export const DEFAULT_VALUE: ExtensionValue = {
  [ExtensionValueKeys.Height]: {},
  [ExtensionValueKeys.Width]: {},
  [ExtensionValueKeys.PaddingHorizontal]: {},
  [ExtensionValueKeys.PaddingVertical]: {},
  [ExtensionValueKeys.MarginBottom]: {},
  [ExtensionValueKeys.InnerContainerType]: {
    [BreakPoints.Mobile]: ContainerTypes.FullWidth,
    [BreakPoints.Tablet]: ContainerTypes.FullWidth,
    [BreakPoints.Desktop]: ContainerTypes.FullWidth,
    [BreakPoints.WideScreen]: ContainerTypes.FullWidth,
  },
  [ExtensionValueKeys.Align]: {
    [BreakPoints.Mobile]: AlignmentTypes.Center,
    [BreakPoints.Tablet]: AlignmentTypes.Center,
    [BreakPoints.Desktop]: AlignmentTypes.Center,
    [BreakPoints.WideScreen]: AlignmentTypes.Center,
  },
  [ExtensionValueKeys.VerticalAlign]: {
    [BreakPoints.Mobile]: VerticalAlignmentTypes.Top,
    [BreakPoints.Tablet]: VerticalAlignmentTypes.Top,
    [BreakPoints.Desktop]: VerticalAlignmentTypes.Top,
    [BreakPoints.WideScreen]: VerticalAlignmentTypes.Top,
  },
  [ExtensionValueKeys.FontSize]: {
    [BreakPoints.Mobile]: FontSizes.Body,
    [BreakPoints.Tablet]: FontSizes.Body,
    [BreakPoints.Desktop]: FontSizes.Body,
    [BreakPoints.WideScreen]: FontSizes.Body,
  },
  [ExtensionValueKeys.Grow]: {
    [BreakPoints.Mobile]: false,
    [BreakPoints.Tablet]: false,
    [BreakPoints.Desktop]: false,
    [BreakPoints.WideScreen]: false,
  },
  [ExtensionValueKeys.BgPosition]: {
    [BreakPoints.Mobile]: BgPositions.Center,
    [BreakPoints.Tablet]: BgPositions.Center,
    [BreakPoints.Desktop]: BgPositions.Center,
    [BreakPoints.WideScreen]: BgPositions.Center,
  },
  [ExtensionValueKeys.BgSize]: {
    [BreakPoints.Mobile]: BgSizes.Cover,
    [BreakPoints.Tablet]: BgSizes.Cover,
    [BreakPoints.Desktop]: BgSizes.Cover,
    [BreakPoints.WideScreen]: BgSizes.Cover,
  },
  [ExtensionValueKeys.BgColor]: {},
  [ExtensionValueKeys.Color]: {},
};

export const formDefaultValue = (val?: ExtensionValue) => {
  if (!val) {
    return {};
  }

  return val;
};

const HEIGHT_RATIO = 54;
const DEFAULT_HEIGHT = 184;

export const getPanelHeight = (rowNumber: number) => {
  const res = rowNumber * 63 + HEIGHT_RATIO;

  if (rowNumber === 0 || res < DEFAULT_HEIGHT) {
    return DEFAULT_HEIGHT;
  }

  return res;
};
