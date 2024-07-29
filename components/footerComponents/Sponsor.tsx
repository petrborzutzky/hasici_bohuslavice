import React from 'react';
import Link from 'next/link';

export interface SponsorProps {
  href: string;
  height: string;
  source: string;
  altText: string;
  bgWhiteOnDarkMode?: boolean;
}
const Sponsor = ({
  href,
  height,
  source,
  altText,
  bgWhiteOnDarkMode = false,
}: SponsorProps) => {
  return (
    <Link href={href}>
      <span
        className={
          'cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ' +
          (bgWhiteOnDarkMode ? 'dark:bg-slate-300 p-2' : '')
        }
      >
        <img
          src={`../../sponzori/${source}`}
          className={height}
          alt={altText}
        />
      </span>
    </Link>
  );
};
export default Sponsor;
