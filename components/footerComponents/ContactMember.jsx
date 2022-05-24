import React from "react"
import Link from "next/link"
import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import { SocialIcon } from "react-social-icons";
import { useState } from "react";



const ContactMember = ( {title, name, phone, mail, facebook} ) => {

  const [fColor, setfColor] = useState("white")

  return <div>
      <div className="text-xl mb-5">{title}</div>
      {name}<br />
      <PhoneIcon className="h-5 w-5 mr-2 inline" />{phone}<br />
      <MailIcon className="h-5 w-5 mr-2 inline" /> <Link href={`mailto:${mail}`}>{mail}</Link><br />
      {facebook ? 
        <SocialIcon url={`https://www.facebook.com/${facebook}`} style={{ height: 30, width: 30 }} bgColor={fColor} className="mt-3" onMouseOver={() => setfColor("#1e81b0")} onMouseLeave = {() => setfColor("white")} />
        : ""}
    </div>
}
export default ContactMember
