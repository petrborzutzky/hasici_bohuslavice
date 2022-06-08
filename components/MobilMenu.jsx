import React from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";

const MobilMenu = ({ titleMenu, childrenMenu }) => {
  return (
    <>
      <span className="mb-1">{titleMenu}</span>
      {childrenMenu.map((item) => (
        <Link key={item.name} href={`/${item.href}`}>
          <div className="ml-5 flex items-center justify-start cursor-pointer hover:bg-red-50">
            <Popover.Button>
              <item.icon
                className="m-1 h-6 w-6 text-red-800"
                aria-hidden="true"
              />
            </Popover.Button>
            <Popover.Button className="w-full text-left">
              <div className="ml-2 p-1 pr-20 font-medium text-gray-900">
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
