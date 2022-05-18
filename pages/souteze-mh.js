import React from "react"
import Link from "next/link";

function SoutezeMh () {
  return <div className="container">
    <h1 className="text-2xl text-center mb-5">Soutěže</h1>
    <h3 className="text-lg font-bold mb-5 underline hover:text-red-700"><Link href="https://hlucinska-liga-mladeze.webnode.cz/">Hlučínská Liga mládých hasičů</Link></h3>
    <p className="mb-10">Naši mladí hasiči jezdí pravidelně na soutěžě hlučínské ligy mladých hasičů (HLMH). Soutěžě probíhají od začátku září do června (cca 8 - 10 kol). Nejlepších 5 družstev si na koci vybojuje postup do okresního finále. Nejlepší 3 družstva mohou nasledně postoupit až do finále krajského.<br /> <br />
    <Link href="https://hlucinska-liga-mladeze.webnode.cz/kalendar-soutezi/2021-2022/"><span className="underline hover:text-red-700 cursor-pointer">Kalendář soutěží 2021/2022</span></Link>
    </p>

    
    
    <h3 className="text-lg font-bold mb-5">Hra plamen</h3>
    <p className="mb-10">Hra plamen je celorepubliková soutěž mladých hasičů. Sestává z podzimního a jarního okrskového kola (Celkem 2 soutěže). Nejlepší družstvo okrsku (náš okrsek je okrsek 12. - Bohuslavice, Dolní Benešov, Závada, Píšť) postupuje na okresní kolo a dále na krajské, případně až republikové kolo (finále).</p>
    
  </div>
}

export default SoutezeMh
