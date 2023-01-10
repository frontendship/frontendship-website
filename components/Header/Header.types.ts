export type MenuItem = {
  text: string;
  path?: string;
};

export type TopMenuItem = {
  text: string;
  path?: string;
};
export type HeaderParams = {
  imageUrl?: string;
  title?: string;
  topMenuItems?: TopMenuItem[];
  menuItems?: MenuItem[];
};
