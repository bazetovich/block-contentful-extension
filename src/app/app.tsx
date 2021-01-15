import React, { FC, useEffect, useRef, useState } from 'react';
import { FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import Accordion from '@contentful/forma-36-react-components/dist/components/Accordion';
import AccordionItem from '@contentful/forma-36-react-components/dist/components/Accordion/AccordionItem';
import '@contentful/forma-36-react-components/dist/styles.css';
import '../index.css';
import { DEFAULT_VALUE, formDefaultValue, getPanelHeight } from './app.utils';
import {
  BreakpointInput,
  Input,
  SelectContainerType,
  SelectAlignmentType,
  SelectVerticalAlignmentType,
  SelectFontSize,
  SelectBgPosition,
  Checkbox,
  EmptyField,
  PropertyPicker,
  SelectBgSize,
} from './components';
import {
  AlignmentTypes,
  BgPositions,
  BgSizes,
  BreakPointValue,
  ContainerTypes,
  ExtensionValue,
  ExtensionValueKeys,
  FontSizes,
  VerticalAlignmentTypes,
} from '../shared';

interface Props {
  sdk: FieldExtensionSDK;
}

const App: FC<Props> = ({ sdk }) => {
  const [value, setValue] = useState<ExtensionValue>(formDefaultValue(sdk.field.getValue()));
  const [expanded, toggleExpanded] = useState(false);
  const [domChange, triggerDomChange] = useState(0);
  const fields = Object.keys(value);
  const rootRef = useRef<HTMLDivElement>(null);

  const updatePanelHeight = () => {
    const height = getPanelHeight(fields.length);
    // @ts-ignore
    rootRef.current?.querySelector('ul > li > div')?.style?.height = height + 'px';
  };

  // effects

  useEffect(() => {
    sdk.window.startAutoResizer();
  }, []);

  useEffect(() => {
    // log value
    console.log(value);
    sdk.field.setValue(value);
  }, [value]);

  useEffect(() => {
    updatePanelHeight();
  }, [fields.length]);

  // handlers

  const handleHeightChange = (val: BreakPointValue<string>) => {
    setValue({
      ...value,
      height: val,
    });
  };

  const handleWidthChange = (val: BreakPointValue<string>) => {
    setValue({
      ...value,
      width: val,
    });
  };

  const handleAlignChange = (val: BreakPointValue<AlignmentTypes>) => {
    setValue({
      ...value,
      align: val,
    });
  };

  const handlePaddingVChange = (val: BreakPointValue<string>) => {
    setValue({
      ...value,
      paddingVertical: val,
    });
  };

  const handlePaddingHChange = (val: BreakPointValue<string>) => {
    setValue({
      ...value,
      paddingHorizontal: val,
    });
  };

  const handleContainerTypeChange = (val: BreakPointValue<ContainerTypes>) => {
    setValue({
      ...value,
      innerContainerType: val,
    });
  };

  const handleMarginBChange = (val: BreakPointValue<string>) => {
    setValue({
      ...value,
      marginBottom: val,
    });
  };

  const handleVAlignChange = (val: BreakPointValue<VerticalAlignmentTypes>) => {
    setValue({
      ...value,
      verticalAlign: val,
    });
  };

  const handleFontSizeChange = (val: BreakPointValue<FontSizes>) => {
    setValue({
      ...value,
      fontSize: val,
    });
  };

  const handleBgPositionChange = (val: BreakPointValue<BgPositions>) => {
    setValue({
      ...value,
      bgPosition: val,
    });
  };

  const handleBgColorChange = (val: BreakPointValue<string>) => {
    setValue({
      ...value,
      bgColor: val,
    });
  };

  const handleColorChange = (val: BreakPointValue<string>) => {
    setValue({
      ...value,
      color: val,
    });
  };

  const handleBgSizeChange = (val: BreakPointValue<BgSizes>) => {
    setValue({
      ...value,
      bgSize: val,
    });
  };

  const handleGrowChange = (val: BreakPointValue<boolean>) => {
    setValue({
      ...value,
      grow: val,
    });
  };

  const handlePropertyPick = (k: ExtensionValueKeys) => {
    const newVal: ExtensionValue = { ...value };

    if (value[k]) {
      delete newVal[k];
    } else {
      newVal[k] = DEFAULT_VALUE[k] as BreakPointValue<any>;
    }

    setValue(newVal);
  };

  const handleExpand = () => {
    toggleExpanded(true);
    triggerDomChange(domChange + 1);
    setTimeout(() => {
      triggerDomChange(domChange + 2);
      updatePanelHeight();
    }, 100);
    setTimeout(() => {
      updatePanelHeight();
    }, 200);
  };

  const handleCollapse = () => {
    toggleExpanded(false);
    triggerDomChange(domChange + 1);
    setTimeout(() => {
      triggerDomChange(domChange + 2);
    }, 100);
  };

  return (
    <div ref={rootRef}>
      <Accordion className="root-accordion">
        <AccordionItem onExpand={handleExpand} onCollapse={handleCollapse} title="Settings">
          <PropertyPicker value={value} onPropertyPick={handlePropertyPick} />
          {expanded && (
            <>
              {fields.map((key) => {
                switch (key) {
                  case ExtensionValueKeys.Height:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Height"
                        value={value.height}
                        onChange={handleHeightChange}
                        Control={Input}
                      />
                    );
                  case ExtensionValueKeys.Width:
                    return (
                      <BreakpointInput
                        label="Width"
                        key={key}
                        value={value.width}
                        onChange={handleWidthChange}
                        Control={Input}
                      />
                    );
                  case ExtensionValueKeys.PaddingVertical:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Padding Vertical"
                        value={value.paddingVertical}
                        onChange={handlePaddingVChange}
                        Control={Input}
                      />
                    );
                  case ExtensionValueKeys.PaddingHorizontal:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Padding Horizontal"
                        value={value.paddingHorizontal}
                        onChange={handlePaddingHChange}
                        Control={Input}
                      />
                    );
                  case ExtensionValueKeys.MarginBottom:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Margin Bottom"
                        value={value.marginBottom}
                        onChange={handleMarginBChange}
                        Control={Input}
                      />
                    );
                  case ExtensionValueKeys.InnerContainerType:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Inner Container Type"
                        value={value.innerContainerType}
                        onChange={handleContainerTypeChange}
                        Control={SelectContainerType}
                      />
                    );
                  case ExtensionValueKeys.Align:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Align"
                        value={value.align}
                        onChange={handleAlignChange}
                        Control={SelectAlignmentType}
                      />
                    );
                  case ExtensionValueKeys.VerticalAlign:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Vertical Align"
                        value={value.verticalAlign}
                        onChange={handleVAlignChange}
                        Control={SelectVerticalAlignmentType}
                      />
                    );
                  case ExtensionValueKeys.Color:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Color"
                        value={value.color}
                        onChange={handleColorChange}
                        Control={Input}
                      />
                    );
                  case ExtensionValueKeys.FontSize:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Font Size"
                        value={value.fontSize}
                        onChange={handleFontSizeChange}
                        Control={SelectFontSize}
                      />
                    );
                  case ExtensionValueKeys.BgPosition:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Background position"
                        value={value.bgPosition}
                        onChange={handleBgPositionChange}
                        Control={SelectBgPosition}
                      />
                    );
                  case ExtensionValueKeys.BgColor:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Background color"
                        value={value.bgColor}
                        onChange={handleBgColorChange}
                        Control={Input}
                      />
                    );
                  case ExtensionValueKeys.BgSize:
                    return (
                      <BreakpointInput
                        key={key}
                        label="Background size"
                        value={value.bgSize}
                        onChange={handleBgSizeChange}
                        Control={SelectBgSize}
                      />
                    );
                  case ExtensionValueKeys.Grow:
                    return (
                      <BreakpointInput
                        label="Grow"
                        value={value.grow}
                        onChange={handleGrowChange}
                        Control={Checkbox}
                      />
                    );
                }
              })}
              {!fields.length && <EmptyField />}
            </>
          )}
        </AccordionItem>
      </Accordion>
      <span className="dummy">{domChange}</span>
    </div>
  );
};

export default App;
