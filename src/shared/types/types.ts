export interface ExtensionValue {
  [ExtensionValueKeys.Height]?: BreakPointValue<string>;
  [ExtensionValueKeys.Width]?: BreakPointValue<string>;
  [ExtensionValueKeys.PaddingVertical]?: BreakPointValue<string>;
  [ExtensionValueKeys.PaddingHorizontal]?: BreakPointValue<string>;
  [ExtensionValueKeys.MarginBottom]?: BreakPointValue<string>;
  [ExtensionValueKeys.InnerContainerType]?: BreakPointValue<ContainerTypes>;
  [ExtensionValueKeys.Align]?: BreakPointValue<AlignmentTypes>;
  [ExtensionValueKeys.VerticalAlign]?: BreakPointValue<VerticalAlignmentTypes>;
  [ExtensionValueKeys.FontSize]?: BreakPointValue<FontSizes>;
  [ExtensionValueKeys.Grow]?: BreakPointValue<boolean>;
  [ExtensionValueKeys.BgPosition]?: BreakPointValue<BgPositions>;
  [ExtensionValueKeys.BgColor]?: BreakPointValue<string>;
  [ExtensionValueKeys.Color]?: BreakPointValue<string>;
}

export interface BreakPointValue<V> {
  [BreakPoints.Mobile]?: V;
  [BreakPoints.Tablet]?: V;
  [BreakPoints.Desktop]?: V;
  [BreakPoints.WideScreen]?: V;
}

export enum ExtensionValueKeys {
  Height = 'height',
  Width = 'width',
  PaddingVertical = 'paddingVertical',
  PaddingHorizontal = 'paddingHorizontal',
  MarginBottom = 'marginBottom',
  InnerContainerType = 'innerContainerType',
  Align = 'align',
  VerticalAlign = 'verticalAlign',
  FontSize = 'fontSize',
  Grow = 'grow',
  BgPosition = 'bgPosition',
  BgColor = 'bgColor',
  Color = 'color',
}

export enum BreakPoints {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop',
  WideScreen = 'wideScreen',
}

export enum ContainerTypes {
  FullWidth = 'fullWidth',
  Grid = 'grid',
}

export enum AlignmentTypes {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum FontSizes {
  Heading1 = 'heading1',
  Heading2 = 'heading2',
  Heading3 = 'heading3',
  Heading4 = 'heading4',
  Heading5 = 'heading5',
  Body = 'body',
}

export enum VerticalAlignmentTypes {
  Top = 'top',
  Center = 'center',
  Bottom = 'bottom',
}

export enum BgPositions {
  TopLeft = 'topLeft',
  TopCenter = 'topCenter',
  TopRight = 'topRight',
  RightCenter = 'rightCenter',
  BottomRight = 'bottomRight',
  BottomCenter = 'bottomCenter',
  BottomLeft = 'bottomLeft',
  LeftCenter = 'leftCenter',
  Center = 'Center',
}

export interface ControlBase<V> {
  value: V;
  onChange: (val: V) => void;
}

export interface ListItem<V> {
  value: V;
  label: string;
}
