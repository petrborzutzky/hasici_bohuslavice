import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
  TruckIcon,
  UsersIcon,
  InformationCircleIcon,
  FireIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { MenuPopOver, MobilMenu } from '.';

const sdh = [
  {
    name: 'O sboru',
    description: 'Informace o sboru, historie, atd.',
    href: 'o-sboru',
    icon: InformationCircleIcon,
  },
  {
    name: 'Členové výboru',
    description: 'Seznam členů výboru SDH',
    href: 'clenove-vyboru',
    icon: UsersIcon,
  },
];
const jsdh = [
  {
    name: 'Technika',
    description: 'Výjezdové vozidla a další technika',
    href: 'technika',
    icon: TruckIcon,
  },
  {
    name: 'Členové jednotky',
    description: 'Seznam členů jednotky',
    href: 'clenove-jednotky',
    icon: UsersIcon,
  },
];
const mladiHasici = [
  {
    name: 'O mladých hasičích',
    description: 'Informace o mladých hasičích',
    href: 'o-mladych-hasicich',
    icon: InformationCircleIcon,
  },
  {
    name: 'Soutěže',
    description: 'Informace o soutežích mladých hasičů',
    href: 'souteze-mh',
    icon: FireIcon,
  },
];

const muzi = [
  {
    name: 'O týmu mužů',
    description: 'Informace o sportovním týmů mužů',
    href: 'o-muzich',
    icon: InformationCircleIcon,
  },
  {
    name: 'Soutěže',
    description: 'Informace o soutežích mužů',
    href: 'souteze-muzi',
    icon: FireIcon,
  },
];

const tfa = [
  {
    name: 'Tým TFA',
    description: 'Informace o sportovním týmů TFA',
    href: 'o-tfa',
    icon: InformationCircleIcon,
  },
  {
    name: 'Soutěže',
    description: 'Informace o soutežích družstva TFA',
    href: 'souteze-tfa',
    icon: FireIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  return (
    <Popover className="bg-white z-50 sticky top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 lg:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="flex items-center cursor-pointer">
                <img
                  className="h-10 w-auto transition-transform sm:scale-100 sm:pl-4 sm:h-20"
                  src="../logo.png"
                  alt="Hasiči Bohuslavice"
                />
                <span className="ml-5 text-2xl">Hasiči Bohuslavice</span>
              </span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex space-x-10">
            <MenuPopOver titleMenu="Sdh" childrenMenu={sdh} />
            <MenuPopOver titleMenu="Jednotka SDH" childrenMenu={jsdh} />
            <MenuPopOver titleMenu="Mladí hasiči" childrenMenu={mladiHasici} />
            <MenuPopOver titleMenu="Muži" childrenMenu={muzi} />
            <MenuPopOver titleMenu="TFA" childrenMenu={tfa} />

            <Link href="#kontakty">
              <span className="text-base cursor-pointer font-medium text-gray-500 hover:text-red-800">
                Kontakt
              </span>
            </Link>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute bg-white top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pb-5 pt-2 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 mr-5 inline w-auto"
                    src="../logo.png"
                    alt="Hasiči Bohuslavice"
                  />{' '}
                  Hasiči Bohuslavice
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                    <span className="sr-only">Zavřít menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-2">
                <nav className="grid gap-y-0">
                  <MobilMenu titleMenu="Sdh" childrenMenu={sdh} />

                  <MobilMenu titleMenu="Jednotka SDH" childrenMenu={jsdh} />
                  <MobilMenu
                    titleMenu="Mladí hasiči"
                    childrenMenu={mladiHasici}
                  />
                  <MobilMenu titleMenu="Muži" childrenMenu={muzi} />
                  <MobilMenu titleMenu="TFA" childrenMenu={tfa} />
                  <Link href="#kontakty">
                    <span className="mt-1 flex cursor-pointer items-center hover:bg-red-50">
                      <Popover.Button>
                        <InformationCircleIcon
                          className="m-1 flex-shrink-0 h-6 w-6 text-red-800"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Popover.Button className="w-full text-left">
                        <span className="ml-2 p-1 text-base font-medium text-gray-900">
                          Kontakt
                        </span>
                      </Popover.Button>
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
