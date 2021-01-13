import React, { FC } from 'react';
import Accordion from '@contentful/forma-36-react-components/dist/components/Accordion';
import AccordionItem from '@contentful/forma-36-react-components/dist/components/Accordion/AccordionItem';
import { BreakPoints, BreakPointValue } from '../../../shared';
import './BreakpointInput.css';
import { formId } from './BreakPointInput.utils';

interface Props {
  label: string;
  value: BreakPointValue<any>;
  Control: React.FC<any>;
  onChange: (val: BreakPointValue<any>) => void;
}

const BreakpointInput: FC<Props> = ({ label, value, Control, onChange }) => {
  const createChaneHandler = (br: BreakPoints) => {
    return (v: any) => {
      onChange({
        ...value,
        [br]: v,
      });
    };
  };

  const mobileId = formId('mobile');
  const tabletId = formId('tablet');
  const desktopId = formId('desktop');
  const widescreenId = formId('widescreen');

  return (
    <div className="breakpoint-input">
      <Accordion>
        <AccordionItem titleElement="h3" title={label}>
          <div className="item-wrap">
            <div className="item">
              <label htmlFor={mobileId}>Mobile</label>
              <Control
                id={mobileId}
                value={value[BreakPoints.Mobile]}
                onChange={createChaneHandler(BreakPoints.Mobile)}
              />
            </div>
            <div className="item">
              <label htmlFor={tabletId}>Tablet</label>
              <Control
                id={tabletId}
                value={value[BreakPoints.Tablet]}
                onChange={createChaneHandler(BreakPoints.Tablet)}
              />
            </div>
            <div className="item">
              <label htmlFor={desktopId}>Desktop</label>
              <Control
                id={desktopId}
                value={value[BreakPoints.Desktop]}
                onChange={createChaneHandler(BreakPoints.Desktop)}
              />
            </div>
            <div className="item">
              <label htmlFor={widescreenId}>Widescreen</label>
              <Control
                id={widescreenId}
                value={value[BreakPoints.WideScreen]}
                onChange={createChaneHandler(BreakPoints.WideScreen)}
              />
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default BreakpointInput;
