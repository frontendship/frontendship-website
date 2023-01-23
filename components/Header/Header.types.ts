import { IconProps } from 'react-feather';
export type SubMenuRow = {
  title: string;
  text: string;
  icon: React.FC<IconProps>;
  url: string;
};
export type SubMenuCol = {
  title: string;
  rows: SubMenuRow[];
};
export type MenuItem = {
  text: string;
  path?: string;
};
export type DropdownItem = {
  subMenu: SubMenuCol[];
  key: string;
};
export type TopMenuItem = {
  text: string;
  path?: string;
  dropdown?: DropdownItem;
};
export type HeaderInnerProps = {
  isMobile: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  openDiscordServer: () => void;
  onDropdownClick: (dropdown: DropdownItem) => void;
  activeDropdownKey: string;
};
export type SubMenuProps = {
  columns: SubMenuCol[];
};
