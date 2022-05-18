import React from "react"
import Link from "next/link"
import Avatar from "../components/Avatar"

function OTfa () {
  return <div className="container">
    <h1 className="text-2xl text-center mb-5">TFA</h1>

    <h3 className="text-lg font-bold mb-5">Co to vlastně je?</h3>
    <p className="mb-10">TFA (Toughest Firefighter Alive - nejtvrdší hasič přežije) je disciplína simulující pracovní zásah hasiče. Disciplína je jak silově tak kondičně velice náročná. Obvykle sestává z překonání 2m bariéry, hammerboxu, roztažení a smotání hadic, přenesení figuríny a závaží (barelů s vodou). Trať závodník absolvuje v 3vrstvém zásahovém obleku, hasičské helmě a rukavicích.</p>


    <h3 className="text-lg font-bold mb-5">Členové TFA Bohuslavice</h3>
    <div className="flex justify-evenly gap-5 flex-wrap mb-5">
        <Avatar name="Adam Ryš" functions="nad 35 let" />
        <Avatar name="David Pašek" functions="do 35 let" />
        <Avatar name="Matyáš Ďurina" functions="do 35 let" />
        <Avatar name="Sylvie Ďurinová" functions="žena" />
        <Avatar name="Nikol Miketová" functions="žena" />
        <Avatar name="Jiří Lasák" functions="do 35 let" />
        <Avatar name="Jiří Vitásek" functions="do 35 let" />
    </div>
   


    <h3 className="text-lg font-bold mb-5">Pro zájemce</h3>
    <p className="mb-10">Družstvo má nepravidelné tréninky ve <strong>čtvrtek v 17:00 na hasičské zbrojnici.</strong> Pokud máte zájem si disciplínu vyzkoušet, ozvěte se nejlépe Adamu Ryšovi.</p>
    
  </div>
}

export default OTfa
