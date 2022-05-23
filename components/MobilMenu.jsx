import React from "react";
import Link from "next/link"
import { Popover } from "@headlessui/react";

const MobilMenu = ({titleMenu, childrenMenu}) => {
  return(
    <>
      <span className="">{titleMenu}</span>
      {childrenMenu.map((item) => (
      <Link
        key={item.name}
        href={item.href}
      >
        
        <div className="-m-4 ml-5 p-1 flex cursor-pointer hover:bg-red-50">
        <Popover.Button><item.icon className="h-6 w-6 text-red-800" aria-hidden="true" /></Popover.Button>
        <Popover.Button><div className="ml-2 grow pr-20 font-medium text-gray-900">{item.name}</div></Popover.Button>
        </div>
        
      </Link>
      ))}
    </>)
}

export default MobilMenu;
