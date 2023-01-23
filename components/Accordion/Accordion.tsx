import { useState } from 'react';
import { MinusCircle, PlusCircle } from 'react-feather';

import {
  AccordionDetailsProps,
  AccordionHeaderProps,
  AccordionItemProps,
  AccordionProps
} from './Accordion.types';

const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={'border-b py-3 md:pb-7'}>
      <div
        onClick={() => onToggle()}
        className="flex cursor-pointer items-center justify-between"
      >
        {children[0]}
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
    <div className="grow py-4 text-lg font-medium text-gray-900">
      {children}
    </div>
  );
};

const AccordionDetails: React.FC<AccordionDetailsProps> = ({ children }) => {
  return (
    <div className="pt-2 text-gray-500 duration-200 ease-in">{children}</div>
  );
};

const AccordionRoot: React.FC<AccordionProps> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Details: AccordionDetails,
  Header: AccordionHeader
});
