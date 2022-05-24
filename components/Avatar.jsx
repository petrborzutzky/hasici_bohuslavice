import React from "react"

const Avatar = ( {name, photo, functions} ) => {
  const photoLink = photo ? photo : "/avatars/avatar.png"
  return (
    <div className="sm:w-48 sm:h-72 w-40 p-3 shadow-lg text-center">
      <img src={photoLink} className="rounded-full mb-3"></img>
      <h3 className="font-semibold mb-3">{name}</h3>
      <span>{functions}</span>
    </div>
  )
}

export default Avatar