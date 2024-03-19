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
          name="Adam Ryš"
          functions="Starosta sboru"
          photo="/avatars/15.jpg"
        />
        <Avatar
          name="Petr Kubík"
          functions="Náměstek starosty"
          photo="/avatars/18.jpg"
        />
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
        <Avatar name="Ondřej Zedníček" functions="Hospodář" />

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
          name="Jiří Lasák"
          functions="Referent prevence a výchovné činnosti"
          photo="/avatars/24.jpg"
        />
        <Avatar
          name="Jiří Vitásek"
          functions="Referent ochrany obyvatel"
          photo="/avatars/05.jpg"
        />

        <Avatar name="Lucie Gazdová" functions="Kronikář" />
        <Avatar
          name="Pavel Gazda"
          functions="Referent MTZ"
          photo="/avatars/08.jpg"
        />
        <Avatar
          name="Jaroslav Kubík"
          functions="Člen výboru"
          photo="/avatars/20.jpg"
        />
        <Avatar
          name="David Kubík"
          functions="Člen výboru"
          photo="/avatars/11.jpg"
        />
        <Avatar
          name="Silvie Ďurinová"
          functions="Člen výboru"
          photo="/avatars/22.jpg"
        />
        <Avatar
          name="Matiáš Ďurina"
          functions="Člen výboru"
          photo="/avatars/02.jpg"
        />
        <Avatar
          name="Lukáš Kučera"
          functions="Člen výboru"
          photo="/avatars/25.jpg"
        />

        <Avatar name="Tomáš Dominik" functions="Revizor" />
      </div>
    </div>
  );
}

export default clenove;
