import React from "react";
import { PiUserCircle } from "react-icons/pi";

const Avatar = ({ userId, name, imageUrl, width, height }) => {
  //Muhammad Ari
  let avatarName = "";

  if (name) {
    const splitName = name?.split(" ");

    if (splitName.length > 1) {
      avatarName = splitName[0][0] + splitName[1][0];
    } else {
      avatarName = splitName[0][0];
    }
  }
  const bgColor = [
    "bg-slate-200",
    "bg-teal-200",
    "bg-red-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-blue-200",
    "bg-indigo-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-cyan-200",
  ];
  const randomNumber = Math.floor(Math.random() * 5);

  return (
    <div
      className={`text-slate-800 overflow-hidden rounded-full border font-bold `}
      style={{ width: width + "px", height: height + "px" }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          width={width}
          height={height}
          className="overflow-hidden rounded-full"
        />
      ) : name ? (
        <div
          style={{ width: width + "px", height: height + "px" }}
          className={`overflow-hidden rounded-full flex justify-center items-center text-lg ${bgColor[randomNumber]}`}
        >
          {avatarName}
        </div>
      ) : (
        <PiUserCircle size={width} />
      )}
    </div>
  );
};

export default Avatar;
