import React from "react";
import Link from "next/link";

const Sponsor = ({ href, height, source, altText }) => {
  return (
    <Link href={href}>
      <span className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
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
