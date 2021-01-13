export interface ExtensionValue {
  height: BreakPointValue<string>;
  width: BreakPointValue<string>;
  paddingVertical: BreakPointValue<string>;
  paddingHorizontal: BreakPointValue<string>;
  marginBottom: BreakPointValue<string>;
  innerContainerType: BreakPointValue<ContainerTypes>;
  align: BreakPointValue<AlignmentTypes>;
  verticalAlign: BreakPointValue<VerticalAlignmentTypes>;
  fontSize: BreakPointValue<FontSizes>;
  grow: BreakPointValue<boolean>;
}

export interface BreakPointValue<V> {
  [BreakPoints.Mobile]?: V;
  [BreakPoints.Tablet]?: V;
  [BreakPoints.Desktop]?: V;
  [BreakPoints.WideScreen]?: V;
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
  Heading6 = 'heading6',
  Body = 'body',
}

export enum VerticalAlignmentTypes {
  Top = 'top',
  Center = 'center',
  Bottom = 'bottom',
}

export interface ControlBase<V> {
  value: V;
  onChange: (val: V) => void;
}

export interface ListItem<V> {
  value: V;
  label: string;
}
