import {
  ContainerTypes,
  ExtensionValue,
  BreakPoints,
  AlignmentTypes,
  VerticalAlignmentTypes,
  FontSizes,
} from '../shared';

const DEFAULT_VALUE: ExtensionValue = {
  height: {},
  width: {},
  paddingHorizontal: {},
  paddingVertical: {},
  marginBottom: {},
  innerContainerType: {
    [BreakPoints.Mobile]: ContainerTypes.FullWidth,
    [BreakPoints.Tablet]: ContainerTypes.FullWidth,
    [BreakPoints.Desktop]: ContainerTypes.FullWidth,
    [BreakPoints.WideScreen]: ContainerTypes.FullWidth,
  },
  align: {
    [BreakPoints.Mobile]: AlignmentTypes.Center,
    [BreakPoints.Tablet]: AlignmentTypes.Center,
    [BreakPoints.Desktop]: AlignmentTypes.Center,
    [BreakPoints.WideScreen]: AlignmentTypes.Center,
  },
  verticalAlign: {
    [BreakPoints.Mobile]: VerticalAlignmentTypes.Top,
    [BreakPoints.Tablet]: VerticalAlignmentTypes.Top,
    [BreakPoints.Desktop]: VerticalAlignmentTypes.Top,
    [BreakPoints.WideScreen]: VerticalAlignmentTypes.Top,
  },
  fontSize: {
    [BreakPoints.Mobile]: FontSizes.Body,
    [BreakPoints.Tablet]: FontSizes.Body,
    [BreakPoints.Desktop]: FontSizes.Body,
    [BreakPoints.WideScreen]: FontSizes.Body,
  },
  grow: {
    [BreakPoints.Mobile]: false,
    [BreakPoints.Tablet]: false,
    [BreakPoints.Desktop]: false,
    [BreakPoints.WideScreen]: false,
  },
};

export const formDefaultValue = (val?: ExtensionValue) => {
  if (!val) {
    return DEFAULT_VALUE;
  }

  if (!val.innerContainerType) {
    val.innerContainerType = DEFAULT_VALUE.innerContainerType;
  }

  if (!val.align) {
    val.align = DEFAULT_VALUE.align;
  }

  if (!val.verticalAlign) {
    val.verticalAlign = DEFAULT_VALUE.verticalAlign;
  }

  if (!val.fontSize) {
    val.fontSize = DEFAULT_VALUE.fontSize;
  }

  if (!val.paddingHorizontal) {
    val.paddingHorizontal = {};
  }

  if (!val.paddingVertical) {
    val.paddingVertical = {};
  }

  if (!val.marginBottom) {
    val.marginBottom = {};
  }

  if (!val.grow) {
    val.grow = DEFAULT_VALUE.grow;
  }

  return val;
};
