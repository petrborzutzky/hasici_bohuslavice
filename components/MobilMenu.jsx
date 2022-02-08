import React from 'react';
import Link from 'next/link'

const MobilMenu = ({titleMenu, childrenMenu}) => {
  return(
    <>
      <span className=''>{titleMenu}</span>
      {childrenMenu.map((item) => (
      <Link
        key={item.name}
        href={item.href}
      >
        <span className="-m-4 ml-5 p-1 flex cursor-pointer items-center hover:bg-red-50">
          <item.icon className="flex-shrink-0 h-6 w-6 text-red-800" aria-hidden="true" />
          <span className="ml-2 text-base font-medium text-gray-900">{item.name}</span>
        </span>
      </Link>
      ))}
    </>)
}

export default MobilMenu;
