import React from 'react';

export interface AvatarProps {
  name: string;
  photo?: string;
  functions: string;
}

const Avatar = ({ name, photo, functions }: AvatarProps) => {
  const photoLink = photo ? photo : '/avatars/avatar.png';
  const shadow = photo ? 'shadow-xl' : '';
  return (
    <div className="sm:w-48 sm:h-72 w-40 p-3 shadow-lg text-center">
      <img
        src={photoLink}
        alt={`Obličej - ${name}`}
        className={`rounded-full mb-3 ${shadow}`}
      />
      <h3 className="font-semibold mb-3">{name}</h3>
      <span>{functions}</span>
    </div>
  );
};

export default Avatar;
