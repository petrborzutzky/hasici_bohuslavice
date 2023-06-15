import React from 'react';
import Link from 'next/link';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';

export interface ContactMemberProps {
  title: string;
  name: string;
  phone: string;
  mail: string;
  facebook?: string;
}

const ContactMember = ({
  title,
  name,
  phone,
  mail,
  facebook,
}: ContactMemberProps) => {
  const [fColor, setfColor] = useState('white');
  const [bColor, setbColor] = useState('transparent');
  const phoneWithoutSpace = phone.replace(/ /g, '');

  return (
    <div>
      <div className="text-xl mb-5">{title}</div>
      {name}
      <br />

      <Link href={`tel:${phoneWithoutSpace}`}>
        <span className="hover:text-red-700 cursor-pointer">
          <PhoneIcon className="h-5 w-5 mr-2 inline" />
          {phone}
        </span>
      </Link>

      <br />

      <Link href={`mailto:${mail}`}>
        <span className="hover:text-red-700 cursor-pointer">
          <MailIcon className="h-5 w-5 mr-2 inline" /> {mail}
        </span>
      </Link>
      <br />
      {facebook ? (
        <SocialIcon
          url={`https://www.facebook.com/${facebook}`}
          style={{ height: 30, width: 30 }}
          bgColor={fColor}
          fgColor={bColor}
          className="mt-3"
          onMouseOver={() => {
            setfColor('#60A5FA');
            setbColor('white');
          }}
          onMouseLeave={() => {
            setfColor('white');
            setbColor('transparent');
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
};
export default ContactMember;
