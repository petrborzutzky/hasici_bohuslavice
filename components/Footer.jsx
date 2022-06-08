import React from "react";
import { ContactMember } from "./footerComponents";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full flex bg-stone-300 flex-wrap items-center justify-center text-center gap-10 text-black p-10">
        <Link href="https://www.canis-prosper.cz/">
          <span className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              src="../sponzori/canis.png"
              className="h-12"
              alt="Canis Prosper"
            />
          </span>
        </Link>
        <Link href="https://www.klia.cz/">
          <span className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src="../sponzori/klia.png" className="h-16" alt="Klia" />
          </span>
        </Link>
        <Link href="https://www.bohuslavice.eu/">
          <span className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              src="../sponzori/obecbohuslavice.png"
              className="h-20"
              alt="Obec Bohuslavice"
            />
          </span>
        </Link>
        <Link href="https://www.valkodoprava.cz/">
          <span className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              src="../sponzori/valkodoprava.png"
              className="h-16"
              alt="Valko doprava"
            />
          </span>
        </Link>
        <Link href="https://www.pedotherm.cz/">
          <span className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              src="../sponzori/pedotherm.png"
              className="h-8"
              alt="Pedotherm"
            />
          </span>
        </Link>
        <Link href="https://www.kvetinyhlucin.cz/">
          <span className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              src="../sponzori/zsservis.png"
              className="h-10"
              alt="ZSServis"
            />
          </span>
        </Link>
        <Link href="https://www.mitmetal.cz/">
          <span className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              src="../sponzori/mitmetal.png"
              className="h-8"
              alt="MitMetal"
            />
          </span>
        </Link>
      </div>
      <section id="kontakty" />
      <div className="w-full flex bg-stone-600 flex-wrap justify-center text-center gap-20 text-white p-5">
        <ContactMember
          title="Velitel jednotky"
          name="Jan Manusch"
          phone="+420 724 188 479"
          mail="jan.manusch@agroup.cz"
          facebook="jan.manusch.3"
        />
        <ContactMember
          title="Starosta Sdh"
          name="Antonín Blokša"
          phone="+420 606 452 567"
          mail="bloksatonda@seznam.cz"
        />
        <ContactMember
          title="Vedoucí mládeže"
          name="Petr Kubík"
          phone="+420 775 260 184"
          mail="peterek@seznam.cz"
          facebook="kubik.petr.3"
        />
      </div>
    </>
  );
};

export default Footer;
