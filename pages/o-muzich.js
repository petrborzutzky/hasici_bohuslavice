import React from "react";
import { Avatar } from "../components";

function OMuzich() {
  return (
    <div className="container">
      <h1 className="text-2xl text-center mb-5">Můžský tým</h1>
      <h3 className="text-lg font-bold mb-5">Členové</h3>
      <div className="flex justify-evenly gap-5 flex-wrap mb-5">
        <Avatar name="Jaroslav Kubík" functions="Rozdělovač" />
        <Avatar name="Jaroslav Černovský" functions="Mezispoj savic" />
        <Avatar name="Lukáš Kučera" functions="Koš" />
        <Avatar name="David Pašek" functions="Proudař" />
        <Avatar name="David Kubík" functions="Proudař" />
        <Avatar name="Matyáš Ďurina" functions="Proudař" />
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
