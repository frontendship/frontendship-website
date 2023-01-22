import React from 'react';

import AccordionItem from '@/components/Accordion/AccordionItem';

import { AccordionProps } from './Accordion.types';

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openKey, setOpenKey] = React.useState<string | null>(null);

  const updateUrlHash = (key: string | null) => {
    if (key === null) {
      window.location.hash = '';
      return;
    }
    window.location.hash = key;
  };

  const onToggle = (key: string | null) => {
    if (openKey === key) key = null;
    setOpenKey(key);
    updateUrlHash(key);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          title={item.title}
          content={item.content}
          key={index}
          onToggle={() => onToggle(item.tag)}
          isExpanded={openKey === item.tag}
        />
      ))}
    </div>
  );
};

export default Accordion;
