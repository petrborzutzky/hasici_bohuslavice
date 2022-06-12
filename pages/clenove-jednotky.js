import React from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "../components/Avatar";

function clenove() {
  return (
    <div className="container">
      <h2 className="text-xl text-center mb-5">
        Členové výjezdové jednotky - JSDH Bohuslavice
      </h2>
      <div className="flex justify-evenly gap-5 flex-wrap">
        <Avatar
          name="Jan Manusch"
          functions="Velitel jednotky, NDT"
        />
        <Avatar name="Petr Kubík" functions="Velitel družstva, NDT, pilař" />
        <Avatar
          name="David Zajíček"
          functions="Velitel družstva, strojník, NDT, pilař"
        />
        <Avatar
          name="Petr Borzutzký"
          functions="Technik, NDT"
          photo="/avatars/01.jpg"
        />
        <Avatar name="David Vitásek" functions="Strojník, NDT" />
        <Avatar name="Pavel Gazda" functions="Strojník, NDT, pilař" />
        <Avatar name="David Kubík" functions="Strojník, NDT" />
        <Avatar name="Milan Štefek" functions="Strojník, NDT" />
        <Avatar name="Adam Ryš" functions="Strojník" />
        <Avatar name="Jiří Vitásek" functions="NDT" />
        <Avatar name="Jiří Lasák" functions="NDT" />
        <Avatar name="Jaroslav Kubík" functions="NDT" />
        <Avatar name="Ladislav Šimoník" functions="NDT" />
        <Avatar name="Lukáš Kučera" functions="Rookie" />
        <Avatar name="Jaroslav Černovský" functions="Rookie" />
      </div>
      <p className="text-center mt-10">*NDT - Nositel dýchací techniky</p>
    </div>
  );
}

export default clenove;
