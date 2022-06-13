import React from "react";
import { Avatar } from "../components";

function clenove() {
  return (
    <div className="container">
      <h2 className="text-xl text-center mb-5">
        Členové výboru SDH Bohuslavice
      </h2>
      <div className="flex justify-evenly gap-5 flex-wrap">
        <Avatar name="Antonín Blokša" functions="Starosta sboru" />
        <Avatar name="Robert Lasák" functions="Jednatel" />
        <Avatar name="Petr Kubík" functions="Náměstek starosty" />
        <Avatar name="Jan Manusch" functions="Velitel Sboru" />
        <Avatar name="Silvie Ďurinová" functions="Vedoucí mládeže" />
        <Avatar name="Jana Vitásková" functions="Revizor" />
        <Avatar name="Anna Sněhotová" functions="Hospodář" />
        <Avatar name="David Zajíček" functions="Org. referent sboru" />
        <Avatar name="David Kubík" functions="Člen výboru" />
        <Avatar name="David Vitásek" functions="Strojník" />
        <Avatar name="Adam Ryš" functions="Referent ochrany obyvatelstva" />
        <Avatar
          name="Jiří Lasák"
          functions="Referent prevence a výchovné činnosti"
        />
        <Avatar name="Jaroslav Kubík" functions="Člen výboru" />
        <Avatar name="Jarmila Blokšová" functions="Kronikář" />
        <Avatar name="Pavel Gazda" functions="Člen výboru" />
        <Avatar name="Zdeněk Tomíček" functions="Člen výboru" />
        <Avatar name="Kateřina Plevová" functions="Referentka žen" />
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
