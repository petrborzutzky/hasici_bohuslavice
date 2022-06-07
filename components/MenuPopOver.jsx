import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MenuPopOver = ({ titleMenu, childrenMenu }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-red-800" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-red-800 focus:outline-none "
            )}
          >
            <span>{titleMenu}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-red-700" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-red-800"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {childrenMenu.map((item) => (
                    <Link key={item.name} href={`/${item.href}`}>
                      <div className="flex cursor-pointer hover:bg-red-50 -m-3">
                        <Popover.Button>
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-red-800 ml-3"
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <div className="ml-4 grow">
                          <Popover.Button className="w-full text-left pt-3">
                            <p className="text-base font-medium text-gray-900 ">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500 pb-3">
                              {item.description}
                            </p>
                          </Popover.Button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MenuPopOver;
