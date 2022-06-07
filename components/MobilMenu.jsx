import React from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";

const MobilMenu = ({ titleMenu, childrenMenu }) => {
  return (
    <>
      <span className="mb-1">{titleMenu}</span>
      {childrenMenu.map((item) => (
        <Link key={item.name} href={`/${item.href}`}>
          <Popover.Button>
            <div className="ml-5 p-1 flex items-center justify-start cursor-pointer hover:bg-red-50">
              <item.icon className="h-6 w-6 text-red-800" aria-hidden="true" />
              <div className="ml-2 pr-20 font-medium text-gray-900">
                {item.name}
              </div>
            </div>
          </Popover.Button>
        </Link>
      ))}
    </>
  );
};

export default MobilMenu;
