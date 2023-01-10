import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';

type MenuItem = {
  text: string;
  path?: string;
};
const defaultMenuItems: MenuItem[] = [
  {
    text: 'About us'
  },
  {
    text: 'Press'
  },
  {
    text: 'Careers'
  },
  {
    text: 'Legal'
  },
  {
    text: 'Support'
  },
  {
    text: 'Contact'
  },
  {
    text: 'Sitemap'
  },
  {
    text: 'Cookie settings'
  }
];

type TopMenuItem = {
  text: string;
  path?: string;
};
type HeaderParams = {
  imageUrl?: string;
  title?: string;
  topMenuItems?: TopMenuItem[];
  menuItems?: MenuItem[];
};

const defaultTopMenuItems: TopMenuItem[] = [
  {
    text: 'Home'
  },
  {
    text: 'Products'
  },
  {
    text: 'Resource'
  },
  {
    text: 'Pricing'
  }
];
export default function Header({
  imageUrl = 'https://prototyprio.gumlet.io/strapi/20b5e1615519f85953d636ec6a5005ae.png?w=3840&q=75&format=webp&compress=true&dpr=2',
  title = 'Untitled UI',
  topMenuItems = defaultTopMenuItems,
  menuItems = defaultMenuItems
}: HeaderParams) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsOpen(false);
    }
  }, []);
  return (
    <div className="md:h-auto h-screen flex md:p-4 p-0  gap-6 items-center flex-col md:flex-row">
      <div className="flex border-b md:border-0 md:p-0 p-4  items-center justify-between md:w-fit w-full">
        <div className="flex md:w-max items-center gap-x-3">
          <Image alt="" src={imageUrl} width="45" height="45" />
          <h2>{title}</h2>
        </div>
        <div className="flex md:hidden">
          {isOpen ? (
            <X onClick={() => setIsOpen(false)} />
          ) : (
            <Menu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {isOpen ? (
        <>
          <div className="flex  md:p-0 md:w-max p-4  grow w-full items-start md:items-center justify-start">
            <div className="flex w-full flex-col md:flex-row md:items-center items-start md:gap-x-6 md:gap-y-0 gap-6">
              {topMenuItems.map((topMenuItem, index) => (
                <div key={index} className="md:w-auto w-full">
                  {topMenuItem.text}
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden  md:p-0 p-4  border-t  flex w-full flex-row flex-wrap gap-3">
            {menuItems.map((menuItem, index) => (
              <div key={index} className="w-48">
                {menuItem.text}
              </div>
            ))}
          </div>

          <div className="flex md:p-0 p-4  md:justify-end gap-4 justify-center  md:w-max w-full">
            <button className="px-2 w-full md:w-max py-1 rounded hover:bg-slate-100 opacity-70 ease-in-out duration-300">
              Log in
            </button>
            <button className="bg-indigo-500 md:w-max w-full hover:bg-indigo-600 text-white px-2 py-1 rounded ease-in-out duration-300">
              Sign up
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
