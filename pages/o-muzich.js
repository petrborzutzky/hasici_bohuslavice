import React from "react";
import { Avatar } from "../components";

function OMuzich() {
  return (
    <div className="container">
      <h1 className="text-2xl text-center mb-5">Můžský tým</h1>
      <h3 className="text-lg font-bold mb-5">Členové</h3>
      <div className="flex justify-evenly gap-5 flex-wrap mb-5">
        <Avatar
          name="Jaroslav Kubík"
          functions="Rozdělovač"
          photo="/avatars/20.jpg"
        />
        <Avatar
          name="Jaroslav Černovský"
          functions="Mezispoj savic"
          photo="/avatars/26.jpg"
        />
        <Avatar name="Lukáš Kučera" functions="Koš" photo="/avatars/25.jpg" />
        <Avatar
          name="David Pašek"
          functions="Proudař"
          photo="/avatars/21.jpg"
        />
        <Avatar
          name="David Kubík"
          functions="Proudař"
          photo="/avatars/13.jpg"
        />
        <Avatar
          name="Matyáš Ďurina"
          functions="Proudař"
          photo="/avatars/02.jpg"
        />
      </div>

      <h3 className="text-lg font-bold mb-5">Pro zájemce</h3>
      <p className="mb-10">
        Družstvo mužů má pravidelné tréninky <strong>ve středu v 18:30</strong>.
        Kluci trénují na hrišti SK Bohuslavice. Pokud má někdo zájem si na
        tréninku vyzkoušet, jestli by ho hasičský sport bavil, oslovte kohokoli
        z členů týmu.
      </p>
    </div>
  );
}

export default OMuzich;
