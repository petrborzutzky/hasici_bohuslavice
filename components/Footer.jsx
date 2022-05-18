import React from "react"
import { ContactMember } from "./footerComponents"

const Footer = () => {
  return <div className="w-full flex bg-stone-600 flex-wrap justify-center text-center gap-20 text-white p-5">
      <ContactMember title="Velitel jednotky" name="Jan Manusch" phone="+420 724 188 479" mail="jan.manusch@agroup.cz" facebook="jan.manusch.3" />
      <ContactMember title="Starosta Sdh" name="Antonín Blokša" phone="+420 606 452 567" mail="bloksatonda@seznam.cz" />
      <ContactMember title="Vedoucí mládeže" name="Petr Kubík" phone="+420 775 260 184" mail="peterek@seznam.cz" facebook="kubik.petr.3" />
    </div>
  
}

export default Footer
