export type AccordionItemProps = {
  title: React.ReactNode;
  content: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
};

export type AccordionSingleItem = {
  title: React.ReactNode;
  content: React.ReactNode;
  tag: string;
};

export type AccordionProps = {
  items: AccordionSingleItem[];
};
