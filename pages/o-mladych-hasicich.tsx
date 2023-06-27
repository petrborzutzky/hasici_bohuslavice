import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function OmladychHasicich() {
  return (
    <div className="container">
      <h1 className="text-2xl text-center mb-5">Mladí hasiči</h1>
      <h3 className="text-lg font-bold mb-5">Tréninky</h3>
      <p className="mb-10">
        Naše družstvo mladých hasičů má pravidelné tréninky{' '}
        <strong>ve středu v 17:00</strong>. Trénujeme na hrišti SK Bohuslavice.
        Při nepříznivém počasí na Hasičské zbrojnici. V zimě trénink probíha v
        tělocvične ZŠ Bohuslavice.
      </p>
      <h3 className="text-lg font-bold mb-5"></h3>
      <div className="container relative w-full h-96 shadow-lg mt-10 mb-10 hover:shadow-xl">
        <Link href="/mladiHasici.jpg" className="cursor-pointer">
          <Image
            src="/mladiHasici.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center 60%"
            className="cursor-pointer"
            alt="Družstvo mladých hasičů na soutěži před hasičskou dodávkou"
          />
        </Link>
      </div>
      <h3 className="text-lg font-bold mb-5">Vedoucí a instruktoři</h3>
      <ul className="list-disc ml-10">
        <li>Petr Kubík</li>
        <li>Jiří Lasák</li>
        <li>Silvie Ďurinová</li>
        <li>Matyáš Ďurina</li>
        <li>Ester Heidutzková</li>
        <li>Amálie Černovská</li>
      </ul>

      <h3 className="text-lg font-bold mt-10 mb-5">Družstva</h3>
      <p>Mladší žáci: 6-11 let</p>
      <p>Starší žáci: 11-15 let</p>
    </div>
  );
}

export default OmladychHasicich;
