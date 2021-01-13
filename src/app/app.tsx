import React, { FC, useEffect, useState } from 'react';
import { FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import Accordion from '@contentful/forma-36-react-components/dist/components/Accordion';
import AccordionItem from '@contentful/forma-36-react-components/dist/components/Accordion/AccordionItem';
import '@contentful/forma-36-react-components/dist/styles.css';
import '../index.css';
import { formDefaultValue } from './app.utils';
import {
  BreakpointInput,
  Input,
  SelectContainerType,
  SelectAlignmentType,
  SelectVerticalAlignmentType,
  SelectFontSize,
  Checkbox,
} from './components';
import {
  AlignmentTypes,
  BreakPointValue,
  ContainerTypes,
  ExtensionValue,
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

  // effects

  useEffect(() => {
    sdk.window.startAutoResizer();
  }, []);

  useEffect(() => {
    sdk.field.setValue(value);
  }, [value]);

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

  const handleGrowChange = (val: BreakPointValue<boolean>) => {
    setValue({
      ...value,
      grow: val,
    });
  };

  const handleExpand = () => {
    toggleExpanded(true);
    triggerDomChange(domChange + 1);
    setTimeout(() => {
      triggerDomChange(domChange + 2);
    }, 100);
  };

  const handleCollapse = () => {
    toggleExpanded(false);
    triggerDomChange(domChange + 1);
    setTimeout(() => {
      triggerDomChange(domChange + 2);
    }, 100);
  };

  return (
    <>
      <Accordion className="root-accordion">
        <AccordionItem onExpand={handleExpand} onCollapse={handleCollapse} title="Settings">
          {expanded && (
            <>
              <BreakpointInput
                label="Height"
                value={value.height}
                onChange={handleHeightChange}
                Control={Input}
              />
              <BreakpointInput
                label="Width"
                value={value.width}
                onChange={handleWidthChange}
                Control={Input}
              />
              <BreakpointInput
                label="Padding Vertical"
                value={value.paddingVertical}
                onChange={handlePaddingVChange}
                Control={Input}
              />
              <BreakpointInput
                label="Padding Horizontal"
                value={value.paddingHorizontal}
                onChange={handlePaddingHChange}
                Control={Input}
              />
              <BreakpointInput
                label="Margin Bottom"
                value={value.marginBottom}
                onChange={handleMarginBChange}
                Control={Input}
              />
              <BreakpointInput
                label="Inner Container Type"
                value={value.innerContainerType}
                onChange={handleContainerTypeChange}
                Control={SelectContainerType}
              />
              <BreakpointInput
                label="Align"
                value={value.align}
                onChange={handleAlignChange}
                Control={SelectAlignmentType}
              />
              <BreakpointInput
                label="Vertical Align"
                value={value.verticalAlign}
                onChange={handleVAlignChange}
                Control={SelectVerticalAlignmentType}
              />
              <BreakpointInput
                label="Font Size"
                value={value.fontSize}
                onChange={handleFontSizeChange}
                Control={SelectFontSize}
              />
              <BreakpointInput
                label="Grow"
                value={value.grow}
                onChange={handleGrowChange}
                Control={Checkbox}
              />
            </>
          )}
        </AccordionItem>
      </Accordion>
      <span className="dummy">{domChange}</span>
    </>
  );
};

export default App;
