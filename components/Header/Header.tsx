import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'react-feather';

import { defaultMenuItems, defaultTopMenuItems } from './Header.items';
import { HeaderParams } from './Header.types';

export default function Header({
  imageUrl = 'https://prototyprio.gumlet.io/strapi/20b5e1615519f85953d636ec6a5005ae.png?w=3840&q=75&format=webp&compress=true&dpr=2',
  title = 'Untitled UI',
  topMenuItems = defaultTopMenuItems,
  menuItems = defaultMenuItems
}: HeaderParams) {
  const [isOpen, setIsOpen] = useState(true);
  const openDiscordServer = () => {
    window.open(process.env.DISCORD_SERVER_URL);
  };

  useEffect(() => {
    const isClientInMobileView =
      typeof window !== 'undefined' && window.innerWidth < 768;
    if (isClientInMobileView) {
      setIsOpen(false);
    }
  }, []);
  return (
    <div className="flex h-screen flex-col items-center gap-6  p-0 md:h-auto md:flex-row md:p-4">
      <div className="flex w-full items-center justify-between border-b  p-4 md:w-fit md:border-0 md:p-0">
        <div className="flex items-center gap-x-3 md:w-max">
          <Image alt="" src={imageUrl} width="45" height="45" />
          <h2>{title}</h2>
        </div>
        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="flex  w-full grow items-start  justify-start p-4 md:w-max md:items-center md:p-0">
            <div className="flex w-full flex-col items-start gap-6 md:flex-row md:items-center md:gap-x-6 md:gap-y-0">
              {topMenuItems.map((topMenuItem, index) => (
                <div key={index} className="w-full md:w-auto">
                  {topMenuItem.text}
                </div>
              ))}
            </div>
          </div>

          <div className="flex  w-full flex-row  flex-wrap  gap-3 border-t p-4 md:hidden md:p-0">
            {menuItems.map((menuItem, index) => (
              <div key={index} className="w-48">
                {menuItem.text}
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center  gap-4 p-4 md:w-max  md:justify-end md:p-0">
            <button
              className="w-full rounded bg-indigo-500 px-2 py-1 text-white duration-300 ease-in-out hover:bg-indigo-600 md:w-max"
              onClick={() => openDiscordServer()}
            >
              Join Discord
            </button>
          </div>
        </>
      )}
    </div>
  );
}
