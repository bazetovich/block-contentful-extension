import React, { useState, FC } from 'react';
import Checkbox from '@contentful/forma-36-react-components/dist/components/Checkbox';
import Button from '@contentful/forma-36-react-components/dist/components/Button/Button';
import Dropdown from '@contentful/forma-36-react-components/dist/components/Dropdown/Dropdown';
import FormLabel from '@contentful/forma-36-react-components/dist/components/FormLabel';
import DropdownList from '@contentful/forma-36-react-components/dist/components/Dropdown/DropdownList';
import DropdownListItem from '@contentful/forma-36-react-components/dist/components/Dropdown/DropdownListItem/DropdownListItem';
import { ExtensionValue, ExtensionValueKeys } from '../../../shared';

const list = [
  ExtensionValueKeys.Height,
  ExtensionValueKeys.Width,
  ExtensionValueKeys.PaddingVertical,
  ExtensionValueKeys.PaddingHorizontal,
  ExtensionValueKeys.MarginBottom,
  ExtensionValueKeys.InnerContainerType,
  ExtensionValueKeys.Align,
  ExtensionValueKeys.VerticalAlign,
  ExtensionValueKeys.Color,
  ExtensionValueKeys.FontSize,
  ExtensionValueKeys.BgPosition,
  ExtensionValueKeys.BgColor,
  ExtensionValueKeys.Grow,
];

interface Props {
  value: ExtensionValue;
  onPropertyPick: (k: ExtensionValueKeys) => void;
}

const PropertyPicker: FC<Props> = ({ value, onPropertyPick }) => {
  const [isOpen, setOpen] = useState(false);

  const createHandler = (k: ExtensionValueKeys) => {
    return () => {
      onPropertyPick(k);
    };
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      toggleElement={
        <Button size="small" buttonType="muted" indicateDropdown onClick={() => setOpen(!isOpen)}>
          Select property
        </Button>
      }>
      <DropdownList maxHeight={122}>
        {list.map((key, i) => (
          <DropdownListItem key={i.toString()} onMouseDown={createHandler(key)}>
            <Checkbox id={key} labelText="" checked={Boolean(value[key])} />{' '}
            <FormLabel htmlFor={key}>{key}</FormLabel>
          </DropdownListItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
};

export default PropertyPicker;
