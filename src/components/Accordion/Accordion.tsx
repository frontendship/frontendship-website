import { useState } from 'react';
import { MinusCircle, PlusCircle } from 'react-feather';

import {
  AccordionDetailsProps,
  AccordionHeaderProps,
  AccordionProps
} from './Accordion.types';

export const Accordion = ({ children }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b pt-6 pb-8">
      <div className="flex items-center justify-between">
        <button onClick={() => onToggle()}>{children[0]}</button>
        <div className="text-indigo-500">
          {isExpanded ? <MinusCircle /> : <PlusCircle />}
        </div>
      </div>
      {isExpanded && children[1]}
    </div>
  );
};

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
  return (
    <div className="grow text-lg font-medium text-gray-900">{children}</div>
  );
};

const AccordionDetails: React.FC<AccordionDetailsProps> = ({ children }) => {
  return (
    <div className="pt-2 text-gray-500 duration-200 ease-in">{children}</div>
  );
};

Accordion.Details = AccordionDetails;
Accordion.Header = AccordionHeader;
