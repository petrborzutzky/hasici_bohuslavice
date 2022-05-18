import React from "react";
import Image from "next/image";
import Link from "next/link";

function technika() {
  return (
    <div className="container">
      <h2 className="text-xl text-center">Scania - CAS30/8500/510-S2R</h2>
      <div className="container relative w-full h-64 shadow-lg mt-10 mb-10">
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
      <h2 className="mb-5 text-xl">
          Parametry:
        </h2>
        <ul className="list-disc ml-10 mb-10">
          <li>Objem vody v nádrži 8500l</li>
          <li>Objem pěny v nádrži 510l</li>
          <li>Výkon čerpadla: 3000l vody/min</li>
          <li>Motor: Řadový šestiválec 324kW/ 2300Nm</li>
          <li>Automatická převodovka Opticruise</li>
          <li>Délka: 9,95m</li>
          <li>Šířka: 2,55m</li>
          <li>Výška: 3,15m</li>
        </ul>

        <h2 className="text-xl text-center">Mercedes-Benz Sprinter - DA 15 L2T</h2>
      <div className="container relative w-full h-64 shadow-lg mt-10 mb-10">
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
      <h2 className="mb-5 text-xl">
          Parametry:
        </h2>
        <ul className="list-disc ml-10">
          <li>Objem vody v nádrži 300l</li>
          <li>Motor: Přeplňovaný čtyřválec 2,2l - 120kW</li>
          <li>Automatická převodovka</li>
          <li>Délka: 7,29m</li>
          <li>Šířka: 1,99m</li>
          <li>Výška: 3,2m</li>
          <li>Provozní hmotnost: 3630kg</li>
          <li>Největší technicky přípustná hmotnost: 5000kg</li>
        </ul>
        
      
    </div>
  )
}

export default technika;
