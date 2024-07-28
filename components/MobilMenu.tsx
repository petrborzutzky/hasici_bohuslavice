import React from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';

export interface MobilMenuProps {
  titleMenu: string;
  childrenMenu: {
    name: string;
    href: string;
    icon: any;
  }[];
}

const MobilMenu = ({ titleMenu, childrenMenu }: MobilMenuProps) => {
  return (
    <>
      <span className="mb-1">{titleMenu}</span>
      {childrenMenu.map((item) => (
        <Link key={item.name} href={`/${item.href}`}>
          <div className="ml-5 flex items-center justify-start cursor-pointer hover:bg-red-50 dark:hover:bg-slate-600">
            <Popover.Button>
              <item.icon
                className="m-1 h-6 w-6 text-red-800 dark:text-red-500"
                aria-hidden="true"
              />
            </Popover.Button>
            <Popover.Button className="w-full text-left">
              <div className="ml-2 p-1 pr-20 dark:text-slate-300 font-medium text-gray-900">
                {item.name}
              </div>
            </Popover.Button>
          </div>
        </Link>
      ))}
    </>
  );
};

export default MobilMenu;
