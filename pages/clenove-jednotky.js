import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../components";

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
          photo="/avatars/14.jpg"
        />
        <Avatar
          name="Petr Kubík"
          functions="Velitel družstva, NDT, pilař"
          photo="/avatars/18.jpg"
        />
        <Avatar
          name="David Zajíček"
          functions="Velitel družstva, strojník, NDT, pilař"
          photo="/avatars/03.jpg"
        />
        <Avatar
          name="Petr Borzutzký"
          functions="Technik, NDT"
          photo="/avatars/01.jpg"
        />
        <Avatar
          name="David Vitásek"
          functions="Strojník, NDT"
          photo="/avatars/19.jpg"
        />
        <Avatar
          name="Pavel Gazda"
          functions="Strojník, NDT, pilař"
          photo="/avatars/08.jpg"
        />
        <Avatar
          name="David Kubík"
          functions="Strojník, NDT"
          photo="/avatars/11.jpg"
        />
        <Avatar
          name="Milan Štefek"
          functions="Strojník, NDT"
          photo="/avatars/09.jpg"
        />
        <Avatar name="Adam Ryš" functions="Strojník" photo="/avatars/15.jpg" />
        <Avatar name="Jiří Vitásek" functions="NDT" photo="/avatars/05.jpg" />
        <Avatar name="Jiří Lasák" functions="NDT" photo="/avatars/24.jpg" />
        <Avatar name="Jaroslav Kubík" functions="NDT" photo="/avatars/20.jpg" />
        <Avatar name="Ladislav Šimoník" functions="NDT" />
        <Avatar
          name="Lukáš Kučera"
          functions="Rookie"
          photo="/avatars/25.jpg"
        />
        <Avatar
          name="Jaroslav Černovský"
          functions="Rookie"
          photo="/avatars/26.jpg"
        />
      </div>
      <p className="text-center mt-10">*NDT - Nositel dýchací techniky</p>
    </div>
  );
}

export default clenove;
