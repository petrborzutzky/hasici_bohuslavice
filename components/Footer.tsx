import React from 'react';
import { ContactMember, Sponsor } from './footerComponents';

const Footer = () => {
  return (
    <>
      <div className="w-full flex bg-stone-300 flex-wrap items-center justify-center text-center gap-10 text-black p-10">
        <Sponsor
          href="https://www.bohuslavice.eu/"
          height="h-20"
          source="obecbohuslavice.png"
          altText="Obec Bohuslavice"
        />
        <Sponsor
          href="https://www.canis-prosper.cz/"
          height="h-12"
          source="canis.png"
          altText="Canis Prosper"
        />
        <Sponsor
          href="https://www.klia.cz/"
          height="h-16"
          source="klia.png"
          altText="Klia"
        />
        <Sponsor
          href="https://www.valkodoprava.cz/"
          height="h-16"
          source="valkodoprava.png"
          altText="Valko doprava"
        />
        <Sponsor
          href="https://www.pedotherm.cz/"
          height="h-8"
          source="pedotherm.png"
          altText="Pedotherm"
        />
        <Sponsor
          href="https://www.facebook.com/Restaurace-Majk-325344344316757"
          height="h-16"
          source="majk.png"
          altText="Restaurace Majk"
        />
        <Sponsor
          href="https://www.mitmetal.cz/"
          height="h-8"
          source="mitmetal.png"
          altText="Mitmetal"
        />
      </div>
      <section id="kontakty" />
      <div className="w-full flex bg-stone-600 flex-wrap justify-center text-center gap-20 text-white p-5">
        <ContactMember
          title="Starosta Sdh"
          name="Antonín Blokša"
          phone="+420 606 452 567"
          mail="bloksatonda@seznam.cz"
        />
        <ContactMember
          title="Velitel jednotky"
          name="Jan Manusch"
          phone="+420 724 188 479"
          mail="jan.manusch@seznam.cz"
          facebook="jan.manusch.3"
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
