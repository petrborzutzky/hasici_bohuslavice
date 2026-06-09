import React from 'react';
import { Avatar } from '../components';

function clenove() {
  return (
    <div className="container">
      <h2 className="text-xl text-center mb-5">
        Členové výboru SDH Bohuslavice
      </h2>
      <div className="flex justify-evenly gap-5 flex-wrap">
        <Avatar
          name="Petr Kubík"
          functions="Starosta sboru"
          photo="/avatars/18.jpg"
        />
        <Avatar name="Tomáš Dominik" functions="Náměstek starosty" />
        <Avatar
          name="Jan Manusch"
          functions="Velitel Sboru"
          photo="/avatars/14.jpg"
        />
        <Avatar
          name="Petr Borzutzký"
          functions="Jednatel"
          photo="/avatars/01.jpg"
        />
        <Avatar name="ing. Ondřej Zedníček" functions="Hospodář" />

        <Avatar name="Heidutzková Ester" functions="Vedoucí mládeže" />
        <Avatar
          name="David Vitásek"
          functions="Strojník"
          photo="/avatars/19.jpg"
        />
        <Avatar
          name="David Zajíček"
          functions="Org. referent sboru"
          photo="/avatars/03.jpg"
        />
        <Avatar
          name="Jiří Vitásek"
          functions="Referent ochrany obyvatel"
          photo="/avatars/05.jpg"
        />
        <Avatar
          name="ing. Adam Ryš"
          functions="Kronikář"
          photo="/avatars/15.jpg"
        />
        <Avatar name="Lucie Gazdová" functions="Člen výboru" />

        <Avatar
          name="Jaroslav Kubík"
          functions="Člen výboru"
          photo="/avatars/20.jpg"
        />
        <Avatar name="Elen Buhlová" functions="Člen výboru" />
        <Avatar
          name="Matyáš Ďurina"
          functions="Člen výboru"
          photo="/avatars/02.jpg"
        />
        <Avatar
          name="Lukáš Kučera"
          functions="Člen výboru"
          photo="/avatars/25.jpg"
        />

        <Avatar
          name="Pavel Gazda"
          functions="Revizor"
          photo="/avatars/08.jpg"
        />
      </div>
    </div>
  );
}

export default clenove;
