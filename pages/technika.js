import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";

function technika() {
  return (
    <div className="container">
      <h2 className="text-xl text-center">Scania - CAS30/8500/510-S2R</h2>
      <div className="container relative w-full h-64 shadow-lg mt-10 mb-10 hover:shadow-2xl">
        <Link href="/scania.jpg" className="cursor-pointer">
          <Image
            src="/scania.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center 60%"
            className="cursor-pointer"
          />
        </Link>
      </div>

      <p className="mb-5">
        Cisternová automobilová stříkačka na podvozku Scania P440 B6×6 HZ.
      </p>
      <h2 className="mb-5 text-xl">Parametry:</h2>
      <ul className="list-disc ml-10 mb-5">
        <li>Objem vody v nádrži 8500l</li>
        <li>Objem pěny v nádrži 510l</li>
        <li>Výkon čerpadla: 3000l vody/min</li>
        <li>Motor: Řadový šestiválec 324kW/ 2300Nm</li>
        <li>Automatická převodovka Opticruise</li>
        <li>Délka: 9,95m</li>
        <li>Šířka: 2,55m</li>
        <li>Výška: 3,15m</li>
      </ul>
      <div className="text-right">
        <Link href="https://www.pozary.cz/clanek/233693-do-bohuslavic-dorazila-nova-scania-cisterna-ve-sluzbe-u-mistni-dobrovolne-jednotky-nahradi-vyslouzilou-tatru/">
          <span className="cursor-pointer mr-5 underline hover:text-red-700 text-blue-400">
            Více informací..
            <ExternalLinkIcon className="h-5 w-5 inline -mt-1 ml-1" />
          </span>
        </Link>
      </div>

      <h2 className="text-xl mt-10 text-center">
        Mercedes-Benz Sprinter - DA 15 L2T
      </h2>
      <div className="container relative w-full h-64 shadow-lg mt-10 mb-10 hover:shadow-2xl">
        <Link href="/mercedes.jpg" className="cursor-pointer">
          <Image
            src="/mercedes.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center 60%"
            className="cursor-pointer"
          />
        </Link>
      </div>

      <p className="mb-5">
        Dopravní automobil pro přepravu osob a požárního vybavení.
      </p>
      <h2 className="mb-5 text-xl">Parametry:</h2>
      <ul className="list-disc ml-10 mb-5">
        <li>Objem vody v nádrži 300l</li>
        <li>Motor: Přeplňovaný čtyřválec 2,2l - 120kW</li>
        <li>Automatická převodovka</li>
        <li>Délka: 7,29m</li>
        <li>Šířka: 1,99m</li>
        <li>Výška: 3,2m</li>
        <li>Provozní hmotnost: 3630kg</li>
        <li>Největší technicky přípustná hmotnost: 5000kg</li>
      </ul>
      <div className="text-right">
        <Link href="https://www.pozary.cz/clanek/112653-moravskoslezsky-kraj-zakoupil-pro-dobrovolne-hasice-50-dopravnich-automobilu-na-podvozku-mercedes-benz-sprinter-4x4/">
          <span className="cursor-pointer mr-5 underline hover:text-red-700 text-blue-400">
            Více informací..
            <ExternalLinkIcon className="h-5 w-5 inline -mt-1 ml-1" />
          </span>
        </Link>
      </div>

      <h2 className="text-xl mt-10 mb-3 text-center">
        Tatra 815 - CAS32/8200/800
      </h2>
      <p className="text-center text-red-800">
        Užíváno v letech 2008-2021. Následně prodáno hasičům z Unína (SK)
      </p>
      <div className="container relative w-full h-64 shadow-lg mt-10 mb-10 hover:shadow-2xl">
        <Link href="/tatra.jpg" className="cursor-pointer">
          <Image
            src="/tatra.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center 60%"
            className="cursor-pointer"
          />
        </Link>
      </div>

      <p className="mb-5">
        Cisternová automobilová stříkačka na podvozku Tatra 815.
      </p>
      <h2 className="mb-5 text-xl">Parametry:</h2>
      <ul className="list-disc ml-10 mb-5">
        <li>Objem vody v nádrži 8200l</li>
        <li>Objem pěny v nádrži 800l</li>
        <li>
          Motor: Vznětový, čtyřdobý, vzduchem chlazený dvanáctiválec do "V" o
          výkonu 235 KW
        </li>
        <li>Převodovka: Synchronizovaná, 10 stupňů vpřed, 2 vzad</li>
        <li>Výkon čerpadla: 3200l vody/min</li>
        <li>Délka: 8,51m</li>
        <li>Šířka: 2,5m</li>
        <li>Výška: 3,35m</li>
        <li>Celková hmotnost: 22 500kg</li>
      </ul>

      <h2 className="text-xl mt-10 mb-3 text-center">Avie A31 DA12</h2>
      <p className="text-center text-red-800">Užíváno v letech 1984-2017.</p>
      <div className="container relative w-full h-64 shadow-lg mt-10 mb-10 hover:shadow-2xl">
        <Link href="/avie.jpg" className="cursor-pointer">
          <Image
            src="/avie.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center 60%"
            className="cursor-pointer"
          />
        </Link>
      </div>

      <p className="mb-5">Dopravní automobil na podvozku Avie A 31</p>
      <h2 className="mb-5 text-xl">Parametry:</h2>
      <ul className="list-disc ml-10 mb-5">
        <li>
          Motor: vznětový, naftový, čtyřdobý, řadový, kapalinou chlazený
          čtyřválec o výkonu 60kW
        </li>
        <li>Převodovka: 4 stupně vpřed, 1 vzad</li>
        <li>Délka: 5,75m</li>
        <li>Šířka: 2,308m</li>
        <li>Výška: 2,750m</li>
        <li>Celková hmotnost: 6 500kg</li>
      </ul>
    </div>
  );
}

export default technika;
