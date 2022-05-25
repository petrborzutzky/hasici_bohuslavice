import React from "react"
import Link from "next/link";
import {ExternalLinkIcon} from "@heroicons/react/outline"

function SoutezeMuzi () {
  return <div className="container">
    <h1 className="text-2xl text-center mb-5">Soutěže</h1>
    
    <h3 className="text-lg font-bold mb-5">
        <Link href="https://www.nhhl.cz/">
          <span className="text-lg font-bold mb-5 cursor-pointer underline hover:text-red-700">Noční hlučínská hasičská liga (NHHL)<ExternalLinkIcon className="h-6 w-6 inline -mt-1 ml-1" /></span>
        </Link>
    </h3>
    <p className="mb-10">Mužské družstvo je pravidelným účastníkem NHHL. V roce 2022 se bude konat již celkově 8. ročník.
    </p>
    <h3 className="text-lg font-bold mb-5">Okolní pohárové soutěže</h3>
    <p className="mb-10">V posledních letech je účast na okolních soutěžích slabší. Kluci odjezdí doslova pár soutěží.</p>

    <h3 className="text-lg font-bold mb-5">Postupové soutěže</h3>
    <p className="mb-10">Každý rok na jaře se koná v našem okrsku (Bohuslavice, Dolní Benešov, Píšť, Závada) postupová soutěž. Nejlepší tým z okrsku postoupí do okresního finále. Z toho vede cesta do krajského a dále pak až do republikového finale.<br /><br />
    Letošní soutěž se koná <strong>v Dolním Benešově na Zámku dne 21. 5. 2022</strong>.
    </p>
  </div>
}

export default SoutezeMuzi
