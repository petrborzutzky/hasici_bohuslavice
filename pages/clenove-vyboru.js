import React from "react"
import Avatar from "../components/Avatar"

function clenove() {
  return (
    <div className="container">
      <h2 className="text-xl text-center mb-5">Členové výboru SDH Bohuslavice</h2>
      <div className="flex justify-evenly gap-5 flex-wrap">
        <Avatar name="Antonín Blokša" functions="Starosta sboru" />
        <Avatar name="Robert Lasák" functions="Jednatel" />
        <Avatar name="Petr Kubík" functions="Vedoucí mládeže" />
        <Avatar name="Jan Mausch" functions="Velitel Sboru" />
        <Avatar name="Anna Vitásková" functions="Revizor sboru" />
        <Avatar name="Anna Sněhotová" functions="Hospodář" />
        <Avatar name="David Zajíček" functions="Člen výboru" />
        <Avatar name="David Kubík" functions="Člen výboru" />
        <Avatar name="David Vitásek" functions="Člen výboru" />
        <Avatar name="Adam Ryš" functions="Člen výboru" />
        <Avatar name="Jiří Lasák" functions="Člen výboru" />
        <Avatar name="Jaroslav Kubík" functions="Člen výboru" />
        <Avatar name="Jarmila Blokšová" functions="Člen výboru" />
        <Avatar name="Sylva Ďurinová" functions="Člen výboru" />
      </div>
    </div>
  )
}

export default clenove