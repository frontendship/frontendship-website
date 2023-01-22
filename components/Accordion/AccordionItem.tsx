import React from 'react';
import { MinusCircle, PlusCircle } from 'react-feather';

import { AccordionItemProps } from '@/components/Accordion/Accordion.types';

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  onToggle,
  content,
  isExpanded
}) => {
  return (
    <div className={'border-b py-3'}>
      <div
        onClick={() => onToggle()}
        className="flex cursor-pointer justify-between"
      >
        <div className="grow text-lg font-medium text-gray-900">{title}</div>
        <div className="text-indigo-500">
          {isExpanded ? <MinusCircle /> : <PlusCircle />}
        </div>
      </div>
      {isExpanded && <div className="pt-2 text-gray-500">{content}</div>}
    </div>
  );
};

export default AccordionItem;
