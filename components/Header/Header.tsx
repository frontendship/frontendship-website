import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'react-feather';

import { menuItems, topMenuItems } from './Header.items';
import { DropdownItem, HeaderInnerProps, SubMenuProps } from './Header.types';

const SubMenu: React.FC<SubMenuProps> = ({ columns }) => {
  return (
    <nav className="flex h-full  w-full flex-col justify-start pt-4 md:flex-row md:justify-between">
      <div className="flex flex-col gap-3 md:flex-row md:pl-4">
        {columns.map((col, index) => (
          <div className="flex flex-col gap-3" key={index}>
            <h3 className="text-indigo-500  ">{col.title}</h3>
            <ul className="mt-1 flex flex-col gap-3">
              {col.rows.map((row, index) => (
                <li key={row.title + index}>
                  <Link
                    className="flex flex-row  justify-start gap-3 rounded p-2 pl-0 hover:bg-gray-100 md:p-3"
                    href={row.url}
                  >
                    <div className=" text-indigo-500">
                      <row.icon />
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <h4 className="text-lg font-bold">{row.title}</h4>
                      <p className="m-0 hidden text-gray-500 md:block">
                        {row.text}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className=" flex gap-3 bg-gray-50 px-7 py-5">
        <div className="flex w-full flex-col gap-3 ">
          <div className="relative  h-full w-full md:h-auto md:min-h-0 ">
            <picture>
              <img
                className="min-h-full w-full rounded-lg object-fill  md:h-auto md:min-h-0 md:w-auto "
                alt=""
                src={'https://i.hizliresim.com/8eh2x5d.png'}
              />
            </picture>
          </div>
          <h3 className="font-bold text-gray-900">
            We have just released an update!
          </h3>
          <p className="text-gray-500">
            Check out the all new dashboard view. Pages now load faster.{' '}
          </p>
          <div className="flex flex-row gap-3">
            <button className="text-gray-500">Dismiss</button>
            <button className="text-indigo-700">Changelog</button>
          </div>
        </div>
        <div className="hidden h-full w-20 min-w-max md:block ">&nbsp;</div>
      </div>
    </nav>
  );
};

const HeaderInner: React.FC<HeaderInnerProps> = ({
  isOpen,
  isMobile,
  openDiscordServer,
  setIsOpen,
  onDropdownClick,
  activeDropdownKey
}) => {
  return (
    <>
      <div className="flex w-full items-center justify-between border-b  p-4 md:w-fit md:border-0 md:p-0">
        <div className="flex items-center gap-x-3 md:w-max">
          <Image
            alt=""
            src={
              'https://prototyprio.gumlet.io/strapi/20b5e1615519f85953d636ec6a5005ae.png?w=3840&q=75&format=webp&compress=true&dpr=2'
            }
            width="45"
            height="45"
          />
          <h2 className="text-gray-900">Frontendship</h2>
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
            <ul className="flex w-full flex-col items-start gap-6 md:flex-row md:items-center md:gap-x-6 md:gap-y-0">
              {topMenuItems.map((topMenuItem, index) => (
                <>
                  <li
                    key={index}
                    className="flex w-full gap-2 text-gray-500 md:w-auto"
                    onClick={() =>
                      topMenuItem.dropdown
                        ? onDropdownClick(topMenuItem.dropdown)
                        : null
                    }
                  >
                    {topMenuItem.path ? (
                      <Link href={topMenuItem.path}>{topMenuItem.text}</Link>
                    ) : (
                      topMenuItem.text
                    )}
                    {topMenuItem.dropdown &&
                      (topMenuItem.dropdown.key === activeDropdownKey ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      ))}
                  </li>
                  {topMenuItem.dropdown &&
                    isMobile &&
                    topMenuItem.dropdown.key === activeDropdownKey && (
                      <SubMenu columns={topMenuItem.dropdown.subMenu} />
                    )}
                </>
              ))}
            </ul>
          </div>

          <ul className="flex  w-full flex-row  flex-wrap  gap-3 border-t p-4 md:hidden md:p-0">
            {menuItems.map((menuItem, index) => (
              <li key={index} className="w-48">
                {menuItem.text}
              </li>
            ))}
          </ul>

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
    </>
  );
};

export default function HeaderSection() {
  const [isMobileOpen, setIsMobileOpen] = useState(true);
  const [currentDropdown, setCurrentDropdown] = useState<DropdownItem>({
    key: '',
    subMenu: []
  });
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isClientInMobileView, setIsClientInMobileView] = useState(false);

  useEffect(() => {
    setIsClientInMobileView(
      typeof window !== 'undefined' && window.innerWidth < 768
    );
  }, []);

  useEffect(() => {
    if (isClientInMobileView) {
      setIsMobileOpen(false);
    }
  }, [isClientInMobileView]);

  const toggleSubMenu = (dropdownItem: DropdownItem) => {
    if (isSubMenuOpen && currentDropdown.key === dropdownItem.key) {
      setIsSubMenuOpen(false);
      setCurrentDropdown({
        key: '',
        subMenu: []
      });
      return;
    }
    setIsSubMenuOpen(true);
    setCurrentDropdown(dropdownItem);
  };

  const openDiscordServer = () => {
    window.open(process.env.DISCORD_SERVER_URL);
  };

  return (
    <section className="relative">
      <div className="  container mx-auto border-b  ">
        <header className="flex h-screen flex-col items-center gap-6 overflow-hidden overflow-y-auto bg-white p-0  md:h-auto md:flex-row md:overflow-auto md:p-4">
          <HeaderInner
            isOpen={isMobileOpen}
            openDiscordServer={openDiscordServer}
            setIsOpen={setIsMobileOpen}
            onDropdownClick={toggleSubMenu}
            activeDropdownKey={currentDropdown.key}
            isMobile={isClientInMobileView}
          />
        </header>
      </div>
      {isSubMenuOpen && !isClientInMobileView && (
        <div className="absolute left-0 w-full bg-white shadow-lg">
          <SubMenu columns={currentDropdown.subMenu} />
        </div>
      )}
    </section>
  );
}
