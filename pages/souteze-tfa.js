import React from "react"
import Link from "next/link";

function SoutezeTfa () {
  return <div className="container">
    <h1 className="text-2xl text-center mb-5">Soutěže</h1>
    <h3 className="text-lg font-bold mb-5 underline hover:text-red-700">
      <Link href="https://osh-opava.cz/iii-rocnik-poharu-ksh-msk-v-tfa/">Pohár Krajského sdružení hasičů v MSK v TFA</Link>
    </h3>
    <p className="mb-10">
    <ul className="list-disc ml-10">
      <li>1. kolo Ostravská věž - 01. 05. 2022 (HZS MSK)</li>
      <li>2. Kolo TFA Jablunkov - 04. 06. 2022 (SDH Jablunkov)</li>
      <li>3. Kolo TFA Guntramovice - 06. 08. 2022 (SDH Březová u Vítkova)</li>
      <li>4. Kolo TFA Hať - 03. 09. 2022 (SDH Hať)</li>
      <li><strong>5. Kolo TFA Bohuslavice - 10. 09. 2022 (SDH Bohuslavice)</strong></li>
    </ul>
    </p>
  </div>
}

export default SoutezeTfa
