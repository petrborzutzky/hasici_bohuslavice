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
          name="Antonín Blokša"
          functions="Starosta sboru"
          photo="/avatars/16.jpg"
        />
        <Avatar
          name="Robert Lasák"
          functions="Jednatel"
          photo="/avatars/17.jpg"
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
          name="Silvie Ďurinová"
          functions="Vedoucí mládeže"
          photo="/avatars/22.jpg"
        />
        <Avatar
          name="Jana Vitásková"
          functions="Revizor"
          photo="/avatars/10.jpg"
        />
        <Avatar
          name="Anna Sněhotová"
          functions="Hospodář"
          photo="/avatars/04.jpg"
        />
        <Avatar
          name="David Zajíček"
          functions="Org. referent sboru"
          photo="/avatars/03.jpg"
        />
        <Avatar
          name="David Kubík"
          functions="Člen výboru"
          photo="/avatars/11.jpg"
        />
        <Avatar
          name="David Vitásek"
          functions="Strojník"
          photo="/avatars/19.jpg"
        />
        <Avatar
          name="Adam Ryš"
          functions="Referent ochrany obyvatelstva"
          photo="/avatars/15.jpg"
        />
        <Avatar
          name="Jiří Lasák"
          functions="Referent prevence a výchovné činnosti"
          photo="/avatars/24.jpg"
        />
        <Avatar
          name="Jaroslav Kubík"
          functions="Člen výboru"
          photo="/avatars/20.jpg"
        />
        <Avatar
          name="Jarmila Blokšová"
          functions="Kronikář"
          photo="/avatars/23.jpg"
        />
        <Avatar
          name="Pavel Gazda"
          functions="Člen výboru"
          photo="/avatars/08.jpg"
        />
        <Avatar
          name="Zdeněk Tomíček"
          functions="Člen výboru"
          photo="/avatars/12.jpg"
        />
        <Avatar
          name="Kateřina Plevová"
          functions="Referentka žen"
          photo="/avatars/06.jpg"
        />
        <Avatar
          name="Petr Borzutzký"
          functions="Člen výboru"
          photo="/avatars/01.jpg"
        />
      </div>
    </div>
  );
}

export default clenove;
